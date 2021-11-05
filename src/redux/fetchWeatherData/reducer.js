import * as actions from './actionTypes';

const initialState = {
    data: {},
    error: '',
};

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_DATA:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case actions.GET_DATA_SUCCESS:
            return {
                data: action.payload,
                error: '',
                loading: false,
            };
        case actions.GET_DATA_FAIL:
            return {
                error: action.payload,
                loading: false,
            };
        default:
            return state
    }
};
