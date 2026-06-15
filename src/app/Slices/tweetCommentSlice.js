import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: [],
};

export const getTweetComments = createAsyncThunk("tweetComment/getTweetComments", async (tweetId) => {
  const response = await axiosInstance.get(`/tweet-comments/tweet/${tweetId}`);
  return response.data.data;
});

export const addTweetComment = createAsyncThunk(
  "tweetComment/addTweetComment",
  async ({ tweetId, content }) => {
    const response = await axiosInstance.post(`/tweet-comments/tweet/${tweetId}`, { content });
    return response.data.data;
  }
);

export const replyToTweetComment = createAsyncThunk(
  "tweetComment/replyToTweetComment",
  async ({ commentId, content }) => {
    const response = await axiosInstance.post(`/tweet-comments/${commentId}/reply`, { content });
    return response.data.data;
  }
);

export const updateTweetComment = createAsyncThunk(
  "tweetComment/updateTweetComment",
  async ({ commentId, content }) => {
    const response = await axiosInstance.patch(`/tweet-comments/${commentId}`, { content });
    return response.data.data;
  }
);

export const deleteTweetComment = createAsyncThunk(
  "tweetComment/deleteTweetComment",
  async ({ commentId }) => {
    const response = await axiosInstance.delete(`/tweet-comments/${commentId}`);
    return { commentId, ...response.data.data };
  }
);

const tweetCommentSlice = createSlice({
  name: "tweetComment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTweetComments.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(getTweetComments.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getTweetComments.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addTweetComment.fulfilled, (state, action) => {
      state.data = [action.payload, ...state.data];
    });

    builder.addCase(replyToTweetComment.fulfilled, (state, action) => {
      const parentId = action.payload.parentComment;
      state.data = state.data.map((c) =>
        c._id === parentId ? { ...c, replies: [...(c.replies || []), action.payload] } : c
      );
    });

    builder.addCase(deleteTweetComment.fulfilled, (state, action) => {
      const id = action.payload.commentId;
      state.data = state.data.filter((c) => c._id !== id).map((c) => ({
        ...c,
        replies: (c.replies || []).filter((r) => r._id !== id),
      }));
    });
  },
});

export default tweetCommentSlice.reducer;
