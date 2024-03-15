import UncheckedBox from "../../icons/unchecked-box";
import CheckedBox from "../../icons/checked-box";

const TermsOfServiceInput = () => {
  return (
    <div >
      <div><UncheckedBox scale={.5}/></div>
      <div><CheckedBox scale={.5}/></div>
      <div>I have read and accept the terms of use</div>
    </div>
  )
};

export default TermsOfServiceInput;
