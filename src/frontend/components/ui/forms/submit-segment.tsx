import Link from "next/link";
import BasicButton from "../basic-button/basic-button";

 const SubmitSegment = () => {
  return <div className="flex justify-between">
    <BasicButton size={"sm"} type={"outlined"}><Link href="/">cancel</Link></BasicButton>
    <BasicButton size={"md"} type={"filled"}>register</BasicButton>
  </div>;
};

export default SubmitSegment;
