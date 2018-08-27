import createReducer from './createReducer';
import { ADD_MESSAGE_REQUEST, ADD_MESSAGE_SUCCESS } from '../actions/messageActions';

export const initialState = {
  isFetching: false,
  data: []
};

export const messages = createReducer(initialState, {
  [ADD_MESSAGE_REQUEST]: state => {
    return { ...state, isFetching: true };
  },
  [ADD_MESSAGE_SUCCESS]: (state, action) => {
    const data = [...state.data, action.payload];
    return { isFetching: false, data };
  }
});