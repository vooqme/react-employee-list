import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {ActionTypes} from '../constants/index';
import {
  employeesDeleteSuccess,
  employeesGetSuccess,
  employeesPostSuccess,
  employeesPutSuccess,
} from "../actions/employees";
import api from '../helpers/api';

export function* getEmployeesSaga() {
  try {
    const res = yield   api.get(`employees`);
    const data = yield res.json();
    yield put(employeesGetSuccess(data))
  } catch (err) {
    console.error('saga error', err);
  }
}

export function* getEmployeeSaga({payload}) {
  try {
    const res = yield api.get(`employees/${payload}`);
    const data = yield res.json();
    yield put(employeesGetSuccess([data]))
  } catch (err) {
    console.error('saga error', err);
  }
}

export function* postEmployeesSaga({payload}) {
  try {
    const res = yield api.post('employees', payload);
    const data = yield res.json();
    yield put(employeesPostSuccess(data))
  } catch (err) {
    console.error('saga error', err);
  }
};

export function* putEmployeesSaga({payload}) {
  try {
    const res = yield api.put(`employees/${payload.id}`, payload);
    const data = yield res.json();
    yield put(employeesPutSuccess(data))
  } catch (err) {
    console.error('saga error', err);
  }
};

export function* deleteEmployeesSaga({payload}) {
  try {
    const res = yield api.del(`employees/${payload}`);
    const data = yield res.json();
    yield put(employeesDeleteSuccess(data))
  } catch (err) {
    console.error('saga error', err);
  }
}

export default function* root() {
  yield all(
    [
      takeEvery(ActionTypes.EMPLOYEE_GET, getEmployeeSaga),
      takeEvery(ActionTypes.EMPLOYEES_GET, getEmployeesSaga),
      takeEvery(ActionTypes.EMPLOYEES_POST, postEmployeesSaga),
      takeEvery(ActionTypes.EMPLOYEES_PUT, putEmployeesSaga),
      takeEvery(ActionTypes.EMPLOYEES_DELETE, deleteEmployeesSaga),
    ]
  );
}