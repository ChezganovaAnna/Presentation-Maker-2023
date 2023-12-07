import { Size, Position } from "../../../types/types";

type PrimitiveProps = {
    position: Position;
    size: Size;
    opacity: number | undefined;
    rotate: number | undefined;
    data: {
        form: "Triangle" | "Ellipse" | "Rectangle";
        borderColor: string;
        borderBold: number;
        fillColor: string;
    };
};
{/*здесь borderBold нужно убрать, но мне лень*/}

function calculateTriangleCoordinates(width: number, height: number): string {
    const x1 = width / 2;
    const y1 = 0;
    const x2 = 0;
    const y2 = height;

    return `${x1},${y1} ${x2},${y2} ${width},${height}`;
}

function Primitive({ data, rotate, size, opacity, position }: PrimitiveProps) {
    const { borderColor, fillColor, borderBold, form } = data;
    const centerX = size.width / 2;
    const centerY = size.height / 2;

    return (
        <svg width={size.width} height={size.height}>
            <g>
                {form === "Ellipse" && (
                    <ellipse
                        cx={centerX}
                        cy={centerY}
                        rx={size.width / 2}
                        ry={size.height / 2}
                        fill={fillColor}
                        stroke={borderColor}
                    />
                )}
                {form === "Rectangle" && (
                    <rect
                      x={0}
                      y={0}
                      width={size.width}
                      height={size.height}
                      fill={fillColor}
                      stroke={borderColor}
                    />
                )}
                {form === "Triangle" && (
                    <polygon
                        points={calculateTriangleCoordinates(size.width, size.height)}
                        fill={fillColor}
                        stroke={borderColor}
                    />
                )}
            </g>
        </svg>
    );
}

export default Primitive;