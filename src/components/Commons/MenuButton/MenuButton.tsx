import React from "react";
import { Menu as TMenu } from "../../../types/types";
import classes from "../MenuButton/MenuButton.module.css";

type MenuButtonProps = {
    label: string;
    menu: TMenu;
};

const MenuButton: React.FC<MenuButtonProps> = ({ label }) => {
    return (
        <div>
            <div>{label}</div>
        </div>
    );
};

export default MenuButton;