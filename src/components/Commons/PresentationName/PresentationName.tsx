import React, {CSSProperties, KeyboardEvent, useRef, useState} from 'react';
import styles from "./PresentationName.module.css";

const PresentationName: React.FC = () => {
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputRef.current && !inputRef.current.value) {
                setError(true);
                inputRef.current.style.border = '2px solid #FF4081';
            } else {
                setError(false);
                if (inputRef.current) {
                    console.log(inputRef.current.value);
                    inputRef.current.style.border = 'none';
                }
            }
        }
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                placeholder="Enter presentation name"
                className={styles.input_field}
                onKeyPress={handleKeyPress}
                ref={inputRef}
                required
            />
            {error && (
                <div className={styles.error_message}>
                    <p className={styles.errorMessage}>Please enter the presentation name</p>
                </div>
            )}
        </div>
    );
};

export default PresentationName;
