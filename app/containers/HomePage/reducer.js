/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SELECT_ARTICLE } from './constants';

// The initial state of the App
export const initialState = {
  collapsibleMap: {}, 
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_ARTICLE:
        draft.selectedArticle = action.selectedArticle;
        break;
    }
  });

export default homeReducer;
