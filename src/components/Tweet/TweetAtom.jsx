import { useEffect, useRef } from "react";
import { Button, CommentLike, LikesComponent } from "../index";
import { useState } from "react";
import { formatTimestamp } from "../../helpers/formatFigures";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteTweet, getTweet, updateTweet } from "../../app/Slices/tweetSlice";
import { Link } from "react-router-dom";

function TweetAtom({ tweet, owner, authStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(tweet?.content);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  function handleCancel() {
    setIsEditing(false);
    setContent(tweet.content);
  }

  function handleEditing() {
    setIsEditing(true);
  }

  function handleUpdate() {
    if (!content.trim()) {
      toast.warning("Please enter some message");
      return;
    } else if (content.trim()?.length < 10) {
      toast.error("Minimum 10 characters are required");
      return;
    } else if (content.trim()?.length > 500) {
      toast.error("Maximum 500 characters are allowed");
      return;
    }
    dispatch(updateTweet({ tweetId: tweet._id, data: { content } }));
    setIsEditing(false);
  }

  function handleDelete() {
    dispatch(deleteTweet({ tweetId: tweet._id }));
  }

  return (
    <>
      <li className="flex gap-3 relative border-b border-gray-700 py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <Link to={`${owner ? "" : "/user/" + tweet.owner?.username}`}>
            <img
              src={tweet.owner?.avatar}
              alt={tweet.owner?.username}
              className="h-full w-full rounded-full object-cover object-center"
            />
          </Link>
        </div>
        <div className="w-full ">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">
              <Link to={`${owner ? "" : "/user/" + tweet.owner?.username}`}>
                {tweet.owner?.fullName}
              </Link>
            </span>
             
            <span className="inline-block text-sm text-gray-400">
              {formatTimestamp(tweet.createdAt)}
            </span>
          </h4>
          <p className="mb-2">
            {!isEditing && <span>{content}</span>}
            {isEditing && (
              <input
                ref={inputRef}
                type="text"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                disabled={!owner || !isEditing}
                className=" w-full bg-transparent outline-none border-b-[1px] border-transparent enabled:border-[#ae7aff] focus:border-[#ae7aff]"
                value={content}
              />
            )}
          </p>

          {tweet.taggedUsers?.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              {tweet.taggedUsers.map((u) => (
                <Link
                  key={u._id}
                  to={`/user/${u.username}`}
                  className="rounded-full bg-[#ae7aff]/20 px-3 py-1 text-sm text-[#ae7aff] hover:bg-[#ae7aff]/30"
                >
                  @{u.username}
                </Link>
              ))}
            </div>
          )}

          {tweet.taggedVideos?.length > 0 && (
            <div className="mb-3 flex flex-col gap-2">
              {tweet.taggedVideos.map((v) => (
                <Link
                  key={v._id}
                  to={`/watch/${v._id}`}
                  className="flex items-center gap-3 rounded-lg bg-slate-800 p-2 hover:bg-slate-700"
                >
                  <img src={v.thumbnail} alt="" className="h-14 w-24 rounded object-cover" />
                  <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-medium">{v.title}</p>
                    <p className="text-xs text-gray-400">@{v.owner?.username}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4">
          <LikesComponent
            tweetId={tweet._id}
            isLiked={tweet.isLiked}
            totalLikes={tweet.totalLikes}
            isDisLiked={tweet.isDisLiked}
            totalDisLikes={tweet.totalDisLikes}
            authStatus={authStatus}
          />
          <Link
            to={`/tweets/${tweet._id}`}
            className="text-sm text-gray-400 hover:text-[#ae7aff]"
          >
            {tweet.totalComments > 0
              ? `View thread (${tweet.totalComments})`
              : "View thread"}
          </Link>
          </div>
        </div>
        {/* Tweet controls - Only Owner */}
        {owner && (
          <form className="absolute bottom-2 right-2 flex size-fit items-end">
            <span className="flex justify-end">
              {/* Delete and Cancel button */}
              <Button
                type="button"
                onClick={() => {
                  isEditing ? handleCancel() : handleDelete();
                }}
                className={` rounded-3xl pt-0 bg-transparent hover:border hover:border-b-white disabled:cursor-not-allowed text-white text-sm font-semibold px-1 pb-1 mr-2 ${
                  isEditing ? "hover:bg-gray-700" : "hover:bg-red-400 hover:text-black "
                }`}
              >
                {isEditing ? "Cancel" : "Delete"}
              </Button>

              {/* Edit & Update Button */}
              <Button
                type="button"
                onClick={() => {
                  isEditing ? handleUpdate() : handleEditing();
                }}
                disabled={isEditing ? tweet.content === content || !content.trim() : false}
                className="rounded-3xl pt-0 bg-[#ae7aff] disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed hover:bg-[#b48ef1] text-sm text-black font-semibold border border-b-white px-2 pb-1"
              >
                {isEditing ? "Update" : "Edit"}
              </Button>
            </span>
          </form>
        )}
      </li>
    </>
  );
}

export default TweetAtom;
