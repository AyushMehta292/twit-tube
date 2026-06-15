import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearCurrentTweet, getTweetById } from "../app/Slices/tweetSlice";
import { TweetAtom, TweetComments } from "../components/index";

function TweetDetail() {
  const { tweetId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentTweet, loading } = useSelector((state) => state.tweet);
  const { status: authStatus } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (!tweetId) return;
    dispatch(getTweetById(tweetId));
    return () => dispatch(clearCurrentTweet());
  }, [tweetId, dispatch]);

  if (loading && !currentTweet) {
    return (
      <section className="w-full px-3 py-4 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="h-48 animate-pulse rounded bg-slate-100/10" />
      </section>
    );
  }

  if (!currentTweet) {
    return (
      <section className="w-full px-3 py-8 text-center sm:ml-[70px] lg:ml-0">
        <p className="text-gray-400">Tweet not found</p>
        <button onClick={() => navigate("/tweets")} className="mt-4 text-[#ae7aff] hover:underline">
          Back to tweets
        </button>
      </section>
    );
  }

  return (
    <section className="w-full px-3 py-4 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <ul>
        <TweetAtom tweet={currentTweet} owner={currentTweet.isOwner} authStatus={authStatus} />
      </ul>
      <TweetComments tweetId={tweetId} />
    </section>
  );
}

export default TweetDetail;
