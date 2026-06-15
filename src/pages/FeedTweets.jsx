import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTweet,
  getAllTweets,
  getRelevantTweets,
} from "../app/Slices/tweetSlice";
import { TweetAtom, EmptyTweet, LoginPopup } from "../components/index";
import TweetComposer from "../components/Tweet/TweetComposer";

function FeedTweets() {
  const dispatch = useDispatch();
  const loginPopupDialog = useRef();

  const { data, status, loading } = useSelector(({ tweet }) => tweet);
  const { status: authStatus } = useSelector(({ auth }) => auth);

  const [localTweets, setLocalTweets] = useState(null);
  const [activeTab, setActiveTab] = useState("explore");
  const [showComposer, setShowComposer] = useState(false);

  useEffect(() => {
    const fetcher = activeTab === "forYou" ? getRelevantTweets : getAllTweets;
    dispatch(fetcher()).then((res) => {
      if (res.payload) setLocalTweets(res.payload);
    });
  }, [authStatus, activeTab, dispatch]);

  function handleTabChange(tab) {
    if (tab === "forYou" && !authStatus) {
      return loginPopupDialog.current?.open();
    }
    setActiveTab(tab);
    setLocalTweets(null);
  }

  function addTweet(payload) {
    if (!authStatus) return loginPopupDialog.current?.open();
    dispatch(createTweet({ data: payload })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setShowComposer(false);
        const fetcher = activeTab === "forYou" ? getRelevantTweets : getAllTweets;
        dispatch(fetcher());
      }
    });
  }

  if (!localTweets && !data) {
    return (
      <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="mt-2 h-32 animate-pulse rounded bg-slate-100/10" />
        <hr className="my-4 border-[#ae7aff]/80" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-4 h-24 animate-pulse rounded bg-slate-100/10" />
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
      <LoginPopup ref={loginPopupDialog} message="Sign in to Tweet..." />

      <section className="w-full py-1 px-3 pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="mb-4 flex gap-4 border-b border-gray-700">
          <button
            type="button"
            onClick={() => handleTabChange("explore")}
            className={`pb-2 text-sm font-semibold ${
              activeTab === "explore"
                ? "border-b-2 border-[#ae7aff] text-[#ae7aff]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Explore
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("forYou")}
            className={`pb-2 text-sm font-semibold ${
              activeTab === "forYou"
                ? "border-b-2 border-[#ae7aff] text-[#ae7aff]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            For You
          </button>
        </div>

        {authStatus && !showComposer && (
          <button
            type="button"
            onClick={() => setShowComposer(true)}
            className="mb-4 w-full rounded-lg border border-gray-700 p-3 text-left text-gray-400 hover:border-[#ae7aff]"
          >
            What&apos;s on your mind? Tag users and videos...
          </button>
        )}

        {showComposer && (
          <TweetComposer
            onSubmit={addTweet}
            loading={loading}
          />
        )}

        <hr className="my-4 border-[#ae7aff]" />

        {tweets?.length > 0 ? (
          <ul>
            {tweets.map((tweet) => (
              <TweetAtom key={tweet._id} tweet={tweet} owner={tweet.isOwner} authStatus={authStatus} />
            ))}
          </ul>
        ) : (
          <EmptyTweet />
        )}
      </section>
    </>
  );
}

export default FeedTweets;
