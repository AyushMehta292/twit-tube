import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoginPopup } from "../index";
import TweetCommentAtom from "./TweetCommentAtom";
import { addTweetComment, getTweetComments } from "../../app/Slices/tweetCommentSlice";

function TweetComments({ tweetId }) {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const loginPopupDialog = useRef();
  const { status: authStatus } = useSelector(({ auth }) => auth);
  const { data: comments, loading } = useSelector((state) => state.tweetComment);
  const [localComments, setLocalComments] = useState(null);

  useEffect(() => {
    if (!tweetId) return;
    dispatch(getTweetComments(tweetId)).then((res) => {
      if (res.payload) setLocalComments(res.payload);
    });
  }, [tweetId, dispatch]);

  function handleAddComment(e) {
    e.preventDefault();
    if (!authStatus) return loginPopupDialog.current?.open();
    const content = e.target.content.value.trim();
    if (!content) return toast.warning("Please enter a comment");
    dispatch(addTweetComment({ tweetId, content }));
    inputRef.current.value = "";
  }

  const list = comments?.length ? comments : localComments;

  if (!list && loading) {
    return <div className="mt-4 h-32 animate-pulse rounded bg-slate-100/10" />;
  }

  return (
    <div className="mt-6">
      <LoginPopup ref={loginPopupDialog} message="Sign in to comment..." />
      <h6 className="mb-4 font-semibold">{list?.length || 0} Comments</h6>

      <form onSubmit={handleAddComment} className="mb-4 flex items-center rounded-lg border px-2 py-1">
        <input
          ref={inputRef}
          type="text"
          name="content"
          placeholder="Add a comment"
          className="flex-1 bg-transparent px-2 py-1 outline-none"
        />
        <button
          type="submit"
          className="rounded-3xl border border-b-white bg-[#ae7aff] px-3 py-1 text-sm font-semibold text-black hover:bg-[#b48ef1]"
        >
          Comment
        </button>
      </form>

      <hr className="mb-4 border-gray-700" />

      {list?.map((comment) => (
        <div key={comment._id} className="mb-4">
          <TweetCommentAtom comment={comment} />
        </div>
      ))}
    </div>
  );
}

export default TweetComments;
