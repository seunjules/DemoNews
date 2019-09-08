import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HEADLINES_PENDING,
  REQUEST_HEADLINES_SUCCESS,
  REQUEST_HEADLINES_FAILED,
  REQUEST_SEARCHNEWS_PENDING,
  REQUEST_SEARCHNEWS_SUCCESS,
  REQUEST_SEARCHNEWS_FAILED,
  CLOSE_SEARCH_VIEW,
  OPEN_NEWS_ARTICLE,

} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const openArticle = (obj) => ({
  type: OPEN_NEWS_ARTICLE,
  payload: obj,
});

export const closeSearchView = () => ({
  type: CLOSE_SEARCH_VIEW
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
      dispatch({ type: REQUEST_HEADLINES_SUCCESS, payload: response });
    })
    .catch(error =>
      dispatch({ type: REQUEST_HEADLINES_FAILED, payload: error })
    );
};
