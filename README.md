# PaperDuck

`PaperDuck(image)`

Creates a new instance of PaperDuck.

| argument | description |
| ---: | :--- |
| `image` | An element to draw into the context. The value can be any canvas image source, such as an HTMLImageElement, an HTMLVideoElement, an HTMLCanvasElement or an ImageBitmap. |

## dependencies

*no dependencies*

## functions

---

`.load(url, callback)`

```javascript
PaperDuck.load('/img/tree.jpg', instance => {
  let canvas = instance.resize(200, '').toCanvas();
  document.getElementById('trees').appendChild(canvas);
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

`.fn.resize(w = 'auto', h = 'auto', smoothing = 1/2)`

Resizes the image to the given size.

| argument | description |
| ---: | :--- |
| `w` | Th width of the resized image. If the value is not a number, then the width is resized proportionally to the height. |
| `h` | The height of the resized image. If the value is not a number, then the height is resized proportionally to the width. |
| `smoothing` | The smoothing factor. The value must be a float between 0 (inclusive) and 1 (exclusive). 0 means no smoothing. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).resize('', 512).toCanvas();
```

---

`.fn.crop(x = 0, y = 0, w = ∞, h = ∞)`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.cropAlign(w = ∞, h = ∞, align = 'center')`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.scale(factor, smoothing = 1/2)`

Resizes the image proportionally by the given factor.

| argument | description |
| ---: | :--- |
| `factor` | The scale factor. |
| `smoothing` | The smoothing factor. The value must be a float between 0 (inclusive) and 1 (exclusive). 0 means no smoothing. |

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

```javascript
let canvas = PaperDuck(image).scale(4).toCanvas();
```

---

`.fn.flip()`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.flop()`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.rotate90()`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.rotate180()`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.rotate270()`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.toImage(...args)`

---

`.fn.toCanvas()`

---

`.fn.toContext()`

---

`.fn.toDataURL(...args)`

---
