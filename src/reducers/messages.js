import createReducer from './createReducer';
import { ADD_MESSAGE } from '../actions/messageActions';

export const messages = createReducer([], {
  [ADD_MESSAGE]: (state, action) => {
    return [...state, action.payload];
  }
});