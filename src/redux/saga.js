import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionType';
import { getYoutube, getFlickr, getUser } from './api';

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

function* returnUser() {
  try {
    const response = yield call(getUser);
    yield put({
      type: types.USER.success,
      payload: response
    });
  } catch (err) {
    yield put({
      type: types.USER.fail,
      payload: err
    });
  }
}

function* callYoutube() {
  yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

function* callFlickr() {
  yield takeLatest(types.FLICKR.start, returnFlickr);
}
function* callUser() {
  yield takeLatest(types.USER.start, returnUser);
}

export default function* rootSaga() {
  yield all([fork(callYoutube), fork(callFlickr), fork(callUser)]);
}
