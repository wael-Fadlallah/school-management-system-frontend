import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slices/studentSlice";

const store = configureStore({
  reducer: { studentSlice },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
