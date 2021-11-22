type Alignment = 'center' | 'start' | 'end';

type CanvasStyle = string | CanvasGradient | CanvasPattern;

type ImageFormat = Parameters<typeof HTMLCanvasElement.prototype.toDataURL>;

interface DearFontFaceDescriptors {
	readonly style: string;
	readonly variant: string;
	readonly weight: string;
}

interface DearFontFace extends DearFontFaceDescriptors {
	readonly family: string;
}

interface DearFontFaceConstructor {
	new (family: string): DearFontFace;
	new (family: string, descriptors: Partial<DearFontFaceDescriptors>): DearFontFace;

	prototype: DearFontFace;
}

interface DearFont extends DearFontFace {
	readonly size: number;

	readonly face: DearFontFace;
}

interface DearFontConstructor {
	new (size: number, face: DearFontFace): DearFont;
	new (size: number, family: string): DearFont;
	new (size: number, family: string, descriptors: DearFontFaceDescriptors): DearFont;

	prototype: DearFont;
}

interface DearImage {
	readonly context: CanvasRenderingContext2D;
	readonly canvas: HTMLCanvasElement;

	readonly width: number;
	readonly height: number;

	equals(value: any): boolean;

	isBlank(): boolean;

	resize(x: number, y: number): DearImage;

	resizeX(n: number): DearImage;
	resizeX(n: number, proportionally: boolean): DearImage;

	resizeY(n: number): DearImage;
	resizeY(n: number, proportionally: boolean): DearImage;

	scale(n: number): DearImage;
	scale(x: number, y: number): DearImage;

	scaleX(n: number): DearImage;

	scaleY(n: number): DearImage;

	flip(x: boolean, y: boolean): DearImage;

	flipX(): DearImage;

	flipY(): DearImage;

	rotate(n: number): DearImage;

	rotateClockwise(): DearImage;

	rotateCounterClockwise(): DearImage;

	reframe(sizeX: number, sizeY: number): DearImage;
	reframe(sizeX: number, sizeY: number, alignmentX: Alignment, alignmentY: Alignment): DearImage;

	toBuffer(...args: ImageFormat): Buffer;

	toDataURL(...args: ImageFormat): Buffer;

	toFileSystem(target: string, ...args: ImageFormat): Promise<void>;

	toHTMLCanvasElement(): HTMLCanvasElement;

	toHTMLImageElement(...args: ImageFormat): HTMLImageElement;

	toImageData(): ImageData;

	toOffscreenCanvas(): OffscreenCanvas;
}

interface DearImageConstructor {
	isDearImage(value: any): boolean;

	from(value: any): Promise<DearImage>;

	blank(sizeX: number, sizeY: number): DearImage;

	readonly FontFace: DearFontFaceConstructor;

	loadFontFace(fontFace: DearFontFace): Promise<void>;
	loadFontFace(fontFace: DearFontFace, source: any): Promise<void>;

	readonly Font: DearFontConstructor;

	text(text: string, font: DearFont, options?: {
		alignment?: Alignment,
		fill?: CanvasStyle,
		lineGap?: number,
		padding?: number,
		stroke?: {
			style: CanvasStyle,
			width: number,
		},
	});

	new (context: CanvasRenderingContext2D): DearImage;

	prototype: DearImage;
}
