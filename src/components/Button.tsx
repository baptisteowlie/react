import { MouseEventHandler } from "react";

type ButtonProps =  Readonly<{
  children:  React.ReactNode;
  buttonType?: "primary" | "secondary";
  onClick: () => Promise<void>;
}>

export default function Button({children, buttonType, onClick}: Readonly<ButtonProps>) {
  return (
    <button
      type="submit"
      className={`h-[45px] bg-[#473a2b] w-full text-white rounded-md cursor-pointer 
        ${buttonType == 'secondary' ? 'opacity-80' : ''}`}
        onClick={onClick}
    >
      {children}
    </button>
  );
}
