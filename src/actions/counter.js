import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = (num = 1) => {
  return {
    type: ADD,
    num,
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
