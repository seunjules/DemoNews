import {
  setSearchField,
  requestHeadlines,
  requestSearch,
  closeSearchView,
  openArticle
} from "./actions";

export const mapStateToProps = state => {
  return {
    searchField: state.searchNews.searchField,
    searchNewsResponse: state.searchNews.searchNewsResponse,
    displayFrontPage: state.searchNews.displayFrontPage,
    displaySearchPage: state.searchNews.displaySearchPage,
    headlines: state.getHeadlines.headlines,
    healthHeadlines: state.getHeadlines.healthHeadlines,
    businessHeadlines: state.getHeadlines.businessHeadlines,
    sportsHeadlines: state.getHeadlines.sportsHeadlines,
    entertaimentHeadlines: state.getHeadlines.entertaimentHeadlines,
    technologyHeadlines: state.getHeadlines.technologyHeadlines,
    isPending: state.getHeadlines.isPending,
    error: state.getHeadlines.headlines,
    activeNewsArticle: state.openNewsPage.activeNewsArticle,


  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestHeadlines: url => dispatch(requestHeadlines(url)),
    onRequestSearch: arg => dispatch(requestSearch(arg)),
    onCloseSearch: () => dispatch(closeSearchView()),
    onOpenArticle: arg => dispatch(openArticle(arg))
  };
};
