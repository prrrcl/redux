import * as TYPES from '../types'
import { store } from '../store'

export const addCounter = (payload) => store.dispatch({
  type: TYPES.ADD_COUNTER_REQUEST,
  payload
})

export const subtractCounter = (payload) => store.dispatch({
  type: TYPES.SUB_COUNTER_REQUEST,
  payload
})