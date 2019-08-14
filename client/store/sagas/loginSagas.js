import { takeEvery, put, all } from 'redux-saga/effects';
import {
  REGISTER_ASYNC,
  LOGIN_ASYNC,
  LOGIN_ASYNC_GOOGLE,
  LOGIN_ASYNC_FACEBOOK,
  PASSWORD_RECOVERY_ASYNC,
  PASSWORD_RECOVERY_TOKEN_ASYNC,
  register,
  login,
  setLoginError,
  passwordRecovery,
  passwordRecoveryToken
} from '../actions';
import { BASE_URL } from "../server";

export function* registerUser({ data }) {
  try {
    const registerData = yield fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });
    const dataJson = yield registerData.json();
    if(dataJson.success) {
      yield put(register(dataJson));
      yield window.localStorage.setItem('token', dataJson.token);
      yield window.localStorage.setItem('email', dataJson.email);
    } else {
      yield put(setLoginError(dataJson));
    }
  } catch(err) {console.log(err)}
}

export function* loginUser({ data }) {
  try {
    const loginData = yield fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });
    const dataJson = yield loginData.json();
    if(dataJson.success) {
      yield put(login(dataJson));
      yield window.localStorage.setItem('token', dataJson.token);
      yield window.localStorage.setItem('email', dataJson.user);
    } else {
      yield put(setLoginError({ error: dataJson.err}));
    }
  } catch(err) {console.log(err)}
}

export function* loginUserGoogle({ data }) {
  try {
    const loginData = yield fetch(`${BASE_URL}/auth-google`, {
      method: 'POST',
      body: JSON.stringify({
        ...data
      })
    });
    const dataJson = yield loginData.json();
    if(dataJson.success) {
      yield put(login(dataJson));
      yield window.localStorage.setItem('token', dataJson.token);
      yield window.localStorage.setItem('email', dataJson.user);
    } else {
      yield put(setLoginError({ error: dataJson.err}));
    }
  } catch(err) {console.log(err)}
}
export function* loginUserFacebook({ data }) {
  try {
    const loginData = yield fetch(`${BASE_URL}/auth-facebook`, {
      method: 'POST',
      body: JSON.stringify({
        ...data
      })
    });
    const dataJson = yield loginData.json();
    if(dataJson.success) {
      yield put(login(dataJson));
      yield window.localStorage.setItem('token', dataJson.token);
      yield window.localStorage.setItem('email', dataJson.user);
    } else {
      yield put(setLoginError({ error: dataJson.err}));
    }
  } catch(err) {console.log(err)}
}

export function* userPasswordRecovery({ data }) {
  try {
    const recoveryData = yield fetch(`${BASE_URL}/password-recovery`, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email
      })
    });
    const dataJson = yield recoveryData.json();
    if(dataJson.success) {
      yield put(passwordRecovery(dataJson.message));
    } else {
      yield put(setLoginError(dataJson));
    }
  } catch(err) {console.log(err)}
}

export function* userConfirmPassword({ data }) {
  try {
    const tokenData = yield fetch(`${BASE_URL}/password-recovery-token`, {
      method: 'POST',
      body: JSON.stringify({
        new_password: data.password,
        token: data.token
      })
    });
    const dataJson = yield tokenData.json();
    if(dataJson.success) {
      yield put(passwordRecoveryToken(dataJson));
      yield window.localStorage.setItem('token', dataJson.token);
    } else {
      yield put(setLoginError(dataJson));
    }
  } catch(err) {console.log(err)}
}

export function* watchAll() {
  yield all([
    takeEvery(REGISTER_ASYNC, registerUser),
    takeEvery(LOGIN_ASYNC, loginUser),
    takeEvery(LOGIN_ASYNC_GOOGLE, loginUserGoogle),
    takeEvery(LOGIN_ASYNC_FACEBOOK, loginUserFacebook),
    takeEvery(PASSWORD_RECOVERY_ASYNC, userPasswordRecovery),
    takeEvery(PASSWORD_RECOVERY_TOKEN_ASYNC, userConfirmPassword),
  ]);
}