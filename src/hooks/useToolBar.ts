import { Presentation as TPresentation } from "../types/types";

export const useToolBar = (
    presentation: TPresentation,
    setPresentation: (newPresentation: TPresentation) => void,
) => {
    const download = () => {
        const data = JSON.stringify(presentation, null, 2);
        const file = new Blob([data], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = `${presentation.name}.json`;
        link.click();
    };

    const upload = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";
        input.addEventListener("change", (event) => {
            const selectedFile = (event.target as HTMLInputElement).files?.[0];

            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = () => {
                    try {
                        const fileContent = JSON.parse(reader.result as string);
                        if (fileContent && Object.keys(fileContent).length > 0) {
                            setPresentation(fileContent);
                        } else {
                            console.error("Empty or invalid JSON file");
                        }
                    } catch (error) {
                        console.error("Error parsing JSON ");
                    }
                };
                reader.readAsText(selectedFile);
            }
        });

        input.click();
    };

    return { download, upload };
}

export default useToolBar;
