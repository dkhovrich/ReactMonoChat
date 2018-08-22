import { delay, takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { ADD_MESSAGE_REQUEST, ADD_MESSAGE_SUCCESS } from '../actions/messageActions';

function* addMessage(action) {
  yield call(delay, 1000);
  yield put({ type: ADD_MESSAGE_SUCCESS, payload: action.payload });
}

export default function* () {
  yield takeEvery(ADD_MESSAGE_REQUEST, addMessage);
}