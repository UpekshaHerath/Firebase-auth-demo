import { FC } from "react";

interface ButtonProps {
    headerText: string;
}

const MainHeader: FC<ButtonProps> = ({ headerText }) => {
    return (
        <h1 className={"text-xl pb-5"}>{headerText}</h1>
    )
}; 

export default MainHeader;