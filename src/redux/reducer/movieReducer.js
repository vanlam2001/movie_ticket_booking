import { SET_DETAIL_SCHELUDE, SET_LOADING_OFF, SET_LOADING_ON } from "../constant/movieConstant"

const initialState = {
  movieDetailSchedule: [],
  spinnerSlice: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DETAIL_SCHELUDE: {
      return {...state, movieDetailSchedule: payload}
    }
    case SET_LOADING_ON: {
      return {...state, spinnerSlice: payload}
    }
    case SET_LOADING_OFF: {
      return {...state, spinnerSlice: payload}
    }
  
  default:
    return state
  }
}
