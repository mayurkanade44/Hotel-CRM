import { apiSlice } from "./apiSlice";

export const locationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addLocation: builder.mutation({
      query: (data) => ({
        url: "/api/location/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Location"],
    }),
    allLocations: builder.query({
      query: ({ id }) => ({
        url: `/api/location/${id}`,
      }),
      providesTags: ["Location"],
    }),
    updateLocation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/location/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Location"],
    }),
    deleteLocation: builder.mutation({
      query: (id) => ({
        url: `/api/location/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Location"],
    }),
    clientEmployeeSingleLocation: builder.query({
      query: (id) => ({
        url: `/api/location/clientEmployee/${id}`,
      }),
      providesTags: ["Location"],
    }),
  }),
});

export const {
  useAddLocationMutation,
  useAllLocationsQuery,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
  useClientEmployeeSingleLocationQuery,
} = locationSlice;
