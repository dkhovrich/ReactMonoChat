import { all } from 'redux-saga/effects'
import watchMessages from './messageSagas'

export default function* watch() {
  yield all([
    watchMessages()
  ]);
}