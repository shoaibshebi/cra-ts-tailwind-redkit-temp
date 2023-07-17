import { takeLatest, call, put } from "redux-saga/effects";
import {
  getWalletProfile,
  getWalletProfileSuccess,
  getWalletProfileFailed,
} from "./reducers";

import request from "../../utils/apisauce";

function* getWalletProfileSaga({ payload }) {
  let action;
  let url = `api?module=account&action=tokenlist&address=${payload.addressHash}`;

  try {
    const response = yield call(request, "GET", url);
    action = getWalletProfileSuccess(response);
  } catch (e) {
    action = getWalletProfileFailed(e);
  }
  yield put(action);
}

export default function* saga() {
  yield takeLatest(getWalletProfile, getWalletProfileSaga);
}
