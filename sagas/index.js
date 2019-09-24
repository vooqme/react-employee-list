import {all, fork} from 'redux-saga/effects';

import employees from './employees';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(employees)
  ]);
}
