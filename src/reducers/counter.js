import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      const {num} = action;
      return {
        ...state,
        num: state.num + num
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
