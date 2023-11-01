import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const Navigater= () =>{
    return(
<>
      <nav className="App">
            <Link to="/">About Me</Link>      |      <Link to="/hometown">My Town</Link>
      </nav>

      <Outlet />
    </>
    );
}

export default Navigater;
       