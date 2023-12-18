import Button from "../Button/Button";
import classes from "./MenuPrimitives.module.css";

function MenuPrim() {
    return (
        <div className={classes.primitives}>
            <Button icon="rectangle" />
            <Button icon="circle" />
            <Button icon="change_history" />
        </div>
    );
}

export default MenuPrim;