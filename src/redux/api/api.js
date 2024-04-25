import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "phones.json" }),

  // tag types for caching
  tagTypes: ["phone"],
  endpoints: (builder) => ({
    // Defines API endpoints
    getAllPhones: builder.query({
      query: () => "",
      providesTags: ["phone"],
    }),
  }),
});

export const { useGetAllPhonesQuery } = baseApi;
