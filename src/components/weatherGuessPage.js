import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getDataAction} from "../redux/fetchWeatherData/actions";

const WeatherGuessPage = () => {
    const dispatch = useDispatch()
    const fetchedData = useSelector(state => state.fetchDataReducer.data)
    const [cityName, setCityName] = useState('')
    const [guessNumber, setGuessNumber] = useState('')
    const [openPopUp, setOpenPopUp] = useState(false)
    const [historyBox, setHistoryBox] = useState([])
    const temp = parseInt(fetchedData?.main?.temp - 273.15).toFixed(0)
    const difference = Math.abs(temp - guessNumber)
    const filterIsRight = historyBox.filter((item) => item.isRight === true)

    const checkTemp = () => {
        if (!!cityName && !!guessNumber) {
            dispatch(getDataAction(cityName))
        } else {
            alert('fill two inputs')
        }
    }

    useEffect(() => {
        if (!!guessNumber) {
            setHistoryBox([...historyBox, {guessNumber, temp, isRight: difference > 5 ? false : true}]);
        }
        if (filterIsRight?.length >= 2) {
            setOpenPopUp(val => !val)
            setHistoryBox([])
            setCityName('')
            setGuessNumber('')
        }
    }, [temp])

    return (
        <div className="container">
            <div className="mainBox">
                {
                    openPopUp &&  <h1>
                        You Won
                    </h1>
                }
                <h2>Main area box</h2>
                <input
                    placeholder='city name'
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
                <input
                    placeholder='Your guess text box'
                    value={guessNumber}
                    onChange={(e) => setGuessNumber(e.target.value)}
                />
                <button onClick={checkTemp}>
                    check
                </button>
            </div>

            <div className="historyBox">
                {
                    historyBox?.map((el, i) =>
                        <div className={`${el.isRight ? 'green' : 'red'}`} key={i}>
                            <h2>{el.guessNumber}</h2>
                            <span>was {el.temp}</span>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default WeatherGuessPage;
