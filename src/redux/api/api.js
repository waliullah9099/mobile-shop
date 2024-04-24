import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "phones.json" }),
  tagTypes: ["phone"],
  endpoints: (builder) => ({
    getAllPhones: builder.query({
      query: () => "",
      providesTags: ["phone"],
    }),
  }),

  // extraReducers: (builder) => {
  //   builder.addMatcher(updateQuantity.match, async (state, action) => {
  //     console.log(state, action);
  //     try {
  //       const productId = action.payload.id;
  //       const updatedQuantity = action.payload.quantity;

  //       // Ensure data is loaded before accessing
  //       await baseApi.endpoints.getAllPhones.query();

  //       const productToUpdate = state.queries.getAllPhones.data.find(
  //         (product) => product.id === productId
  //       );

  //       if (productToUpdate) {
  //         productToUpdate.quantity = updatedQuantity;
  //       }
  //     } catch (error) {
  //       console.error("Error updating quantity:", error);
  //     }
  //   });
  // },
});

export const { useGetAllPhonesQuery } = baseApi;
