import {createActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const {
  employeeGet,
  employeesGet,
  employeesGetSuccess,
  employeesPost,
  employeesPostSuccess,
  employeesPut,
  employeesPutSuccess,
  employeesDelete,
  employeesDeleteSuccess
} = createActions({
  [ActionTypes.EMPLOYEE_GET]: (payload) => payload,
  [ActionTypes.EMPLOYEES_GET]: (payload) => payload,
  [ActionTypes.EMPLOYEES_GET_SUCCESS]: (payload) => payload,
  [ActionTypes.EMPLOYEES_POST]: (payload) => payload,
  [ActionTypes.EMPLOYEES_POST_SUCCESS]: (payload) => payload,
  [ActionTypes.EMPLOYEES_PUT]: (payload) => payload,
  [ActionTypes.EMPLOYEES_PUT_SUCCESS]: (payload) => payload,
  [ActionTypes.EMPLOYEES_DELETE]: ({id}) => id,
  [ActionTypes.EMPLOYEES_DELETE_SUCCESS]: (payload) => payload,
});