import strContains from "../utils/strContains";
import { createSelector } from "reselect";

const getCards = state => state.cards;
const getSearchString = state => state.searchString;
const getColumnId = (_, columnId) => columnId;

// memoized selector
export const getFilteredCards = createSelector(
  [getCards, getSearchString, getColumnId],
  (cards, searchString, columnId) => 
    cards.filter(card => 
      card.columnId === columnId && strContains(card.title, searchString)
    )
);

// action
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload.title
    default:
      return statePart;
  };
};

export default searchStringReducer;