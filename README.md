# PaperDuck

Manipulates images in the browser via native canvas functions.

Try out the [demo](https://seregpie.github.io/PaperDuck/)!

## dependencies

*no dependencies*

## members

`PaperDuck(source)`

Creates a new instance of PaperDuck.

| argument | description |
| ---: | :--- |
| `source` | An element to draw into the context. The value can be any canvas image source, such as an HTMLImageElement, an HTMLVideoElement, an HTMLCanvasElement or an ImageBitmap. |

```javascript
let canvas = document.getElementById('demo');
let instance = PaperDuck(canvas);
```

---

`.constructor(context)`

Creates a new instance of PaperDuck.

| argument | description |
| ---: | :--- |
| `context` | ... |

```javascript
let canvas = document.getElementById('demo');
var context = canvas.getContext('2d');
let instance = new PaperDuck(context);
```

---

`.load(source)`

| argument | description |
| ---: | :--- |
| `source` | The source to load from. In addition to the type, that is accepted by `PaperDuck()`, the value can also be a string, an array-like object or an instance of `HTMLImageElement`, `HTMLInputElement`, `File` or `FileReader`. |

Returns a promise that is resolved once the image has been loaded.

```javascript
PaperDuck.load('/img/tree.jpg').then(instance => {
  let canvas = instance.resize(200, '').toCanvas();
  document.body.appendChild(canvas);
});
```

```javascript
object.addEventListener('change', function() {
  PaperDuck.load(this)
    .then(instance => {
      let canvas = instance.resize(200, '').toCanvas();
      document.body.appendChild(canvas);
    })
    .catch(reason => {
      alert('Ups!'):
    });
});
```

---

`.blank(w = 0, h = 0)`

Creates a PaperDuck instance with a blank transparent image of the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the image. |
| `h` | The height of the image. |

Returns a new instance of PaperDuck.

---

`.fn.getWidth()`

Returns the width of the image.

```javascript
let instance = PaperDuck.blank(256, 128);
console.log(instance.getWidth()); // => 256
```

---

`.fn.getHeight()`

Returns the height of the image.

```javascript
let instance = PaperDuck.blank(256, 128);
console.log(instance.getHeight()); // => 128
```

---

`.fn.resize(w = 'auto', h = 'auto', smoothing = 2)`

Resizes the image to the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the resized image. If the value is not a number, the width scales proportionally to the height. |
| `h` | The height of the resized image. If the value is not a number, the height scales proportionally to the width. |
| `smoothing` | The smoothing factor. The value must be is greater than or equal to 1. 1 means no smoothing. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).resize('', 512, 3.3).toCanvas();
```

---

`.fn.crop(x = 0, y = 0, w = ∞, h = ∞)`

Positions and crops the image to the given size.

| argument | description |
| ---: | :--- |
| `x` | The left offset of the cropping. A negative value is a right offset. |
| `y` | The top offset of the cropping. A negative value is a bottom offset. |
| `w` | The width of the cropped image. A negative value starts cropping from the right offset and goes to the left. |
| `h` | The height of the cropped image. A negative value starts cropping from the bottom offset and goes to the top. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).crop(128, -512, '', 256).toCanvas();
```

---

`.fn.cropAlign(w = ∞, h = ∞, align = 'center')`

Aligns and crops the image to the given size.

| argument | description |
| ---: | :--- |
| `w` | The width of the cropped image. |
| `h` | The height of the cropped image. |
| `align` | The alignment of the cropping. Possible values are `'top left'`, `'top center'`, `'top right'`, `'center left'`, `'center'`, `'center right'`, `'bottom left'`, `'bottom center'` and `'bottom right'`. The order of words does not matter. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).cropAlign(256, 128, 'top center').toCanvas();
```

---

`.fn.scale(factor, smoothing = 2)`

Resizes the image proportionally by the given factor.

| argument | description |
| ---: | :--- |
| `factor` | The scale factor. If the value is greater than 1, the image is an enlargement. If the value is between 0 and 1, the image is a reduction. |
| `smoothing` | The smoothing factor. The value must be is greater than or equal to 1. 1 means no smoothing. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).scale(2.5).toCanvas();
```

---

`.fn.flip()`

Flips the image vertically.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).flip().toCanvas();
```

---

`.fn.flop()`

Flops the image horizontally.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).flop().toCanvas();
```

---

`.fn.rotate90()`

Rotates the image by 90 degrees clockwise.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).rotate90().toCanvas();
```

---

`.fn.rotate180()`

Rotates the image by 180 degrees.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).rotate180().toCanvas();
```

---

`.fn.rotate270()`

Rotates the image by 270 degrees clockwise.

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(source).rotate270().toCanvas();
```

---

`.fn.toCanvas()`

```javascript
let canvas = PaperDuck(source)
  .cropAlign(256, 256)
  .rotate180()
  .toCanvas();
document.body.appendChild(canvas);
```

---

`.fn.toContext()`

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

`.fn.toDataURL(...args)`

Returns a data URL containing a representation of the image.

| argument | description |
| ---: | :--- |
| `args` | Any number of arguments to be passed to the function [`.toDataURL()`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL) of the canvas element. |

```javascript
let dataURL = PaperDuck(source)
  .cropAlign(256, 256)
  .rotate180()
  .toDataURL('image/jpeg', 0.5);
// => data:image/jpeg;base64,...
```

---

`.fn.toImage(...args)`

| argument | description |
| ---: | :--- |
| `args` | Any number of arguments to be passed to the function [`.toDataURL()`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toDataURL) of the canvas element. |

```javascript
let image = PaperDuck(canvas)
  .cropAlign(256, 256)
  .rotate180()
  .toImage();
image.style.border = '1px solid BlueViolet';
document.body.appendChild(image);
```
