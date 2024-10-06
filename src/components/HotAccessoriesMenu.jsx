// import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/HotAccessories.css'

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HotAccessoriesLink" to="/music">
        Music store
      </Link>
      <Link className="HotAccessoriesLink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="HotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/lifestyle">
        Lifestyle
      </Link>
      <Link className="HotAccessoriesLink" to="/mobile">Mobile accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
