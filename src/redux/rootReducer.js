import { combineReducers } from 'redux'
import {fetchDataReducer} from './fetchWeatherData/reducer'

export default combineReducers({
    fetchDataReducer,
})
