// import { correctionMenu, fileMenu } from "../../../Permanent/MenuView";
import  TInput  from "../InputDatas/InputDatas";
import MenuButton from "../MenuButton/MenuButton";
import classes from "./MenuView.module.css";

type MenuBarProps = {
    presentationName: string;
};

function MenuView({ presentationName }: MenuBarProps) {
    return (
        <div className={classes.menu}>
            <img
                className={classes["main-icon"]}
                alt="main-icon"
                src="presentation_icon.png"
            />
            <div className={classes["input-buttons"]}>
                <TInput className={classes.input} defaultValue={presentationName} />
                <div className={classes.buttons}>
                    {/*<MenuButton label="Файл" menu={fileMenu} />*/}
                    {/*<MenuButton label="Правка" menu={correctionMenu} />*/}
                </div>
            </div>
        </div>
    );
}

export default MenuView;