import * as actions from './actionTypes';

const initialState = {
    data: {},
};

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_DATA:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_DATA_SUCCESS:
            return {
                data: action.payload,
                error: '',
                loading: false,
            };
        case actions.GET_DATA_FAIL:
            return {
                data: {},
                error: action.payload,
                loading: false,
            };
        default:
            return state
    }
};
