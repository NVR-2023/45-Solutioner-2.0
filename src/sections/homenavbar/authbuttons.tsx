import React , {FC} from "react"
import SigninButton from "./signinbutton";
import RegisterButton from "./registerbutton";

const AuthButtons:FC = () => {
  return (
    <div className="flex space-x-3">
      <div><SigninButton /></div>
      <div><RegisterButton /></div>
    </div>
  )
};

export default AuthButtons;
