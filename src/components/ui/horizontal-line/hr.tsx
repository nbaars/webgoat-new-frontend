import { FC } from "react";

type HrProps = {
  label?: string;
};
const HorizontalLine: FC<HrProps> = ({ label }) => {
  return (
    <div className={"relative"}>
      <div className={'w-full h-[1px] bg-gray-200'}></div>
      <div className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm"}>{label}</div>
    </div>
  );
};
export default HorizontalLine;
