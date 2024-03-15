import BasicButton
 from "../basic-button/basic-button";
const SubmitSegment = () => {
  return <div className="flex justify-between">
    <BasicButton size={"sm"} type={"outlined"}>cancel</BasicButton>
    <BasicButton >register</BasicButton>
  </div>;
};

export default SubmitSegment;
