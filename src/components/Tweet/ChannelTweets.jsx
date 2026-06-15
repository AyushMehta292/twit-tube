import { useState, useEffect } from "react";
import EmptyTweet from "./EmptyTweet";
import { useDispatch, useSelector } from "react-redux";
import { getTweet, createTweet } from "../../app/Slices/tweetSlice";
import { MyChannelEmptyTweet, TweetAtom } from "../index";
import TweetComposer from "./TweetComposer";
import { useParams } from "react-router-dom";

function ChannelTweets({ owner = false }) {
  const dispatch = useDispatch();
  const { username } = useParams();

  const { data, status, loading } = useSelector(({ tweet }) => tweet);
  const userId = useSelector(({ user }) => user.userData?._id);
  const { status: authStatus, userData: currentUser } = useSelector(({ auth }) => auth);

  const [localTweets, setLocalTweets] = useState(null);
  const [showComposer, setShowComposer] = useState(false);

  const channelUserId = owner ? currentUser?._id : userId;

  useEffect(() => {
    if (!channelUserId) return;
    dispatch(getTweet(channelUserId)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") setLocalTweets(res.payload);
    });
  }, [username, channelUserId, authStatus, dispatch]);

  function addTweet(payload) {
    dispatch(createTweet({ data: payload })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setShowComposer(false);
        dispatch(getTweet(currentUser?._id));
      }
    });
  }

  if (!localTweets) {
    return (
      <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="mt-2 h-32 animate-pulse rounded bg-slate-100/10" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="my-4 h-20 animate-pulse rounded bg-slate-100/10" />
        ))}
      </section>
    );
  }

  const tweets = data || localTweets;

  if (!status && !tweets) {
    return (
      <div className="flex h-screen w-full flex-col gap-y-4 rounded bg-slate-100/10 px-16 py-4 animate-pulse" />
    );
  }

  return (
    <>
      {owner && !showComposer && (
        <button
          type="button"
          onClick={() => setShowComposer(true)}
          className="mt-2 w-full rounded-lg border border-gray-700 p-3 text-left text-gray-400 hover:border-[#ae7aff]"
        >
          Write a tweet — tag users and videos...
        </button>
      )}
      {owner && showComposer && (
        <TweetComposer onSubmit={addTweet} loading={loading} />
      )}
      {tweets?.length > 0 ? (
        <ul className="py-4">
          {tweets.map((tweet) => (
            <TweetAtom
              key={tweet._id}
              tweet={tweet}
              owner={owner ? tweet.isOwner : false}
              authStatus={authStatus}
            />
          ))}
        </ul>
      ) : owner ? (
        <MyChannelEmptyTweet />
      ) : (
        <EmptyTweet />
      )}
    </>
  );
}

export default ChannelTweets;
