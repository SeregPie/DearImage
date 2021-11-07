// todo: declare

export type ScalingN = number;

declare class DearImage {
	scale(scaling: ScalingN): DearImage;
	scale(scalingX: ScalingN, scalingY: ScalingN): DearImage;

	/*
	scale(scaling: {x?: ScalingN, y?: ScalingN})
	*/
}

export default DearImage;
