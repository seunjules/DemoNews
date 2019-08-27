

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HEADLINES_PENDING,
  REQUEST_HEADLINES_SUCCESS,
  REQUEST_HEADLINES_FAILED,
  REQUEST_HEALTH_SUCCESS,
  REQUEST_BUSINESS_SUCCESS,
  REQUEST_SPORTS_SUCCESS,
  REQUEST_ENTERTAINMENT_SUCCESS,
  REQUEST_TECHNOLOGY_SUCCESS,
  REQUEST_SEARCHNEWS_PENDING,
  REQUEST_SEARCHNEWS_SUCCESS,
  REQUEST_SEARCHNEWS_FAILED,
  CLOSE_SEARCH_VIEW,
  TOP_NEWS,
  TECHNOLOGY,
  HEALTH,
  SPORTS,
  ENTERTAINMENT,
  BUSINESS
} from "./constants";


export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const closeSearchView = () => ({
    type: CLOSE_SEARCH_VIEW,
  });

export const requestSearch = arg => dispatch => {
 dispatch({ type: REQUEST_SEARCHNEWS_PENDING });
  return fetch("http://localhost:4000/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      arg: arg
    })
  })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: REQUEST_SEARCHNEWS_SUCCESS, payload: data.data });
    })
    .catch(error =>
      dispatch({ type: REQUEST_SEARCHNEWS_FAILED, payload: error })
    );
};

export const requestHeadlines = url => dispatch => {
  dispatch({ type: REQUEST_HEADLINES_PENDING });
  return fetch("http://localhost:4000/newsCategory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: url
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response, url)
      switch (url) {
        case HEALTH:
          dispatch({ type: REQUEST_HEALTH_SUCCESS, payload: response.data });
          break;
        case BUSINESS:
          dispatch({ type: REQUEST_BUSINESS_SUCCESS, payload: response.data });
          break;
        case SPORTS:
          dispatch({ type: REQUEST_SPORTS_SUCCESS, payload: response.data });
          break;

        case ENTERTAINMENT:
          dispatch({ type: REQUEST_ENTERTAINMENT_SUCCESS, payload: response.data });
          break;
        case TOP_NEWS:
          console.log("I shall dispatch")
         dispatch({ type: REQUEST_HEADLINES_SUCCESS, payload: response.data });
          break;

        case TECHNOLOGY:
          dispatch({ type: REQUEST_TECHNOLOGY_SUCCESS, payload: response.data });
          break;
        default:
          return;
      }
    })
    .catch(error =>
      dispatch({ type: REQUEST_HEADLINES_FAILED, payload: error })
    );
};
