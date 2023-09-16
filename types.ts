
type SVGCircle = {
    type: 'circle',
    
}

type SVGElement = Array<SVGCircle|SVGRectangle|SVGTriangle>

type Size = {
    length: number,
    width: number,
    firstRadius: number,
    secondRadius: number,
    dotStart: number,
}

type ImageContent = {
    type: 'image',
    name: string,
    sizeArea: Size
}

type Char = {
    value: string,
    fontFamily: string,
    fontSize: number,
    fontColor: string,
    fintBold: boolean,
    fontItalica: boolean,
    fontStrikeThrough: boolean,
    paragraph: number
}

type TextContent = {
    type: 'text',
    chars: Array<Char>
}

type Slides = Array<TextContent|ImageContent|SVGElement|>

type Presentation = {
    slides: Array<Slides>
}