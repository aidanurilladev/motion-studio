import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<CURL.GetResponse, CURL.GetRequest>({
      query: () => ({
        url: "/studyabroad/",
        method: "GET",
      }),
      providesTags: ["curl"],
    }),
  }),
});
export const { useGetMeQuery } = api;
