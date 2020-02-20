import {takeLatest, call, put, all} from "redux-saga/effects";

import userActionTypes from './user.types';
import {googleSignInSuccess, googleSignInFailure} from "./user.actions";


import {googleProvider, auth, createUserProfileDocument} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({id: userSnapshot.id}, ...userSnapshot.data()))
  } catch (e) {
    yield put(googleSignInFailure(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}

export default userSagas;
