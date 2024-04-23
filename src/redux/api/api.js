import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "phones.json" }),
  tagTypes: ["phone"],
  endpoints: (builder) => ({
    getAllPhones: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),

    // getTodos: builder.query({
    //   query: (priority) => {
    //     const params = new URLSearchParams();

    //     if (priority) {
    //       params.append("priority", priority);
    //     }

    //     return {
    //       url: `/tasks`,
    //       method: "GET",
    //       params: { priority },
    //     };
    //   },
    //   providesTags: ["todo"],
    // }),

    // addTodo: builder.mutation({
    //   query: (data) => ({
    //     url: "/task",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["todo"],
    // }),
    // updateTodo: builder.mutation({
    //   query: (data) => {
    //     console.log("inside base api =>", data);
    //     return {
    //       url: `/task/${data.id}`,
    //       method: "PUT",
    //       body: data.data,
    //     };
    //   },
    //   invalidatesTags: ["todo"],
    // }),
  }),
});

export const { useGetAllPhonesQuery } = baseApi;
