import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
