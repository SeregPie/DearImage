import {DearImage} from './DearImage';

import './DearImage.prototype.foo';

const b: any = {};

const image = new DearImage(b);

export const a = image.foo(1 ,2);

export default DearImage;
