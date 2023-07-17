import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "home",
  initialState: {
    loading: false,
    walletProfile: {},
    error: "",
  },
  reducers: {
    getWalletProfile: (state) => {
      state.loading = true;
    },
    getWalletProfileSuccess: (state, { payload }) => {
      state.loading = false;
      if (payload?.result?.length) {
        state.walletAssets = payload.result;
      }
    },
    getWalletProfileFailed: (state) => {
      state.loading = false;
      state.walletAssets = {};
    },
  },
});

export const {
  getWalletProfile,
  getWalletProfileSuccess,
  getWalletProfileFailed,
} = slice.actions;

export default slice.reducer;
