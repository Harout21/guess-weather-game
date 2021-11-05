import * as actions from './actionTypes'
import axios from "axios";

const API_key = '9cff733aee57cb05b63dd4f731c46bc4';

export const getDataSuccess = (data) => {
    return {
        type: actions.GET_DATA_SUCCESS,
        payload: data
    }
};

export const getDataFail = (err) => {
    return {
        type: actions.GET_DATA_FAIL,
        payload: err
    }
};

export const getDataAction = (cityName) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`)
            dispatch(getDataSuccess(res.data));
        } catch (err) {
            dispatch(getDataFail(err.response.data));
        }
    }
};
