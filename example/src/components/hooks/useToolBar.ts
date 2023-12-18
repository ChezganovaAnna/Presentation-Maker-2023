import { Editor } from "../../types/types";

export const useToolBar = (
    editor: Editor,
    setEditor: (newEditor: Editor) => void,
) => {
    const download = () => {
        const data = JSON.stringify(editor, null, 2);
        const file = new Blob([data], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = `${editor.editorPresentation.name}.json`;
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
                    const fileContent = JSON.parse(reader.result as string);
                    setEditor(fileContent);
                };
                reader.readAsText(selectedFile);
            }
        });

        input.click();
    };

    return { download, upload };
}

export default useToolBar;
