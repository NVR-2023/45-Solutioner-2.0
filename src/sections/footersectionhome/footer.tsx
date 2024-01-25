import React , {FC} from "react"

const Footer:FC = () => {
  return <div className="grid grid-cols-3 gap-3 bg-zinc-900 text-neutral-300">
    <div className="col-start-1 col-span-1">test1.1</div>
    <div className="col-start-2 col-span-1">test2.1</div>
    <div className="col-start-3 col-span-1">test3.1</div>
    <div className="col-start-1 col-span-1">test1.2</div>
    <div className="col-start-2 col-span-1">test2.2</div>
    <div className="col-start-3 col-span-1">test3.2</div>
    <div className="col-start-1 col-span-1">test1.3</div>
    <div className="col-start-2 col-span-1">test2.3</div>
    <div className="col-start-3 col-span-1">test3.3</div>
  </div>;
};

export default Footer;
