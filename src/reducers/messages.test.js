import { messages as reducer, initialState } from './messages';
import { ADD_MESSAGE_REQUEST, ADD_MESSAGE_SUCCESS } from '../actions/messageActions';
import MessageModel from '../models/message';

describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toBe(initialState);
  });

  it('should handle ADD_MESSAGE_REQUEST', () => {
    const state = reducer(initialState, { type: ADD_MESSAGE_REQUEST });
    expect(state.isFetching).toBeTruthy();
  });

  it('should handle ADD_MESSAGE_SUCCESS', () => {
    const message = new MessageModel('test');
    const state = reducer(initialState, { type: ADD_MESSAGE_SUCCESS, payload: message });

    expect(state.isFetching).toBeFalsy();
    expect(state.data).toEqual([message]);
  });
})