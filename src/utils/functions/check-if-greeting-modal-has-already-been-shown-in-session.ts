export const checkIfGreetingModalHasAlreadyBeenShownInSession = (): boolean => {
  const hasGreetingModalAlreadyBeenShown = sessionStorage.getItem(
    "hasGreetingModalBeenShown",
  );

  return hasGreetingModalAlreadyBeenShown === "true";
};
