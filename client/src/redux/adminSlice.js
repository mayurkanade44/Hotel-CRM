import { apiSlice } from "./apiSlice";

export const adminSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addService: builder.mutation({
      query: (data) => ({
        url: "/api/admin/service",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),
    allService: builder.query({
      query: () => ({
        url: "/api/admin/service",
      }),
      providesTags: ["Admin"],
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/admin/singleService/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Admin"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/api/admin/singleService/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useAllServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = adminSlice;
