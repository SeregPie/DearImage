# PaperDuck

Manipulates canvas in the browser via native functions of the 2D rendering context.

## dependencies

*no dependencies*

## setup

### npm

```shell
npm install paperduck
```

### ES module

```javascript
import PaperDuck from 'paperduck';
```

### browser

```html
<script src="https://unpkg.com/paperduck"></script>
```

## members

`.constructor(context)`

| argument | description |
| ---: | :--- |
| `context` |  The 2D rendering context. |

```javascript
let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let instance = new PaperDuck(context);
console.log(canvas === instance.canvas); // => true
```

---

`.from(value)`

Creates an instance from the given value.

| argument | description |
| ---: | :--- |
| `value` |  The value to create from. |

Returns a new instance of `PaperDuck`.

```javascript
let canvas = document.getElementById('demo');
let instance = PaperDuck.from(canvas);
console.log(instance.canvas === canvas); // => false
let otherInstance = PaperDuck.from(instance);
console.log(otherInstance === instance); // => false
```

---

`.load(value)`

Loads an instance from the given value.

| argument | description |
| ---: | :--- |
| `value` | The value to load from. |

Returns a promised instance.

```javascript
let instance = (await PaperDuck.load('/path/to/image.jpg')).cover(256, 256);
document.body.appendChild(instance.canvas);
```

```javascript
let input = document.createElement('input');
input.type = 'file';
input.addEventListener('change', async function() {
  let instance = (await PaperDuck.load(this)).cover(256, 256);
  document.body.appendChild(instance.canvas);
});
input.click();
```

---

`.blank(width = 0, height = 0)`

Creates an instance with a blank transparent canvas of the given size.

| argument | description |
| ---: | :--- |
| `width` | The width of the canvas. |
| `height` | The height of the canvas. |

Returns a new instance of `PaperDuck`.

---

`.prototype.canvas`

Returns the canvas of the instance.

---

`.prototype.context`

Returns the 2D rendering context of the canvas of the instance.

---

`.prototype.width`

Returns the width of the canvas of the instance.

```javascript
let instance = PaperDuck.blank(256, 128);
console.log(instance.width); // => 256
```

---

`.prototype.height`

Returns the height of the canvas of the instance.

```javascript
let instance = PaperDuck.blank(256, 128);
console.log(instance.height); // => 128
```

---

`.prototype.resize(width, height, smoothing = 2)`

Resizes the canvas to the given size.

| argument | description |
| ---: | :--- |
| `width` | The width of the resized canvas. If the value is undefined, the width scales proportionally to the height. |
| `height` | The height of the resized canvas. If the value is undefined, the height scales proportionally to the width. |
| `smoothing` | The smoothing factor. The value must be is greater than or equal to 1. 1 means no smoothing. |

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck.from(image).resize('', 512, 5/2).canvas;
```

---

`.prototype.clip(left = 0, top = 0, width, height)`

Positions and clips the canvas to the given size.

| argument | description |
| ---: | :--- |
| `left` | The left offset of the clipping. A negative value is a right offset. |
| `top` | The top offset of the clipping. A negative value is a bottom offset. |
| `width` | The width of the clipped canvas. A negative value (starts clipping from the right offset and goes to the left). |
| `height` | The height of the clipped canvas. A negative value (starts clipping from the bottom offset and goes to the top). |

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck.from(image).clip(128, -512, '', 256).canvas;
```

---

`.prototype.crop(x = 0, y = 0, w = 'same', h = 'same')`

Positions and crops the canvas to the given size.

| argument | description |
| ---: | :--- |
| `x` | The left offset of the cropping. A negative value is a right offset. |
| `y` | The top offset of the cropping. A negative value is a bottom offset. |
| `w` | The width of the cropped canvas. ??? |
| `h` | The height of the cropped canvas. ??? |

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck.from(image).crop(128, -512, '', 256).canvas;
```

---

`.prototype.clipAlign(w = 'same', h = 'same', align = 'center')`

Aligns and clips the canvas to the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the clipped canvas. |
| `h` | The height of the clipped canvas. |
| `align` | The alignment of the clipping. Possible values are `'top left'`, `'top'`, `'top right'`, `'left'`, `'center'`, `'right'`, `'bottom left'`, `'bottom'` and `'bottom right'`. The order of words does not matter. |

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck.from(image).clipAlign(128, 256, 'right top').canvas;
```

---

`.prototype.cropAlign(w = 'same', h = 'same', align = 'center')`

Aligns and crops the canvas to the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the cropped canvas. |
| `h` | The height of the cropped canvas. |
| `align` | The alignment of the cropping. Possible values are `'top left'`, `'top'`, `'top right'`, `'left'`, `'center'`, `'right'`, `'bottom left'`, `'bottom'` and `'bottom right'`. The order of words does not matter. |

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck.from(image).cropAlign(256, 128, 'left bottom').canvas;
```

---

`.prototype.scale(factor, smoothing = 2)`

Resizes the canvas proportionally by the given factor.

| argument | description |
| ---: | :--- |
| `factor` | The scale factor. If the value is greater than 1, the canvas is an enlargement. If the value is between 0 and 1, the canvas is a reduction. |
| `smoothing` | The smoothing factor. The value must be is greater than or equal to 1. 1 means no smoothing. |

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let instance = PaperDuck.from(image);
let enlargedCanvas = instance.scale(3).canvas;
let reducedCanvas = instance.scale(1/3).canvas;
```
---

`.prototype.scaleMin(width, height, smoothing = 2)`

---

`.prototype.scaleMax(width, height, smoothing = 2)`

---

`.prototype.clipScale(width, height, align = 'center', smoothing = 2)`

*alias* `contain`

---

`.prototype.cropScale(width, height, align = 'center', smoothing = 2)`

*alias* `cover`

---

`.prototype.flip()`

Mirrors the canvas vertically.

---

`.prototype.flop()`

Mirrors the canvas horizontally.

---

`.prototype.rotate90()`

Rotates the canvas by 90 degrees clockwise.

---

`.prototype.rotate180()`

Rotates the canvas by 180 degrees.

---

`.prototype.rotate270()`

Rotates the canvas by 90 degrees counterclockwise.

---

`.prototype.drawForeground(foreground, align = 'center')`

Draws an image before the canvas.

| argument | description |
| ---: | :--- |
| `foreground` | An instance of `PaperDuck` to draw before. |
| `align` | The alignment of the drawing. |

---

`.prototype.drawBackground(background, align = 'center')`

Draws an image behind the canvas.

| argument | description |
| ---: | :--- |
| `background` | An instance of `PaperDuck` to draw behind. |
| `align` | The alignment of the drawing. |

---

`.prototype.toDataURL(...args)`

Returns a data URL containing a representation of the canvas.

| argument | description |
| ---: | :--- |
| `args` | Any number of arguments to be passed to the function [`.toDataURL()`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL) of the canvas element. |

```javascript
let dataURL = PaperDuck.from(image)
  .cropAlign(256, 256)
  .rotate180()
  .toDataURL('canvas/jpeg', 1/2);
// => data:canvas/jpeg;base64,...
```

---

`.prototype.toImage(...args)`

| argument | description |
| ---: | :--- |
| `args` | Any number of arguments to be passed to the function [`.toDataURL()`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL) of the canvas element. |

```javascript
let canvas = PaperDuck(canvas)
  .cropAlign(256, 256)
  .rotate180()
  .toImage();
canvas.style.border = '1px solid BlueViolet';
document.body.appendChild(canvas);
```
