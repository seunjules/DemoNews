import {
  setSearchField,
  requestHeadlines,
  requestSearch,
  closeSearchView
} from "./actions";

export const mapStateToProps = state => {
  console.log(state);
  return {
    searchField: state.searchNews.searchField,
    searchNewsResponse: state.searchNews.searchNewsResponse,
    displayFrontPage: state.searchNews.displayFrontPage,
    displaySearchPage: state.searchNews.displaySearchPage,
    headlines: state.requestHeadlines.headlines,
    healthHeadlines: state.requestHeadlines.healthHeadlines,
    businessHeadlines: state.requestHeadlines.businessHeadlines,
    sportsHeadlines: state.requestHeadlines.sportsHeadlines,
    entertaimentHeadlines: state.requestHeadlines.entertaimentHeadlines,
    technologyHeadlines: state.requestHeadlines.technologyHeadlines,
    isPending: state.requestHeadlines.isPending,
    error: state.requestHeadlines.headlines
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestHeadlines: url => dispatch(requestHeadlines(url)),
    onRequestSearch: arg => dispatch(requestSearch(arg)),
    onCloseSearch: () => dispatch(closeSearchView())
  };
};
