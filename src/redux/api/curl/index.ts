import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCoutries: build.query<CURL.GetCountriesRes, CURL.GetCoutriesReg>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["curl"],
    }),
  }),
});
export const { useGetCoutriesQuery } = api;
