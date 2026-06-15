import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseErrorMessage } from "../../helpers/parseErrMsg.helper";
import { axiosInstance } from "../../helpers/axios.helper";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  status: false,
  data: [],
  currentTweet: null,
};

export const createTweet = createAsyncThunk("tweet/createTweet", async ({ data }) => {
  try {
    const response = await axiosInstance.post(`/tweets`, data);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

export const getTweet = createAsyncThunk("tweet/getTweet", async (userId) => {
  try {
    const response = await axiosInstance.get(`/tweets/users/${userId}`);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

export const getAllTweets = createAsyncThunk("tweet/getAllTweets", async () => {
  try {
    const response = await axiosInstance.get(`/tweets`);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

export const getRelevantTweets = createAsyncThunk("tweet/getRelevantTweets", async () => {
  try {
    const response = await axiosInstance.get(`/tweets/relevant`);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

export const getTweetById = createAsyncThunk("tweet/getTweetById", async (tweetId) => {
  try {
    const response = await axiosInstance.get(`/tweets/${tweetId}`);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

export const updateTweet = createAsyncThunk("tweet/updateTweet", async ({ tweetId, data }) => {
  try {
    const response = await axiosInstance.patch(`/tweets/${tweetId}`, data);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

export const deleteTweet = createAsyncThunk("tweet/deleteTweet", async ({ tweetId }) => {
  try {
    const response = await axiosInstance.delete(`/tweets/${tweetId}`);
    toast.success(response.data.message);
    return response.data.data;
  } catch (error) {
    toast.error(parseErrorMessage(error.response?.data));
    throw error;
  }
});

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    clearCurrentTweet(state) {
      state.currentTweet = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTweet.pending, (state) => { state.loading = true; });
    builder.addCase(createTweet.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [action.payload, ...(state.data || [])];
      state.status = true;
    });
    builder.addCase(createTweet.rejected, (state) => { state.loading = false; });

    builder.addCase(getTweet.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });

    builder.addCase(getAllTweets.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });

    builder.addCase(getRelevantTweets.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = true;
    });

    builder.addCase(getTweetById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentTweet = action.payload;
      state.status = true;
    });

    builder.addCase(updateTweet.fulfilled, (state, action) => {
      state.loading = false;
      state.data = (state.data || []).map((t) =>
        t._id === action.payload._id ? action.payload : t
      );
      if (state.currentTweet?._id === action.payload._id) {
        state.currentTweet = action.payload;
      }
    });

    builder.addCase(deleteTweet.fulfilled, (state, action) => {
      state.loading = false;
      state.data = (state.data || []).filter((t) => t._id !== action.payload._id);
    });
  },
});

export const { clearCurrentTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
