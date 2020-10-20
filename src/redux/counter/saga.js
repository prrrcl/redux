import {
  takeLatest,
  put,
  all,
  fork,
} from 'redux-saga/effects';
import * as TYPES from '../types'

export function* addCounterToState({payload}) {
  yield put({
    type: TYPES.ADD_COUNTER_SUCCESS,
    payload
  })
}

export function* subtractCounterToState({payload}) {
  yield put({
    type: TYPES.SUB_COUNTER_SUCCESS,
    payload
  })
}

export function* watcherAddCounter() {
  yield takeLatest('ADD_COUNTER_REQUEST', addCounterToState);
}

export function* watcherSubCounter() {
  yield takeLatest('SUB_COUNTER_REQUEST', subtractCounterToState);
}

export default function* rootSaga() {
  yield all([
    fork(watcherAddCounter),
    fork(watcherSubCounter),
  ]);
}
