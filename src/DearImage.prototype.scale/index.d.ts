export type ScalingN = number;

declare class DearImage {
	scale(scaling: ScalingN): DearImage;
	scale(scalingX: ScalingN, scalingY: ScalingN): DearImage;
}

export default DearImage;
