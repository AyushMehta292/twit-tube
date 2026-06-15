import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, LikesComponent } from "../index";
import { formatTimestamp } from "../../helpers/formatFigures";
import {
  deleteTweetComment,
  replyToTweetComment,
  updateTweetComment,
} from "../../app/Slices/tweetCommentSlice";

function TweetCommentAtom({ comment, isReply = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [content, setContent] = useState(comment?.content);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  function handleCancel() {
    setIsEditing(false);
    setContent(comment.content);
  }

  function handleUpdate() {
    if (!content.trim()) return toast.warning("Please enter some message");
    dispatch(updateTweetComment({ commentId: comment._id, content: content.trim() }));
    setIsEditing(false);
  }

  function handleDelete() {
    dispatch(deleteTweetComment({ commentId: comment._id }));
  }

  function handleReply(e) {
    e.preventDefault();
    if (!replyText.trim()) return toast.warning("Please enter a reply");
    dispatch(replyToTweetComment({ commentId: comment._id, content: replyText.trim() }));
    setReplyText("");
    setIsReplying(false);
  }

  return (
    <div className={`${isReply ? "ml-12 mt-2" : ""}`}>
      <div className="flex justify-between">
        <span className="flex w-full gap-x-3">
          <div className="mt-1 h-10 w-10 shrink-0">
            <Link to={`/user/${comment.owner?.username}`}>
              <img
                src={comment.owner?.avatar}
                alt={comment.owner?.username}
                className="h-full w-full rounded-full object-cover"
              />
            </Link>
          </div>
          <div className="block w-full">
            <p className="flex items-center text-xs text-gray-200">
              {comment.owner?.fullName} ·{" "}
              <span className="ml-1 text-xs text-gray-400">
                {formatTimestamp(comment.createdAt)}
              </span>
            </p>
            <p className="text-xs text-gray-400">@{comment.owner?.username}</p>
            <p className="my-1 text-sm">
              {isEditing ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full border-b border-[#ae7aff] bg-transparent outline-none"
                />
              ) : (
                content
              )}
            </p>
            <div className="flex items-center gap-3">
              <LikesComponent
                tweetCommentId={comment._id}
                isLiked={comment.isLiked}
                totalLikes={comment.likesCount}
                isDisLiked={comment.isDisLiked}
                totalDisLikes={comment.disLikesCount}
              />
              {!isReply && (
                <button
                  type="button"
                  onClick={() => setIsReplying((p) => !p)}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Reply
                </button>
              )}
            </div>
          </div>
        </span>
        {comment.isOwner && (
          <span className="flex items-end">
            <Button
              type="button"
              onClick={() => (isEditing ? handleCancel() : handleDelete())}
              className={`mr-2 rounded-3xl bg-transparent px-1 pb-1 pt-0 text-sm font-semibold text-white hover:border hover:border-b-white ${
                isEditing ? "hover:bg-gray-700" : "hover:bg-red-400 hover:text-black"
              }`}
            >
              {isEditing ? "Cancel" : "Delete"}
            </Button>
            <Button
              type="button"
              onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
              disabled={isEditing ? comment.content === content || !content.trim() : false}
              className="rounded-3xl border border-b-white bg-[#ae7aff] px-2 pb-1 pt-0 text-sm font-semibold text-black hover:bg-[#b48ef1] disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-white"
            >
              {isEditing ? "Update" : "Edit"}
            </Button>
          </span>
        )}
      </div>

      {isReplying && (
        <form onSubmit={handleReply} className="ml-12 mt-2 flex gap-2">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1 rounded border bg-transparent px-2 py-1 text-sm outline-none focus:border-[#ae7aff]"
          />
          <button type="submit" className="rounded bg-[#ae7aff] px-3 py-1 text-sm font-semibold text-black">
            Reply
          </button>
        </form>
      )}

      {(comment.replies || []).map((reply) => (
        <TweetCommentAtom key={reply._id} comment={reply} isReply />
      ))}
    </div>
  );
}

export default TweetCommentAtom;
