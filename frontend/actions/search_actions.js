import { searchUsers } from '../util/user_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const getSearchResults = (query) => dispatch => (
  searchUsers(query).then(results => dispatch(receiveSearchResults(results)))
);

