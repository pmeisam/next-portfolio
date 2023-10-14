import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contentfulClient } from "lib/api/contentful";

import { status } from "constants/index";

const initialState = {
  global: {
    error: null,
    data: null,
    loadingStatus: status.IDLE,
  },
};

export const fetchGlobal = createAsyncThunk(
  "fetchGlobal",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await contentfulClient.getEntry(
        process.env.NEXT_PUBLIC_CONTENTFUL_GLOBAL_ENTRY_ID
      );
      return response.fields.json;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const contentfulSlice = createSlice({
  name: "contentful",
  initialState,
  extraReducers: {
    [fetchGlobal.fulfilled]: (state, action) => {
      state.global.data = action.payload;
      state.global.loadingStatus = status.SUCCESS;
    },
    [fetchGlobal.pending]: (state, action) => {
      state.global.loadingStatus = status.PENDING;
    },
    [fetchGlobal.rejected]: (state, action) => {
      state.global.error = action.payload.error;
      state.global.loadingStatus = status.ERROR;
    },
  },
});

const contentfulReducer = contentfulSlice.reducer;
export default contentfulReducer;
