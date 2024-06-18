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
    <div className="flex h-screen w-screen flex-col">
      settings
      <input
        placeholder="street"
        name="street"
        onChange={handleOnChange}
        value={address}
      />
      <input
        placeholder="apartment"
        name="apartment"
        onChange={handleOnChange}
        value={address}
      />
      <input
        placeholder="city"
        name="city"
        onChange={handleOnChange}
        value={address}
      />
      <input
        placeholder="state"
        name="state"
        onChange={handleOnChange}
        value={address}
      />
      <input
        name="country"
        placeholder="country"
        onChange={handleOnChange}
        value={address}
      />
      <button onClick={handleOnClick} className="bg-green-400">
        {" "}
        submit
      </button>
      <div>geolocation: {JSON.stringify(geolocation)}</div>
    </div>
  );
};

export default Settings;
