import {useContext, useState} from "react";
import Button from "../Commons/Button/Button";
import InputDatas from "../Commons/InputDatas/InputDatas";
import styles from "./ToolBar.module.css";
import useToolBar from "../../hooks/useToolBar";
import {usePresentationActions} from "../../store/hooks/useRedux";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

type ToolBarProps = {
    className: string;
}

function ToolBar({className}: ToolBarProps) {
    const presentationActions = usePresentationActions()
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);

    // const {download, upload} = useToolBar(presentation, setPresentation);
    const selectedItems = useSelector((state: RootState) => state.presentation.objectsSelection);

    const handleDeleteClick = () => {
        selectedItems.forEach(itemId => presentationActions.removeItem(itemId));
    };

    return (
        <div className={`${styles.container} ${className}`}>
            <p className={styles.text_divider}>Функции с презентацией</p>
            <div className={styles.options}>
                <Button icon={"delete"} onClick={handleDeleteClick}/>
                <Button icon={"undo"}/>
                <Button icon={"redo"}/>
                {/*<Button icon={"download"} onClick={download}/>
                <Button icon={"upload"} onClick={upload}/>*/}
                <Button icon={"scissors"}/>
                <Button icon={"copy"}/>
                <Button icon={"search"}/>
                <Button icon={"crop"}/>
                <Button icon="change_history"/>

            </div>
            <p className={styles.text_divider}>Работа с текстом</p>
            <div className={styles.options}>
                <label htmlFor="fontSelect">Выберите шрифт:</label>
                <select className={styles.select_font} id="fontSelect" onChange={(e) => {
                    presentationActions.changeFontFamily(e.target.value)
                }}>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <div className={styles.options_font_size}>
                    <Button icon={"remove"} onClick={()=> presentationActions.decreaseFontSize(1)}/>
                    <InputDatas defaultValue={11} onChange={ (event)=> {
                        const newFontSize = parseInt(event.target.value, 10)
                        if (!newFontSize) {
                            presentationActions.setFontSize(18);
                        } else {
                            presentationActions.setFontSize(newFontSize);
                        }
                        //presentationActions.setFontSize(newFontSize)}
                    }}
                                className={styles["font-size-input"]}/>
                    <Button icon={"add"} onClick={()=> presentationActions.increaseFontSize(1)}/>
                </div>
                <Button icon={"insert_text"} onClick={() => {
                    presentationActions.addItem("text")
                }}/>
                <Button icon={"brush"}/>
                <Button icon={"format_bold"} onClick={() => {
                    setIsBold(prevIsBold => !prevIsBold);
                    presentationActions.setFontBold(!isBold);
                }}/>
                <Button icon={"format_italic"} onClick={() => {
                    setIsItalic(prevIsItalic => !prevIsItalic);
                    presentationActions.setFontItalic(!isItalic);
                }}/>
                <Button icon={"format_underlined"} onClick={() => {
                    setIsUnderlined(prevIsUnderlined => !prevIsUnderlined);
                    presentationActions.setFontUnderlined(!isUnderlined);
                }}/>
                <Button icon={"format_strikethrough"} onClick={() => {
                    setIsStrikethrough(prevIsStrikethrough => !prevIsStrikethrough);
                    presentationActions.setFontStrikethrough(!isStrikethrough);
                }}/>
                <div className={styles.colorPickerContainer}>
                    <input type="color" id="textColor" name="textColor" className={styles.hideColorPicker}
                           onChange={ (event)=> {
                               const newFontColor = event.target.value
                               if (!newFontColor) {
                                   presentationActions.setFontColor("#000000");
                               } else {
                                   presentationActions.setFontColor(newFontColor);
                               }
                               //presentationActions.setFontSize(newFontSize)}
                           }}/>
                    <Button icon={"text_color"}  />
                </div>
            </div>
            <p className={styles.text_divider}>Работа с картинками</p>
            <div className={styles.options}>
                <Button icon={"image"}/>
            </div>
            <p className={styles.text_divider}>Работа с примитивами</p>
            <div className={styles.options}>
                <Button icon="category"/>
                <Button icon="rectangle" onClick={() => {
                    presentationActions.addItemPrimitive("Rectangle")
                }}/>
                <Button icon="circle" onClick={() => {
                    presentationActions.addItemPrimitive("Ellipse")
                }}/>
                <Button icon="triangle" onClick={() => {
                    presentationActions.addItemPrimitive("Triangle")
                }}/>
            </div>
            <div className={styles.options_slides}>
                <button className={styles.bt_create_slide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="#FFFFFF"/>
                    </svg>
                    <span className={styles.bt_text}>Create New Slide</span>
                </button>
                <button className={styles.bt_create_slide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#FFFFFF"/>
                    </svg>
                    <span className={styles.bt_text}>Delete Selected slide</span>
                </button>
            </div>
        </div>
    );
}

export default ToolBar;