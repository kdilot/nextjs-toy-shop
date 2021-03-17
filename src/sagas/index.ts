import { all, fork } from 'redux-saga/effects'
import { watchTest } from './test'

export function* rootSaga() {
    yield all([fork(watchTest)])
}
