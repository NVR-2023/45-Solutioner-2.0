import React, { FC } from "react";
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";

const AuthButtons: FC = () => {
  return (
    <div className="flex space-x-3">
      <SigninButton />
      <RegisterButton/>
    </div>
  );
};

export default AuthButtons;
