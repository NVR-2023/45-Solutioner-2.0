"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { fetchGeocoordinatesByAddress } from "@/backend/actions/geolocation/fetch-geocordinates-by-address";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

const Settings = () => {
  const [geolocation, setGeolocation] = useState<any>(null);

  const { userId } = useUserDetailsContext();

  const [address, setAddress] = useState({
    userId: userId,
    isPrimary: true,
    street: "",
    apartment: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (geolocation) {
      address.latitude = geolocation.results[0].geometry.lng;
      address.longitude = geolocation.results[0].geometry.lng;
    }
  }, [geolocation, address]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddress((previousAddress) => ({ ...previousAddress, [name]: value }));
  };

  const handleOnFetchGeoCoordinates = async () => {
    const addressString = Object.values(address).join(" ");
    const data = await fetchGeocoordinatesByAddress(addressString);
    setGeolocation(data);
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <div>settings</div>
      <input
        placeholder="street"
        name="street"
        onChange={handleOnChange}
        value={address.street}
      />
      <input
        placeholder="apartment"
        name="apartment"
        onChange={handleOnChange}
        value={address.apartment}
      />
      <input
        placeholder="city"
        name="city"
        onChange={handleOnChange}
        value={address.city}
      />
      <input
        placeholder="postal code"
        name="postalCode"
        onChange={handleOnChange}
        value={address.postalCode}
      />
      <input
        placeholder="state"
        name="state"
        onChange={handleOnChange}
        value={address.state}
      />
      <input
        name="country"
        placeholder="country"
        onChange={handleOnChange}
        value={address.country}
      />
      <button onClick={handleOnFetchGeoCoordinates} className="bg-green-400">
        submit
      </button>
      <div>geolocation: {JSON.stringify(geolocation)}</div>
      {geolocation && geolocation.results && geolocation.results[0] && (
        <div>
          Latitude: {geolocation.results[0].geometry.lat}
          <br />
          Longitude: {geolocation.results[0].geometry.lng}
        </div>
      )}
    </div>
  );
};

export default Settings;
