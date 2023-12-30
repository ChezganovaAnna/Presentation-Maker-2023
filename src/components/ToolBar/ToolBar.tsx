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
                <div className={styles.options_slides}>
                    <div className={styles.deal_slides}>
                        <Button icon={"remove"}/>
                        <span className={styles.text}>Delete slide</span>
                    </div>
                    <div className={styles.deal_slides}>
                        <Button icon={"add"}/>
                        <span className={styles.text}>Create slide</span>
                    </div>
                </div>
            </div>
            <p className={styles.text_divider}>Работа с текстом</p>
            <div className={styles.options}>
                <label htmlFor="fontSelect">Выберите шрифт:</label>
                <select className={styles.select_font} id="fontSelect" onChange={(e) => {
                    const selectedFont = e.target.value;
                    presentationActions.changeFontFamily(selectedFont)
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
        </div>
    );
}

export default ToolBar;