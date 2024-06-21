export type UserAddressType = {
  userId: string;
  isPrimary: boolean;
  street: string;
  apartment: string;
  city: string;
  postalCode?: string;
  state?: string;
  country: string;
  latitude: string;
  longitude: string;
};
