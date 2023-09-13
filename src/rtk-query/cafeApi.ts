import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cafe } from "../ts/interfaces/appInterface";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getCafeByLocation: builder.query<Cafe[], { location?: string }>({
      query: ({ location }) => `cafes/location?location=${location}`,
    }),
  }),
});

export const { useGetCafeByLocationQuery } = api;
