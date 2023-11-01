import React from 'react';

import { useState, useEffect } from "react";

import cold from "../images/cold.png";
import sunny from "../images/sunny.png";
import mild from "../images/mild.png";


const Weather= () => {
    const [data, setData] = useState();
    const [image, setImage] = useState(sunny)

    const [button, setButton] = useState("Convert to F")

        useEffect(() => {
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=4.824167&lon=7.033611&appid=9c89f48be4912d6bf1e1108a4c1fd844', 
            {
            }).then(res=>res.json())
            .then(result=>{
                console.log(result.main.temp - 273.15)
                setData(result.main.temp - 273.15)

                if(data >= 20)
                {
                    setImage(sunny)
                }

                if(data > 10 & data <= 20)
                {
                    setImage(mild)
                }

                if(data <= 10)
                {
                    setImage(cold)
                }
    
            })
        },[])


        const convertTemp = () => {
            if(button === 'Convert to F')
            {
                setData((data * (9/5)) + 32)
                setButton('Convert to C')
            }

            if(button === 'Convert to C')
            {
                setData((data - 32) * (5/9))
                setButton('Convert to F')
            }
        }



    return (
      <div className="App">
        <h1>{data}</h1>
        <img src= {image} alt="cold"></img>

        <div>
            <button onClick={() => convertTemp()}>
                {button}
            </button>

        </div>
     
      </div>
    );
  }

  export default Weather;