import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contentfulClient } from "lib/api/contentful";

import { status } from "constants/index";
import { GlobalType } from "types/index";

import { GET_HOME } from "graphql/queries/getHome";
import client from "lib/apolloClient";

export const fetchGlobal = createAsyncThunk<
  GlobalType,
  void,
  { rejectValue: string }
>("fetchGlobal", async (_, { rejectWithValue }) => {
  try {
    const response = await contentfulClient.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_GLOBAL_ENTRY_ID || ""
    );
    return response.fields.json as GlobalType;
  } catch (error) {
    return rejectWithValue((error as any)?.response?.status || "Unknown error");
  }
});

export const fetchHome = createAsyncThunk<any, void, { rejectValue: string }>(
  "fetchHome",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await client.query({ query: GET_HOME });
      return data as any;
    } catch (error) {
      return rejectWithValue(
        (error as any)?.networkError?.statusCode || "Unknown error"
      );
    }
  }
);

type ContentfulState = {
  error: string | null;
  data: GlobalType | any | null;
  loadingStatus: string;
};

const initialState: ContentfulState = {
  error: null,
  data: null,
  loadingStatus: status.IDLE,
};

const contentfulSlice = createSlice({
  name: "contentful",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGlobal.fulfilled,
      (state, action: PayloadAction<GlobalType>) => {
        state.data = action.payload;
        state.loadingStatus = status.SUCCESS;
      }
    );
    builder.addCase(fetchGlobal.pending, (state) => {
      state.loadingStatus = status.PENDING;
    });
    builder.addCase(
      fetchGlobal.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loadingStatus = status.ERROR;
      }
    );
    builder.addCase(
      fetchHome.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.loadingStatus = status.SUCCESS;
      }
    );
    builder.addCase(fetchHome.pending, (state) => {
      state.loadingStatus = status.PENDING;
    });
    builder.addCase(fetchHome.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loadingStatus = status.ERROR;
    });
  },
});

const contentfulReducer = contentfulSlice.reducer;
export default contentfulReducer;
