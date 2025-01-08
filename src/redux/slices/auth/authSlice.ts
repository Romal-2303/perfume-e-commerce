import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  token: string | null;
  user: any;
}

const initialState: AuthState = {
  token: localStorage.getItem("authToken") || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;

      localStorage.setItem("authToken", token);

      try {
        const decodedUser = jwtDecode(token);

        const expTime = decodedUser.exp ? decodedUser.exp * 1000 : 0;

        if (expTime && Date.now() < expTime) {
          state.user = decodedUser;
        } else {
          state.token = null;
          state.user = null;
          localStorage.removeItem("authToken");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        state.token = null;
        state.user = null;
        localStorage.removeItem("authToken");
      }
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("authToken");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
