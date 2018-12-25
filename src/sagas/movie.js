import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
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
    console.log('sagas', result);
    yield put({ type: 'UPDATE_PING', payload: result });
  } catch (err) {
    console.log(err);
  }
}
