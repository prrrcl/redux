import * as TYPES from '../types'

const initialState = {
  count: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_COUNTER_REQUEST:
    case TYPES.SUB_COUNTER_REQUEST:
      return state;
    case TYPES.ADD_COUNTER_SUCCESS:
      return { ...state, count: state.count + payload }
    case TYPES.SUB_COUNTER_SUCCESS:
      return { ...state, count: state.count - payload }
    default: 
      return state
  }
}