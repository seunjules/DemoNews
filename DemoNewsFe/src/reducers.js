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
  CLOSE_SEARCH_VIEW
} from "./constants";

const initialStateSearch = {
  searchField: "",
  isPending: false,
  searchNewsResponse: [],
  displayFrontPage: true,
  displaySearchPage: false,
  error: ""
};

export const searchNews = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });

    case REQUEST_SEARCHNEWS_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_SEARCHNEWS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        searchNewsResponse: action.payload,
        displayFrontPage: false,
        displaySearchPage: true
      });

    case REQUEST_SEARCHNEWS_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload
      });

    case CLOSE_SEARCH_VIEW:
      return Object.assign({}, state, {
        displayFrontPage: true,
        displaySearchPage: false
      });
    default:
      return state;
  }
};

const initialStateHeadlines = {
  isPending: false,
  headlines: [],
  healthHeadlines: [],
  businessHeadlines: [],
  sportsHeadlines: [],
  entertaimentHeadlines: [],
  technologyHeadlines: [],
  error: ""
};

export const requestHeadlines = (
  state = initialStateHeadlines,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_HEADLINES_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_HEADLINES_SUCCESS:
      return Object.assign({}, state, {
        ispending: false,
        headlines: action.payload
      });

    case REQUEST_HEALTH_SUCCESS:
      return Object.assign({}, state, {
        ispending: false,
        healthHeadlines: action.payload
      });

    case REQUEST_BUSINESS_SUCCESS:
      return Object.assign({}, state, {
        ispending: false,
        businessHeadlines: action.payload
      });

    case REQUEST_SPORTS_SUCCESS:
      return Object.assign({}, state, {
        ispending: false,
        sportsHeadlines: action.payload
      });

    case REQUEST_ENTERTAINMENT_SUCCESS:
      return Object.assign({}, state, {
        ispending: false,
        entertaimentHeadlines: action.payload
      });

    case REQUEST_TECHNOLOGY_SUCCESS:
      return Object.assign({}, state, {
        ispending: false,
        technologyHeadlines: action.payload
      });

    case REQUEST_HEADLINES_FAILED:
      return Object.assign({}, state, {
        ispending: false,
        error: action.payload
      });

    default:
      return state;
  }
};
