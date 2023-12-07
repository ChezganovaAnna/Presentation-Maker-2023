import MenuView from "../Commons/MenuView/MenuView";
import classes from "./Head.module.css";

type HeaderProps = {
    presentationName: string;
};

function Header({ presentationName }: HeaderProps) {
    return (
        <div className={classes.header}>
            <MenuView presentationName={presentationName} />
        </div>
    );
}

export default Header;