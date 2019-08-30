import fetchMock from "fetch-mock";

import {
  setSearchField,
  requestSearch,
  closeSearchView
} from "../actions";

import {
  REQUEST_SEARCHNEWS_SUCCESS,
  REQUEST_SEARCHNEWS_FAILED,
  REQUEST_SEARCHNEWS_PENDING,
} from "../constants";

import { searchNews } from "../reducers";



describe("search reducer", () => {
  it("should handle the search arguement", () => {
    expect(searchNews(undefined, {})).toEqual({
      searchField: "",
      isPending: false,
      searchNewsResponse: [],
      displayFrontPage: true,
      displaySearchPage: false,
      error: ""
    });
  });

  it("should handle the search", () => {
  
    expect(
      searchNews(
        {
          searchField: "",
          isPending: false,
          searchNewsResponse: [],
          displayFrontPage: true,
          displaySearchPage: false,
          error: ""
        },
        setSearchField("arg")
      )
    ).toEqual({
      searchField: "arg",
      isPending: false,
      searchNewsResponse: [],
      displayFrontPage: true,
      displaySearchPage: false,
      error: ""
    });
    expect(
      searchNews(
        {
          searchField: "arg",
          isPending: false,
          searchNewsResponse: [],
          displayFrontPage: true,
          displaySearchPage: false,
          error: ""
        },
        { type: REQUEST_SEARCHNEWS_PENDING }
      )
    ).toEqual({
      searchField: "arg",
      isPending: true,
      searchNewsResponse: [],
      displayFrontPage: true,
      displaySearchPage: false,
      error: ""
    });
    expect(
      searchNews(
        {
          searchField: "arg",
          isPending: true,
          searchNewsResponse: [],
          displayFrontPage: true,
          displaySearchPage: false,
          error: ""
        },
        { type: REQUEST_SEARCHNEWS_SUCCESS, payload: { data: "data" } }
      )
    ).toEqual({
      searchField: "arg",
      isPending: false,
      searchNewsResponse: { data: "data" },
      displayFrontPage: false,
      displaySearchPage: true,
      error: ""
    });
    expect(
      searchNews(
        {
          searchField: "arg",
          isPending: true,
          searchNewsResponse: [],
          displayFrontPage: true,
          displaySearchPage: false,
          error: ""
        },
        { type: REQUEST_SEARCHNEWS_FAILED, payload: "error" }
      )
    ).toEqual({
      searchField: "arg",
      isPending: false,
      searchNewsResponse: [],
      displayFrontPage: true,
      displaySearchPage: false,
      error: "error"
    });
    expect(
      searchNews(
        {
          searchField: "arg",
          isPending: false,
          searchNewsResponse: [],
          displayFrontPage: false,
          displaySearchPage: true,
          error: ""
        },
        closeSearchView()
      )
    ).toEqual({
      searchField: "arg",
      isPending: false,
      searchNewsResponse: [],
      displayFrontPage: true,
      displaySearchPage: false,
      error: ""
    });
  });
});
