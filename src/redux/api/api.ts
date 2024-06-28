import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
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
    updateToDo: builder.mutation({
      query: (options) => ({
        url: `/task/${options.id}`,
        method: "PUT",
        body: options.taskData,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetToDosQuery, useAddToDoMutation, useUpdateToDoMutation } =
  baseApi;
