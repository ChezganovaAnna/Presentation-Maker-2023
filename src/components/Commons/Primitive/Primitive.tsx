import {Position, Size} from "../../../types/types"
import {useRef} from "react"
import useDragAndDrop from "../../../hooks/useDragAndDrop"

type PrimitiveProps = {
    id: string,
    position: Position
    size: Size
    rotate: number | undefined
    data: {
        form: "Triangle" | "Ellipse" | "Rectangle"
        borderColor?: string
    }
}

function calculateTriangleCoordinates(width: number, height: number): string {
    const x1 = width / 2
    const y1 = 0
    const x2 = 0
    const y2 = height

    return `${x1},${y1} ${x2},${y2} ${width},${height}`
}

function Primitive({id, data, rotate, size, position}: PrimitiveProps) {
    const {borderColor, form} = data
    const centerX = size.width / 2
    const centerY = size.height / 2

    const ref = useRef(null);
    useDragAndDrop(ref, id);

    return (
        <>
            {form === "Ellipse" && (
                <ellipse
                    ref={ref as React.Ref<SVGEllipseElement>}
                    cx={centerX}
                    cy={centerY}
                    rx={size.width / 2}
                    ry={size.height / 2}
                    stroke={borderColor}
                />
            )}
            {form === "Rectangle" && (
                <rect
                    ref={ref as React.Ref<SVGRectElement>}
                    x={0}
                    y={0}
                    width={size.width}
                    height={size.height}
                    stroke={borderColor}
                />
            )}
            {form === "Triangle" && (
                <polygon
                    ref={ref as React.Ref<SVGPolygonElement>}
                    points={calculateTriangleCoordinates(size.width, size.height)}
                    stroke={borderColor}
                />
            )}
        </>
    )
}

export default Primitive