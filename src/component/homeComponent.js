import React from 'react';
import DisplayWeather from "./DisplayWeather";
import { useHistory } from "react-router-dom";

function Home() {
  const weather = window.localStorage.getItem("weather");
  let history = useHistory();
  const home = () => {

    history.push("/");
    window.location.reload();
  }
  let Displaydata = JSON.parse(weather);
  return (
    <div className='mt-2'>
    {Displaydata.cod != 404 ? (
      <div className='text-center'><button className="btn btn-secondary" onClick={home}>Home</button></div>
      ) : null}
      <section className="cover min-vh-100">
      <div className="cover-caption">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            {weather != undefined ? (
              <div>
                <DisplayWeather data={Displaydata} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>
    
  )
}

export default Home;