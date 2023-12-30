import React, {useEffect} from "react";
import {usePresentationActions} from "../store/hooks/useRedux";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";

function useDragAndDrop(ref: React.RefObject<HTMLElement | SVGEllipseElement | SVGRectElement | SVGPolygonElement>, objectId?: string) {
    const objectsSelection = useSelector((state: RootState) => state.presentation.objectsSelection);
    const presentationActions = usePresentationActions();

    useEffect(() => {
        const handleMouseDown = (event: Event) => {
            const mouseEvent = event as MouseEvent;

            if (ref.current && ref.current.contains(mouseEvent.target as Node)) {
                if (mouseEvent.shiftKey && objectId) {
                    // Toggle object ID in selection if Shift is pressed
                    const isSelected = objectsSelection.includes(objectId);
                    const newSelection = isSelected
                        ? objectsSelection.filter(id => id !== objectId)
                        : [...objectsSelection, objectId];
                    presentationActions.setObjectSelection(newSelection);

                } else {
                    // Initialize last position
                    let lastX = mouseEvent.clientX;
                    let lastY = mouseEvent.clientY;

                    const handleMouseMove = (e: Event) => {
                        const moveEvent = e as MouseEvent;
                        const offsetX = moveEvent.clientX - lastX;
                        const offsetY = moveEvent.clientY - lastY;

                        // Call moveObject with offset values
                        presentationActions.moveObject({x: offsetX, y: offsetY});

                        // Update last position
                        lastX = moveEvent.clientX;
                        lastY = moveEvent.clientY;
                    };

                    const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove);
                        document.removeEventListener("mouseup", handleMouseUp);
                    };

                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                }
            }
        };

        if (ref.current) {
            ref.current.addEventListener("mousedown", handleMouseDown);

            return () => {
                if (ref.current) {
                    ref.current.removeEventListener("mousedown", handleMouseDown);
                }
            };
        }
    }, [ref, objectsSelection, presentationActions]);
}

export default useDragAndDrop;