import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://simple-book-catalog-server-codecampwithsifat.vercel.app",
  }),
  tagTypes: ["datas"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
      providesTags: ["datas"],
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["datas"],
    }),

    editBook: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `book/${id}`,
          method: "PUT",
          body,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    deleteBook: builder.mutation({
      query(id) {
        return {
          url: `/book/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = api;
