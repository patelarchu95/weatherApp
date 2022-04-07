import React from "react";
import image from "../assets/img/maperror.png";
import { useHistory } from "react-router-dom";

function DisplayWeather(props) {

    const { data } = props;
    const iconurl = "https://openweathermap.org/img/wn/" +`${data.cod != 404 ? data.weather[0].icon : null}` +
        ".png";
    let history = useHistory();
    const home = () => {
        history.push("/");
        window.location.reload();
    }
    return (
        <div>
            {data.cod != 404 ? (
                <>
                    <div className="card shadow-0 border">
                        <div className="card-body p-4">
                            <div className="text-center mb-4">
                                <img className="weather-icon" src={iconurl} width='15%' height='15%' />
                                <h4 className="mb-1 sfw-normal">{data.wind.deg}
                                    <sup>o</sup></h4>
                                <span className="weather-main">{data.weather[0].main}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1">Humidity:{data.main.humidity} %</div>
                                <div>Wind Direction:{data.wind.speed}mph</div>
                            </div>

                        </div>
                    </div>
                    <div className="text-center mt-2 " style={{ color: 'lightgray' }}>Location | {data.name}</div>
                </>
            ) : (
                <div className="card shadow-0 border">
                    <div className="card-body p-4 text-center">
                        <img src={image} alt="mapimg" width='15%' height='15%' />
                        <div className="mb-1 sfw-normal">Whoa! Looks like there was an error with your zipcode Or city name.</div>
                        <div><button className="btn btn-danger" onClick={home}>
                            Try again
                        </button></div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default DisplayWeather;