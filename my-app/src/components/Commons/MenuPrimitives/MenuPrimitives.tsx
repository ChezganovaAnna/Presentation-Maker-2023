import Button from "../Button/Button";
import classes from "./MenuPrimitives.module.css";

function MenuPrimitives() {
    return (
        <div className={classes.primitives}>
            <Button icon="rectangle" iconAppearance={classes.button}/>
            <Button icon="circle" iconAppearance={classes.button}/>
            <Button icon="triangle" iconAppearance={classes.button}/>
            <Button icon="change_history" iconAppearance={classes.button}/>
        </div>
    );
}

export default MenuPrimitives;