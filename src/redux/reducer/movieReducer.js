import { SET_DETAIL_SCHELUDE } from "../constant/movieConstant"

const initialState = {
  movieDetailSchedule: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DETAIL_SCHELUDE: {
      return {...state, movieDetailSchedule: payload}
    }
  
  default:
    return state
  }
}
