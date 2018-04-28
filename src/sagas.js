import { delay } from "redux-saga";
import { take, takeEvery, put, call, fork } from "redux-saga/effects";

function* authorize(payload) {
  console.log("authorize in");
  yield delay(3000);
  console.log("authorize ok");
  return payload;
}

// function* authorize2(payload) {
//   console.log(",,,,,");
//   yield delay(5000);
//   console.log("pppppp");
//   return payload;
// }

function* getImg() {
  const data = yield call(getImgReq);
  yield put({
    type: "gotData",
    payload: data
  });
}

function getImgReq() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => data);
}

export function* watchClick() {
  while (true) {
    yield take("h1click");
    yield fork(authorize);
    yield take("getImgAct");
    yield fork(getImg);
    //   // const token2 = yield call(authorize2, payload);
    //   // const token3 = yield all([call(authorize), call(authorize2)]);
    //   // const token = yield fork(authorize, payload);
    //   // console.log(token, 5);
    //   // if (token3) {
    //   //   console.log(8828);
    //   //   yield take("h2click");
    //   // }
  }
}
