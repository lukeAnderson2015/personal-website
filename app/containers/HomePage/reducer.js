/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, CLICK_COLLAPSIBLE } from './constants';

// The initial state of the App
export const initialState = {
  collapsibleMap: {}, 
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLICK_COLLAPSIBLE:
        // reverse state of selected collapsible by id
        const newMap = {...state.collapsibleMap};
        if (newMap[action.id]) {
          delete newMap[action.id];
        } else {
          newMap[action.id] = true;
        }
        draft.collapsibleMap = newMap;
        break;
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
    }
  });

export default homeReducer;
