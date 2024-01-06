import React, { ButtonHTMLAttributes, useState } from "react";
import Button from "../Commons/Button/Button";
import InputDatas from "../Commons/InputDatas/InputDatas";
import styles from "./ToolBar.module.css";
import { usePresentationActions } from "../../store/hooks/useRedux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Slide as TSlide } from "../../types/types";

type ToolBarProps = {
    className: string;
}

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ToolBar({ className }: ToolBarProps) {
  const presentationActions = usePresentationActions();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const selectedItems = useSelector((state: RootState) => state.presentation.objectsSelection);
    const slides = useSelector((state: RootState) => state.presentation.presentationSlides);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

    const handleDeleteClick = (slide?: TSlide) => {
        if (slide) {
            presentationActions.deleteSlide(slide.id);
        } else if (slides.length > 1) {
            const lastSlide = slides[slides.length - 1];
            presentationActions.deleteSlide(lastSlide.id);
        }
    };

    return (
        <div className={`${styles.container} ${className}`}>
            <p>Функции с презентацией</p>
            <div className={styles.options}>
                <Button icon={"delete"} onClick={() => {
                    selectedItems.forEach(itemId => presentationActions.removeItem(itemId));
                }}/>
                <Button icon={"undo"}/>
                <Button icon={"redo"}/>
                <Button icon={"scissors"}/>
                <Button icon={"copy"}/>
                <Button icon={"search"}/>
                <Button icon={"crop"}/>
                <Button icon="change_history"/>
                <div className={styles.options_slides}>
                    <div className={styles.deal_slides}>
                        <Button icon={"remove"} onClick={() => {
                            if (slides.length > 1) {
                                handleDeleteClick(slides[slides.length - 1]);
                            }
                        }}/>
                        <span className={styles.text}>Delete slide</span>
                    </div>
                    <div className={styles.deal_slides}>
                        <Button icon={"add"} onClick={presentationActions.createSlide}/>
                        <span className={styles.text}>Create slide</span>
                    </div>
                </div>
            </div>
            <p>Работа с текстом</p>
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
                           }}/>
                    <Button icon={"text_color"}  />
                </div>
            </div>
            <p>Работа с картинками</p>
            <div className={styles.options}>
              <Button icon={"image"}/>
              <input type="color" onChange={handleColorChange} />
            </div>
            <p>Работа с примитивами</p>
            <div className={styles.options}>
                <Button icon="category"/>
                <Button icon="rectangle"/>
                <Button icon="circle"/>
                <Button icon="triangle"/>
            </div>
        </div>
    );
}

export default ToolBar;