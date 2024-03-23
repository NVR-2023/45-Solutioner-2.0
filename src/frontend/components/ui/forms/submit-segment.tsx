import Link from "next/link";
import BasicButton from "../basic-button/basic-button";

type SubmitSegmentType = {
  onCancel?: Function;
  onSubmit?: Function;
}

 const SubmitSegment = ({ onCancel, onSubmit }: SubmitSegmentType) => {
   return (
     <div className="flex justify-between">
       <BasicButton size={"sm"} type={"outlined"} onClick={onCancel}>
         cancel
       </BasicButton>
       <BasicButton size={"md"} type={"filled"} onClick={onSubmit}>
         register
       </BasicButton>
     </div>
   );
 };

export default SubmitSegment;
