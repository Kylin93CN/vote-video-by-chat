import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
import { message } from 'antd';
import movie from '../services/movie';

export default function* () {
  yield fork(watchGetPing);
}

function* watchGetPing() {
  yield takeLatest('GET_PING', fetchProject);
}

function* fetchProject() {
  try {
    const result = yield call(movie.ping);
    yield put({ type: 'UPDATE_PING', payload: result });
  } catch (err) {
    message.error(err);
  }
}
