import { useState, useEffect } from "react";
import { axiosInstance } from "../../helpers/axios.helper";
import { toast } from "react-toastify";

function TweetComposer({ onSubmit, loading = false }) {
  const [content, setContent] = useState("");
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [taggedVideos, setTaggedVideos] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [videoQuery, setVideoQuery] = useState("");
  const [userResults, setUserResults] = useState([]);
  const [videoResults, setVideoResults] = useState([]);
  const [filterUserId, setFilterUserId] = useState("");

  useEffect(() => {
    if (userQuery.trim().length < 3) {
      setUserResults([]);
      return;
    }
    const t = setTimeout(async () => {
      try {
        const { data } = await axiosInstance.get(`/users/search?q=${encodeURIComponent(userQuery)}`);
        setUserResults(data.data || []);
      } catch {
        setUserResults([]);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [userQuery]);

  useEffect(() => {
    if (videoQuery.trim().length < 3 && !filterUserId) {
      setVideoResults([]);
      return;
    }
    const t = setTimeout(async () => {
      try {
        if (videoQuery.trim().length >= 3) {
          const params = new URLSearchParams({ search: videoQuery, limit: 10 });
          if (filterUserId) params.set("userId", filterUserId);
          const { data } = await axiosInstance.get(`/videos/all/option?${params}`);
          setVideoResults(data.data?.videos || []);
        } else if (filterUserId) {
          const { data } = await axiosInstance.get(`/videos?userId=${filterUserId}`);
          setVideoResults((data.data || []).slice(0, 10));
        }
      } catch {
        setVideoResults([]);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [videoQuery, filterUserId]);

  const addUser = (user) => {
    if (taggedUsers.length >= 5) return toast.error("Maximum 5 users");
    if (taggedUsers.some((u) => u._id === user._id)) return;
    setTaggedUsers((prev) => [...prev, user]);
    setUserQuery("");
    setUserResults([]);
  };

  const addVideo = (video) => {
    if (taggedVideos.length >= 5) return toast.error("Maximum 5 videos");
    if (taggedVideos.some((v) => v._id === video._id)) return;
    setTaggedVideos((prev) => [...prev, video]);
    setVideoQuery("");
    setVideoResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = content.trim();
    if (trimmed.length < 10) return toast.error("Minimum 10 characters required");
    if (trimmed.length > 500) return toast.error("Maximum 500 characters allowed");
    if (taggedUsers.length < 1) return toast.error("Tag at least one user");
    if (taggedVideos.length < 1) return toast.error("Tag at least one video");

    onSubmit({
      content: trimmed,
      taggedUsers: taggedUsers.map((u) => u._id),
      taggedVideos: taggedVideos.map((v) => v._id),
    });
  };

  const reset = () => {
    setContent("");
    setTaggedUsers([]);
    setTaggedVideos([]);
    setUserQuery("");
    setVideoQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 border border-gray-700 rounded-lg pb-3 p-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-3 h-20 w-full resize-none border-none bg-transparent outline-none"
        placeholder="Write your tweet (tag users and videos below)"
      />

      <div className="mb-3">
        <label className="text-sm text-gray-400">Tag users</label>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          placeholder="Search username (min 3 chars)..."
          className="mt-1 w-full rounded bg-slate-800 px-3 py-2 text-sm outline-none"
        />
        {userResults.length > 0 && (
          <ul className="mt-1 max-h-32 overflow-auto rounded border border-gray-700 bg-slate-900">
            {userResults.map((u) => (
              <li key={u._id}>
                <button type="button" onClick={() => addUser(u)} className="w-full px-3 py-2 text-left text-sm hover:bg-slate-800">
                  @{u.username} — {u.fullName}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 flex flex-wrap gap-2">
          {taggedUsers.map((u) => (
            <span key={u._id} className="rounded-full bg-[#ae7aff]/20 px-3 py-1 text-sm text-[#ae7aff]">
              @{u.username}
              <button type="button" className="ml-2" onClick={() => setTaggedUsers((p) => p.filter((x) => x._id !== u._id))}>×</button>
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="text-sm text-gray-400">Tag videos</label>
        {taggedUsers.length > 0 && (
          <select
            value={filterUserId}
            onChange={(e) => setFilterUserId(e.target.value)}
            className="mt-1 mb-1 w-full rounded bg-slate-800 px-3 py-2 text-sm outline-none"
          >
            <option value="">All published videos</option>
            {taggedUsers.map((u) => (
              <option key={u._id} value={u._id}>@{u.username}&apos;s videos only</option>
            ))}
          </select>
        )}
        <input
          type="text"
          value={videoQuery}
          onChange={(e) => setVideoQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          placeholder="Search video title (min 3 chars)..."
          className="w-full rounded bg-slate-800 px-3 py-2 text-sm outline-none"
        />
        {videoResults.length > 0 && (
          <ul className="mt-1 max-h-40 overflow-auto rounded border border-gray-700 bg-slate-900">
            {videoResults.map((v) => (
              <li key={v._id}>
                <button type="button" onClick={() => addVideo(v)} className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-800">
                  <img src={v.thumbnail} alt="" className="h-8 w-12 rounded object-cover" />
                  <span className="line-clamp-1">{v.title}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 flex flex-col gap-2">
          {taggedVideos.map((v) => (
            <div key={v._id} className="flex items-center gap-2 rounded bg-slate-800 p-2 text-sm">
              <img src={v.thumbnail} alt="" className="h-10 w-16 rounded object-cover" />
              <span className="line-clamp-1 flex-1">{v.title}</span>
              <button type="button" onClick={() => setTaggedVideos((p) => p.filter((x) => x._id !== v._id))}>×</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button type="button" onClick={reset} className="rounded px-3 py-2 text-sm hover:bg-slate-700">
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-[#ae7aff] px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Tweet"}
        </button>
      </div>
    </form>
  );
}

export default TweetComposer;
