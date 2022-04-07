import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Weather() {

  const [form, setForm] = useState({
    city: ""
  });
  const [errorMessage,setErrorMessgae] = useState('');
  let history = useHistory();
  const APIKEY = "5fc6e5fe7be59b0b3981df2bb0ae3d57";
  
  const weatherData = async (e) => {
    e.preventDefault();
    if (form.city == "") {
      setErrorMessgae('zipcode or city name is required.');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      localStorage.setItem("weather", JSON.stringify(data));
      history.push("/home");
      window.location.reload();
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };

  return (
    <section className="cover min-vh-100">
      <div className="cover-caption">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 text-center">
              <h3 className="mb-4 pb-2 fw-normal text-white" >Weather Forcast</h3>
              <span className="description text-white">Enter a Surat zipcode below to get the current weather conditions for that area.</span>
              <div className="input-group rounded mt-5">
                <input
                  type="text"
                  placeholder="Enter Zipcode Or City Name..."
                  name="city"
                  className="form-control rounded"
                  onChange={(e) => handleChange(e)}
                  required
                />&nbsp;
                <button className="btn btn-warning" onClick={(e) => weatherData(e)}>
                  Enter
                </button>
              </div>
              {errorMessage && (<div className="error">{errorMessage}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;
