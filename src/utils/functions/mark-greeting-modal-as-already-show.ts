export const markGreetingModalAsAlreadyShown = () => {
  sessionStorage.setItem("hasGreetingModalBeenShown", "true");
};
