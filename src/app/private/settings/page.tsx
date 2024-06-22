"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { fetchGeocoordinatesByAddress } from "@/backend/actions/geolocation/fetch-geocordinates-by-address";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import { createUserAddress } from "@/backend/actions/create-user-address/create-user-address";

const Settings = () => {
  const [geolocation, setGeolocation] = useState<any>(null);

  const { userId } = useUserDetailsContext();

  const [newUserAddress, setNewUserAddress] = useState({
    userId: userId!,
    isPrimary: false,
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
      setNewUserAddress((previousAddress) => ({
        ...previousAddress,
        latitude: (geolocation.results[0]?.geometry.lat).toString(),
        longitude: (geolocation.results[0]?.geometry.lng).toString(),
      }));
    }
  }, [geolocation]);

  useEffect(() => {
    if (newUserAddress.latitude && newUserAddress.longitude) {
      createUserAddress(newUserAddress);
    }
  }, [newUserAddress.latitude, newUserAddress.longitude]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUserAddress((previousAddress) => ({
      ...previousAddress,
      [name]: value,
    }));
  };

  const handleOnFetchGeoCoordinates = async () => {
    const addressString = [
      newUserAddress.street,
      newUserAddress.apartment,
      newUserAddress.city,
      newUserAddress.country,
    ].join(" ");

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
        value={newUserAddress.street}
      />
      <input
        placeholder="apartment"
        name="apartment"
        onChange={handleOnChange}
        value={newUserAddress.apartment}
      />
      <input
        placeholder="city"
        name="city"
        onChange={handleOnChange}
        value={newUserAddress.city}
      />
      <input
        placeholder="postal code"
        name="postalCode"
        onChange={handleOnChange}
        value={newUserAddress.postalCode}
      />
      <input
        placeholder="state"
        name="state"
        onChange={handleOnChange}
        value={newUserAddress.state}
      />
      <input
        name="country"
        placeholder="country"
        onChange={handleOnChange}
        value={newUserAddress.country}
      />
      <button onClick={handleOnFetchGeoCoordinates} className="bg-green-400">
        submit
      </button>
      <div>newUserAddress: {JSON.stringify(newUserAddress)}</div>
    </div>
  );
};

export default Settings;
