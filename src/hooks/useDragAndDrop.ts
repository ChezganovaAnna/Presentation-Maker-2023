import React, {useEffect} from "react";

function useDragAndDrop(ref: React.RefObject<HTMLElement>, setPos: (pos: { x: number; y: number }) => void) {
    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (ref.current && ref.current.contains(event.target as Node)) {
                const startX = parseFloat(ref.current.style.left);
                {/*положение элемента передать*/
                }
                const startY = parseFloat(ref.current.style.top);
                const handleMouseMove = (e: MouseEvent) => {
                    setPos({x: startX + e.clientX - event.clientX, y: startY + e.clientY - event.clientY});
                };
                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                };
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
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
    }, [ref, setPos]);
}

export default useDragAndDrop;