//순서1 - 리듀서에서 스토어 데이터를 변경할 때 사가 작업을 미들웨어로 중간에서 실행

// 미들웨어 모듈 import
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';

// saga 미들웨어 import
import createSagaMiddleware from '@redux-saga/core';
// 미들웨어로 적용할 saga 파일 import (비동기 데이터를 saga단에서 대신 호출해서 결과값을 action 객체로 반환)
import rootSaga from './saga';

// sagamiddleware 활성화
const sagaMiddleware = createSagaMiddleware();
// store공간을 생성한 다음 전달된 ruducer를 저장해서 내보냄, 이때 saga미들웨어 연결
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// 미들웨어로 연결된 saga에 rootSaga내용을 적용
sagaMiddleware.run(rootSaga);

// saga 미들웨어가 최종 적용된 store객체를 내보냄
export default store;
