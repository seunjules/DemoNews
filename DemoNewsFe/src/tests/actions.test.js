import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

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
    CLOSE_SEARCH_VIEW,
  } from "../constants";

  const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
  
  describe('actions', () => {

    it('should create an action to change the search field', () => {
      const text = 'arguement'
      const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
      }
      expect(setSearchField(text)).toEqual(expectedAction)
    })

    it('should create an action to close the search component', () => {
        const expectedAction = {
          type: CLOSE_SEARCH_VIEW,
        }
        expect(closeSearchView()).toEqual(expectedAction)
      })

  })  

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates API call for requesting headlines news data ', () => {
        fetchMock.getOnce('/todos', {
          body: { todos: ['some data'] },
          headers: { 'content-type': 'application/json' }
        })
  
      const expectedActions = [
        { type: REQUEST_HEADLINES_PENDING },
        { type: REQUEST_HEADLINES_SUCCESS, payload: { todos: ['some data'] } }
      ]
      const store = mockStore({ todos: [] })
  
      return store.dispatch(requestHeadlines('/todos')).then(() => { 
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('creates API call for requesting search news data ', () => {
        fetchMock.getOnce('/todos', {
          body: { todos: ['some data'] },
          headers: { 'content-type': 'application/json' }
        })
  
      const expectedActions = [
        { type: REQUEST_SEARCHNEWS_PENDING },
        { type: REQUEST_SEARCHNEWS_SUCCESS, payload: { todos: ['some data'] } }
      ]
      const store = mockStore({ todos: [] })
  
      return store.dispatch(requestSearch()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })