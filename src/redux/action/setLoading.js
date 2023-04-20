import { SET_LOADING_OFF, SET_LOADING_ON } from "../constant/movieConstant";


export const setLoadingOff = {
    type: SET_LOADING_OFF,
    payload: false,
}
export const setLoadingOn = {
    type: SET_LOADING_ON,
    payload: true,
}