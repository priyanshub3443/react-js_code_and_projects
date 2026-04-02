import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const predictTumor = createAsyncThunk(
  "tumor/predict",
  async (image, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", image);

      const res = await axios.post(
        "http://localhost:5000/predict",
        formData
      );

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Prediction failed");
    }
  }
);

const tumorSlice = createSlice({
  name: "tumor",
  initialState: {
    result: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(predictTumor.pending, (state) => {
        state.loading = true;
      })
      .addCase(predictTumor.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload;
      })
      .addCase(predictTumor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tumorSlice.reducer;