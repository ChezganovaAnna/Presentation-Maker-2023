import React from "react";
import Button from "../Button/Button";
import MenuPrimitives from "../MenuPrimitives/MenuPrimitives";
import classes from "./MenuButtonPrimitive.module.css";

const MenuButtonPrimitives = () => {
    return (
        <div>
            <Button icon="category" iconAppearance={classes.button}/>
            <MenuPrimitives />
        </div>
    );
}

export default MenuButtonPrimitives;