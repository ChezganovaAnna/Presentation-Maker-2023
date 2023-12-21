import { ChangeEventHandler } from "react";

type InputDatasProps = {
    defaultValue?: string | number;
    placeholder?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

function InputDatas({ defaultValue, placeholder, className, onChange }: InputDatasProps) {
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

export default InputDatas;