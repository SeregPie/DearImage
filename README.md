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

Creates an instance of `PaperDuck` from the given value.

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

Loads an instance of `PaperDuck` from the given value.

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

Creates an instance of `PaperDuck` with a blank transparent canvas of the given size.

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
let canvas = PaperDuck(source).resize('', 512, 5/2).toCanvas();
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
let canvas = PaperDuck(source).clip(128, -512, '', 256).toCanvas();
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
let canvas = PaperDuck(source).crop(128, -512, '', 256).toCanvas();
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
let canvas = PaperDuck(source).clipAlign(128, 256, 'right top').toCanvas();
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
let canvas = PaperDuck(source).cropAlign(256, 128, 'left bottom').toCanvas();
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
let canvas = document.getElementById('demo');
let instance = PaperDuck(canvas);
let enlargedCanvas = instance.scale(3).toCanvas();
let reducedCanvas = instance.scale(1/3).toCanvas();
```
---

`.prototype.scaleMin(w = 'same', h = 'same', smoothing = 2)`

---

`.prototype.scaleMax(w = 'same', h = 'same', smoothing = 2)`

---

`.prototype.clipScale(w = 'same', h = 'same', align = 'center', smoothing = 2)`

---

`.prototype.cropScale(w = 'same', h = 'same', align = 'center', smoothing = 2)`

---

`.prototype.flip()`

Flips the canvas vertically.

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck(source).flip().toCanvas();
```

---

`.prototype.flop()`

Flops the canvas horizontally.

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck(source).flop().toCanvas();
```

---

`.prototype.rotate90()`

Rotates the canvas by 90 degrees clockwise.

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck(source).rotate90().toCanvas();
```

---

`.prototype.rotate180()`

Rotates the canvas by 180 degrees.

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck(source).rotate180().toCanvas();
```

---

`.prototype.rotate270()`

Rotates the canvas by 90 degrees counterclockwise.

Returns a new instance of `PaperDuck`. Can also return the same instance if no changes were made.

```javascript
let canvas = PaperDuck(source).rotate270().toCanvas();
```

---

`.prototype.drawForeground(canvas, align = 'center')`

---

`.prototype.drawBackground(canvas, align = 'center')`

---

`.prototype.toCanvas()`

```javascript
let canvas = PaperDuck(source)
  .cropAlign(256, 256)
  .rotate180()
  .toCanvas();
document.body.appendChild(canvas);
```

---

`.prototype.toContext()`

Returns a 2D rendering context for a canvas.

```javascript
let instance = PaperDuck(source);
// ...
let ctx = instance.toContext();
ctx.font = '32px serif';
ctx.fillText('Carpe Diem', 32, 64);
instance = PaperDuck(ctx);
```

---

`.prototype.toDataURL(...args)`

Returns a data URL containing a representation of the canvas.

| argument | description |
| ---: | :--- |
| `args` | Any number of arguments to be passed to the function [`.toDataURL()`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL) of the canvas element. |

```javascript
let dataURL = PaperDuck(source)
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

---

`.blankContext(w = 0, h = 0)`

Creates a new instance of `CanvasRenderingContext2D` of the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the context. |
| `h` | The height of the context. |

Returns the created instance.
