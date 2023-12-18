import classes from "./MenuElement.module.css";

type MenuElementProps = {
    text: string;
    shortcut?: string;
};

const MenuElement: React.FC<MenuElementProps> = ({ text, shortcut }) => {
    return (
        <span className={classes.element}>
      <span> {text} </span>
            {shortcut && <span> {shortcut} </span>}
    </span>
    );
};

export default MenuElement;