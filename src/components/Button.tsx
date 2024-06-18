import { FC } from "react";

interface ButtonProps {
    isStylesOn?: boolean;
    buttonText: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ isStylesOn = true, buttonText, onClick }) => {
    return (
        <button className={isStylesOn ? "bg-black p-2 rounded-xl text-white overflow-hidden" : ""} onClick={onClick}>{buttonText}</button>
    )
};

export default Button;