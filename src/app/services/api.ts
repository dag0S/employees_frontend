import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const BaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
});

const baseQueryWithRetry = retry(BaseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
