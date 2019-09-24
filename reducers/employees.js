import {handleActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const employeesState = {
  payload: [],
  loading: true,
};

export default {
  employees: handleActions(
    {
      [ActionTypes.EMPLOYEES_GET]: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      [ActionTypes.EMPLOYEES_GET_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          payload: payload
        }
      },
      [ActionTypes.EMPLOYEES_POST]: (state) => {
        return {
          ...state
        }
      },
      [ActionTypes.EMPLOYEES_POST_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          payload: [...state.payload, payload]
        }
      },
      [ActionTypes.EMPLOYEES_PUT_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          payload: state.payload.map((item) => {
            return item.id === payload.id ? payload : item;
          })
        }
      },
      [ActionTypes.EMPLOYEES_DELETE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          payload: state.payload.filter((item) => item.id !== payload.id)
        }
      }
    },
    employeesState,
  ),
};