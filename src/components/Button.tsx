import { FC } from "react";

interface ButtonProps {
    buttonText: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ buttonText, onClick }) => {
    return (
        <button className={"bg-black p-2 rounded-xl text-white overflow-hidden"} onClick={onClick}>{buttonText}</button>
    )
}; 

export default Button;