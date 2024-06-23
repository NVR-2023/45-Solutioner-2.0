export const checkUserAddressObjectCompleteness = (
  userAddress: Record<string, string | boolean>,
): boolean => {
  const REQUIRED_USER_ADDRESS_FIELDS = [
    "isPrimary",
    "street",
    "apartment",
    "city",
    "country",
    "latitude",
    "longitude",
  ] as const;
  return REQUIRED_USER_ADDRESS_FIELDS.every((field) => userAddress[field]);
};
