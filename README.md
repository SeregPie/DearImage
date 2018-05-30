# PaperDuck

Manipulates canvas in the browser via native functions of a 2D rendering context.

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
| `width` | The width of the resized canvas. If the value is undefined, the value will be set proportionally to the height. |
| `height` | The height of the resized canvas. If the value is undefined, the value will be set proportionally to the width. |
| `smoothing` | The smoothing factor. |

```javascript
let instance = PaperDuck.from(source).resize(undefined, 512, 2.5);
```

---

`.prototype.crop(left = 0, top = 0, width, height)`

Positions and crops the canvas to the given size.

| argument | description |
| ---: | :--- |
| `left` | The left offset of the clipping. A negative value is a right offset. |
| `top` | The top offset of the clipping. A negative value is a bottom offset. |
| `width` | The width of the clipped canvas. A negative value reverses the direction. If the value is undefined, the value will be set to the width of the canvas. |
| `height` | The height of the clipped canvas. A negative value reverses the direction. If the value is undefined, the value will be set to the height of the canvas. |

```javascript
let instance = PaperDuck.from(source).crop(128, -512, undefined, 256);
```

---

`.prototype.cropAlign(width, height, align = 'center center')`

Aligns and crops the canvas to the given size.

| argument | description |
| ---: | :--- |
| `width` | The width of the cropped canvas. If the value is undefined, the value will be set to the width of the canvas. |
| `height` | The height of the cropped canvas. If the value is undefined, the value will be set to the height of the canvas. |
| `align` | The alignment of the cropping. Possible values are `'left top'`, `'left center'`, `'left bottom'`, `'right top'`, `'right center'`, `'right bottom'`, `'center top'`, `'center center'` and `'center bottom'`. |

```javascript
let instance = PaperDuck.from(source).cropAlign(256, 128, 'left bottom');
```

---

`.prototype.scale(factor, smoothing)`

Resizes the canvas proportionally by the given factor.

| argument | description |
| ---: | :--- |
| `factor` | The scale factor. If the value is greater than 1, the scale is an enlargement. If the value is less than 1, the scale is a reduction. |
| `smoothing` | The smoothing factor. |

```javascript
let instance = PaperDuck.from(source);
let enlargedCanvas = instance.scale(3).canvas;
let reducedCanvas = instance.scale(1/3).canvas;
```
---

`.prototype.scaleMin(width, height, smoothing)`

Scales the canvas proportionally to the minimum of the given size.

| argument | description |
| ---: | :--- |
| `width` | The minimum width of the scaled canvas. If the value is undefined, the value will be set to the width of the canvas. |
| `height` | The minimum height of the scaled canvas. If the value is undefined, the value will be set to the height of the canvas. |
| `smoothing` | The smoothing factor. |

---

`.prototype.scaleMax(width, height, smoothing)`

Scales the canvas proportionally to the maximum of the given size.

| argument | description |
| ---: | :--- |
| `width` | The maximum width of the scaled canvas. If the value is undefined, the value will be set to the width of the canvas. |
| `height` | The maximum height of the scaled canvas. If the value is undefined, the value will be set to the height of the canvas. |
| `smoothing` | The smoothing factor. |

---

`.prototype.cropMin(width, height, align, smoothing)`

*alias* `contain`

A shortcut for `this.scaleMax(width, height, smoothing).cropAlign(width, height, align)`.

---

`.prototype.cropMax(width, height, align, smoothing)`

*alias* `cover`

A shortcut for `this.scaleMin(width, height, smoothing).cropAlign(width, height, align)`.

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

A shortcut for `this.canvas.toDataURL(...args)`.

---

`.prototype.toImage(...args)`

Creates an image with the content from `.toDataURL()`.

```javascript
let image = PaperDuck.from(source).cover(64, 64).rotate180().toImage('image/jpeg', 1/2);
image.style.border = '1px solid BlueViolet';
document.body.appendChild(image);
```
