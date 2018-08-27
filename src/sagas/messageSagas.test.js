import { put, call } from 'redux-saga/effects'
import { addMessage } from './messageSagas';
import { ADD_MESSAGE_SUCCESS } from '../actions/messageActions';
import { delay } from 'redux-saga';

describe('message saga', () => {
  it('addMessage', () => {
    const payload = {};
    const iterator = addMessage({ payload });

    expect(iterator.next().value).toEqual(call(delay, 1000));
    expect(iterator.next().value).toEqual(put({ type: ADD_MESSAGE_SUCCESS, payload }));
    expect(iterator.next().done).toBeTruthy();
  });
});