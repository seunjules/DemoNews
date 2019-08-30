import fetchMock from "fetch-mock";

import {
  setSearchField,
  requestHeadlines,
  requestSearch,
  closeSearchView
} from "../actions";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HEADLINES_PENDING,
  REQUEST_HEADLINES_SUCCESS,
  REQUEST_SEARCHNEWS_PENDING,
  REQUEST_SEARCHNEWS_SUCCESS,
  REQUEST_HEADLINES_FAILED,
  CLOSE_SEARCH_VIEW
} from "../constants";

import { getHeadlines } from "../reducers";

describe("headlines reducer", () => {
  it("should handle the search arguement", () => {
    expect(getHeadlines(undefined, {})).toEqual({
      isPending: false,
      headlines: [],
      healthHeadlines: [],
      businessHeadlines: [],
      sportsHeadlines: [],
      entertaimentHeadlines: [],
      technologyHeadlines: [],
      error: ""
    });
  });

  it("should handle the headlines API call", () => {
    expect(
      getHeadlines(
        {
          isPending: false,
          headlines: [],
          healthHeadlines: [],
          businessHeadlines: [],
          sportsHeadlines: [],
          entertaimentHeadlines: [],
          technologyHeadlines: [],
          error: ""
        },
        {type: REQUEST_HEADLINES_PENDING }
      )
    ).toEqual({
      isPending: true,
      headlines: [],
      healthHeadlines: [],
      businessHeadlines: [],
      sportsHeadlines: [],
      entertaimentHeadlines: [],
      technologyHeadlines: [],
      error: ""
    });
      expect(
        getHeadlines(
          {
            isPending: true,
            headlines: [],
            healthHeadlines: [],
            businessHeadlines: [],
            sportsHeadlines: [],
            entertaimentHeadlines: [],
            technologyHeadlines: [],
            error: ""
          },
          {type: REQUEST_HEADLINES_SUCCESS, payload: { data: "data" } }
        )
      ).toEqual({
        isPending: false,
        headlines: { data: "data" },
        healthHeadlines: [],
        businessHeadlines: [],
        sportsHeadlines: [],
        entertaimentHeadlines: [],
        technologyHeadlines: [],
        error: ""
      });
      expect(
        getHeadlines(
          {
            isPending: true,
            headlines: [],
            healthHeadlines: [],
            businessHeadlines: [],
            sportsHeadlines: [],
            entertaimentHeadlines: [],
            technologyHeadlines: [],
            error: ""
          },
          { type: REQUEST_HEADLINES_FAILED, payload: "error" }
        )
      ).toEqual({
        isPending: false,
        headlines: [],
        healthHeadlines: [],
        businessHeadlines: [],
        sportsHeadlines: [],
        entertaimentHeadlines: [],
        technologyHeadlines: [],
        error: "error"
      });
     
  });
});
