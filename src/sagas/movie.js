import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
import { message } from 'antd';
import movie from '../services/movie';

export default function* () {
  yield fork(watchGetPing);
  yield fork(watchAddScore);
}

function* watchGetPing() {
  yield takeLatest('GET_PING', fetchGetPing);
}

function* watchAddScore() {
  yield takeLatest('ADD_SCORE', fetchAddScore);
}

function* fetchGetPing() {
  try {
    const result = yield call(movie.ping);
    yield put({ type: 'UPDATE_PING', payload: result });
  } catch (err) {
    message.error(err);
  }
}

function* fetchAddScore(param) {
  try {
    const result = yield call(movie.addScore, param.payload);
    if (result) {
      message.success('加分成功！');
    }
  } catch (err) {
    message.error(err);
  }
}
