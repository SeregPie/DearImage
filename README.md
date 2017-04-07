# PaperDuck

`PaperDuck(image)`

Creates a new instance of PaperDuck.

| argument | description |
| ---: | :--- |
| `image` | An element to draw into the context. The value can be any canvas image source, such as an HTMLImageElement, an HTMLVideoElement, an HTMLCanvasElement or an ImageBitmap. |

---

`.load(url, callback)`

---

`.empty(w = 0, h = 0)`

---

`.fn.getWidth()`

Returns width of the image.

---

`.fn.getHeight()`

Returns height of the image.

---

`.fn.resize(w = 'auto', h = 'auto', smoothing = 1/2)`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.crop(x = 0, y = 0, w = ∞, h = ∞)`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.cropAlign(w = ∞, h = ∞, align = 'center')`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.scale(factor, smoothing = 1/2)`

Returns a new instance of PaperDuck. Can also return the same instance, if no changes were made.

---

`.fn.flip()`

---

`.fn.flop()`

---

`.fn.rotate90()`

---

`.fn.rotate180()`

---

`.fn.rotate270()`

---

`.fn.toImage()`

---

`.fn.toCanvas()`

---

`.fn.toContext()`

---

`.fn.toDataURL()`

---
