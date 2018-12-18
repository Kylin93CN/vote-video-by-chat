import { put, takeEvery } from 'redux-saga/effects';

export function* fetchProject() {
  yield put({ type: 'BBBB', payload: 'XXXXX' });
}

export default function* rootSaga() {
  yield takeEvery('AAAA', fetchProject);
}
