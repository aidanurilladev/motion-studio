import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCoutries: build.query<CURL.GetCountriesRes, CURL.GetCoutriesReg>({
      query: () => ({
        url: "/studyabroad/",
        method: "GET",
      }),
      providesTags: ["curl"],
    }),

    getUniversities: build.query({
      query: () => ({
        url: "/university/",
        method: "GET",
      }),
      providesTags: ["curl"],
    }),
  }),
});
export const { useGetCoutriesQuery, useGetUniversitiesQuery } = api;
