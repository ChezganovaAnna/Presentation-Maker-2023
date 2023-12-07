import MenuElement from "../MenuElement/MenuElement";
import { Menu as TMenu } from "../../../types/types";
import classes from "./Menu.module.css";

type MenuProps = TMenu;

function MainMenu({ menuElements }: MenuProps) {
    return (
        <div className={classes["menu-body"]}>
            {menuElements.map(({ id, text, shortcut }) => (
                <MenuElement key={id} text={text} shortcut={shortcut} />
            ))}
        </div>
    );
}

export default MainMenu;