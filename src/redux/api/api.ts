import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: (filter) => ({
        url: `/tasks?priority=${filter}`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addToDo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetToDosQuery, useAddToDoMutation } = baseApi;
