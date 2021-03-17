import { takeLatest, put, delay } from 'redux-saga/effects';
import { TEST, TEST_LOADING, TEST_SUCCESS } from '@reducers/test';

function* test(action: any) {
    yield put({ type: TEST_LOADING });
    yield delay(2000);
    yield put({
        type: TEST_SUCCESS,
        payload: { text: 3 },
    });
    yield delay(1000);
    yield put({
        type: TEST_SUCCESS,
        payload: { text: 2 },
    });
    yield delay(1000);
    yield put({
        type: TEST_SUCCESS,
        payload: { text: 1 },
    });
    yield delay(1000);
    yield put({
        type: TEST_SUCCESS,
        payload: { text: 'Vercel' },
    });
}

export function* watchTest() {
    yield takeLatest(TEST, test);
}
