import { ReactNode } from "react";

const FormCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"w-full bg-gray-100 flex text-gray-900 text-sm"}>
      {children}
    </div>
  );
};
export default FormCard;
