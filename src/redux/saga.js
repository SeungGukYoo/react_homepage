import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionType';
import { getYoutube, getFlickr } from './api';

function* returnYoutube(action) {
  try {
    const response = yield call(getYoutube, action.Info);
    yield put({
      type: types.YOUTUBE.success,
      payload: response.data.items
    });
  } catch (error) {
    yield put({
      type: types.YOUTUBE.fail,
      payload: error
    });
  }
}

function* returnFlickr() {
  try {
    const response = yield call(getFlickr);
    yield put({
      type: types.FLICKR.success,
      payload: response.data.photos.photo
    });
  } catch (error) {
    yield put({
      type: types.FLICKR.fail,
      payload: error
    });
  }
}

function* callYoutube() {
  yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

function* callFlickr() {
  yield takeLatest(types.FLICKR.start, returnFlickr);
}

export default function* rootSaga() {
  yield all([fork(callYoutube), fork(callFlickr)]);
}
