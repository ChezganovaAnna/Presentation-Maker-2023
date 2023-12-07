import { ChangeEventHandler } from "react";

type InputProps = {
    defaultValue?: string | number;
    placeholder?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Input({ defaultValue, placeholder, className, onChange }: InputProps) {
    return (
        <div>
            <input
                className={className}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;