import Option from "../Option/Option";
import { Option as TOption } from "../../../types/types";

type SelectedProps = {
    options: TOption[];
    className?: string;
};

function Selected({ className, options }: SelectedProps) {
    return (
        <select className={className}>
            {options.map((option) => (
                <Option key={option.id} option={option} />
            ))}
        </select>
    );
}

export default Selected;