"use client"

import { useState , ChangeEvent } from "react";
import { fetchGeocoordinatesByAddress } from "@/backend/actions/geolocation/fetch-geocordinates-by-address";

const Settings = () => {

  const [address , setAddress ] = useState("");
const [ geolocation , setGeolocation ] = useState({});

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const handleOnClick= async () => {
    const data = await fetchGeocoordinatesByAddress(address);
    setGeolocation(data); 

  }
  return (
    <div className="h-screen w-screen overflow-y-scroll">
      settings
      <input
      onChange={handleOnChange}
      value={address}
      />

      <button 
      onClick={handleOnClick}
      className="bg-green-400"> submit</button>
      <div>
        geolocation: {JSON.stringify(geolocation)}
      </div>
    </div>
    
  );
};

export default Settings;
