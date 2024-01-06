import React, {useEffect} from "react";
import {usePresentationActions} from "../store/hooks/useRedux";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";

function useDragAndDrop(ref: React.RefObject<HTMLElement | SVGEllipseElement | SVGRectElement | SVGPolygonElement>, objectId?: string) {
    const objectsSelection = useSelector((state: RootState) => state.presentation.objectsSelection);
    const presentationActions = usePresentationActions();

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (!ref.current) return;

            if (ref.current.contains(event.target as Node) && objectId) {
                if (event.shiftKey) {
                    toggleSelection(objectId);
                } else {
                    clearSelectionAndSelect(objectId);
                    initiateDrag(event);
                }
            } else if (!event.shiftKey) {
                if (objectId)
                    clearSelection();
                else
                    initiateDrag(event);
            }
        };

        const toggleSelection = (id: string) => {
            const newSelection = objectsSelection.includes(id)
                ? objectsSelection.filter(selId => selId !== id)
                : [...objectsSelection, id];
            presentationActions.setObjectSelection(newSelection);
        };

        const clearSelectionAndSelect = (id: string) => {
            presentationActions.setObjectSelection([id]);
        };

        const clearSelection = () => {
            presentationActions.setObjectSelection([]);
        };

        const initiateDrag = (mouseEvent: MouseEvent) => {
            let lastX = mouseEvent.clientX;
            let lastY = mouseEvent.clientY;

            const handleMouseMove = (moveEvent: MouseEvent) => {
                console.log("dragging" + moveEvent.clientX + " " + moveEvent.clientY);
                const offsetX = moveEvent.clientX - lastX;
                const offsetY = moveEvent.clientY - lastY;
                presentationActions.moveObject({x: offsetX, y: offsetY});
                lastX = moveEvent.clientX;
                lastY = moveEvent.clientY;
            };

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        ref.current?.addEventListener("mousedown", handleMouseDown as EventListener);

        return () => ref.current?.removeEventListener("mousedown", handleMouseDown as EventListener);
    }, [ref, objectsSelection, presentationActions]);
}

export default useDragAndDrop;