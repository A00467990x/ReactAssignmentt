import React from 'react';

/* import { useState, useEffect } from "react";

import cold from "../images/cold.png";
import sunny from "../images/sunny.png";
import mild from "../images/mild.png";*/
import port_harcourt_city from "../images/port_harcourt_city.jpg" 
import Weather from './PHCWeather';

const Town = () =>{
    return(
        <>
        <img src= {port_harcourt_city} alt="PHC"></img>
        <h1>The name of my hometown is Port Harcourt</h1>
        <h3>Port Harcourt (Pidgin: Po-ta-kot or Pi-ta-kwa) is the capital and largest city of Rivers State in Nigeria. It is also home to Nigerian exports, Burna Boy, Sammy & Omah Lay. It is the fifth most populous city in Nigeria after Lagos, Kano, Ibadan and Benin. It lies along the Bonny River and is located in the Niger Delta. As of 2023, Port Harcourt's urban population is estimated at 3.5 million. </h3>
        <br></br>
        <hr></hr>

        <br></br>
        <h2>(Real time) Temperature readings in Port Harcourt: </h2>
        <Weather />

        </>
    );
}

export default Town;