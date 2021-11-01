declare class DearImage {
    context: CanvasRenderingContext2D;
    static is(value: any): boolean;
    constructor(context: CanvasRenderingContext2D);
    get canvas(): HTMLCanvasElement;
    get width(): number;
    get height(): number;
    get sizeX(): number;
    get sizeY(): number;
}
declare const a: number;
export { DearImage as default, a };
