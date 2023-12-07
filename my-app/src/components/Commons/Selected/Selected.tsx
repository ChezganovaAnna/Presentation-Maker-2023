import Option from "../Option/Option";
import { Option as TOption } from "../../../types/types";

type SelectProps = {
    options: TOption[];
    className?: string;
};

function Select({ className, options }: SelectProps) {
    return (
        <select className={className}>
            {options.map((option) => (
                <Option key={option.id} option={option} />
            ))}
        </select>
    );
}

export default Select;