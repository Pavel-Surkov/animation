import axios from 'axios';
import { call, put, takeEvery, takeLeading } from 'redux-saga/effects';
import { POST_USER_LOGIN } from '../constant/user.constant';
import { userDataStatus } from '../../redux/actions/user.action';

function postApi(action) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
      email: action.user.email,
      password: action.user.password,
    })
    .then((res) => res)
    .catch((err) => console.log(err));
}

function* fetchUsers(action) {
  try {
    const users = yield call(postApi(action));
    yield put(userDataStatus(users));
  } catch (e) {
    //     yield put({ type: 'GET_USERS_FAILED', message: e.message })
    console.log(e);
  }
}

export default function* userSaga() {
  //   yield takeEvery('POST_USER_LOGIN', fetchUsers)
  yield takeLeading(POST_USER_LOGIN, fetchUsers);
}

// export default userSaga
