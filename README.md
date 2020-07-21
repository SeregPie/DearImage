# DearImage

A class that represents a graphical image.

## setup

### npm

```shell
npm i dear-image
```

---

Install optionally to support Node.

```shell
npm i canvas
```

### ES module

```javascript
import DearImage from 'dear-image';
```

### Node

```javascript
let DearImage = require('dear-image');
```

### browser

```html
<script src="https://unpkg.com/dear-image"></script>
```

The module is globally available as `DearImage`.

## members

### static methods

`.isDearImage(value)`

Determines whether the passed value is an instance of `DearImage`.

| argument | description |
| ---: | :--- |
| `value` | The value to be checked. |

Returns `true` if the passed value is an instance of `DearImage`, `false` otherwise.

---

`.from(value)`

Creates a `DearImage` instance from the given value.

| argument | description |
| ---: | :--- |
| `value` | The value to create from. Supported value types are [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData), [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement), [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas), [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) and `DearImage`. |

Returns the created `DearImage` instance.

```javascript
let element = document.getElementById('my-image');
let image = DearImage.from(element);
document.body.appendChild(image.toHTMLCanvasElement());
```

---

`.fromExcept(value)`

Creates a `DearImage` instance from the given value if it's not one.

| argument | description |
| ---: | :--- |
| `value` | The value to create from. |

Returns the same or created `DearImage` instance.

```javascript
let element = document.getElementById('my-image');
let image = DearImage.fromExcept(element);
let otherImage = DearImage.fromExcept(image);
console.log(otherImage === image); // => true
```

---

`.loadFrom(value)`

Asynchronously loads a `DearImage` instance from the given value.

| argument | description |
| ---: | :--- |
| `value` | The value to load from. Supported value types are `String`, [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL), [`Buffer`](https://nodejs.org/api/buffer.html), [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob), [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) and everything the function `.from` supports. |

Returns a promise that resolves to the created `DearImage` instance.

```javascript
let url = '/path/to/image.jpg';
let image = await DearImage.loadFrom(url);
document.body.appendChild(image.toHTMLCanvasElement());
```

---

`.loadFromExcept(value)`

Asynchronously loads a `DearImage` instance from the given value if it's not one.

| argument | description |
| ---: | :--- |
| `value` | The value to load from. |

Returns a promise that resolves to the same or created `DearImage` instance.

```javascript
let url = '/path/to/image.jpg';
let image = await DearImage.loadFrom(url);
let otherImage = await DearImage.loadFromExcept(image);
console.log(otherImage === image); // => true
```

---

`.blank(sizeX = 0, sizeY = 0)`

Creates a `DearImage` instance without content.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the image. |
| `sizeY` | A number as the height of the image. |

Returns the created `DearImage` instance.

---

`.solid(fill = 'rgba(0,0,0,0)', sizeX = 0, sizeY = 0)`

Creates a `DearImage` instance with filled content.

| argument | description |
| ---: | :--- |
| `fill` | A string as the fill color. |
| `sizeX` | A number as the width of the image. |
| `sizeY` | A number as the height of the image. |

Returns the created `DearImage` instance.

---

```
.loadFontFace(fontFace = {
  family: 'sans-serif',
  style: 'normal',
  variant: 'normal',
  weight: 'normal',
}, source)
```

| argument | description |
| ---: | :--- |
| `fontFace` | Either a string as the font family or an object with the font face options. |
| `fontFace.family` | A string as the font family. |
| `fontFace.style` | A string as the font style. |
| `fontFace.variant` | A string as the font variant. |
| `fontFace.weight` | A number or a string as the font weight. |
| `source` | A string as the source path to load from. |

Returns a promise.

---

```
.measureText(text, font = {
  family: 'sans-serif',
  size: 10,
  style: 'normal',
  variant: 'normal',
  weight: 'normal',
})
```

Creates a [`TextMetrics`](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics) instance representing the dimensions of the drawn text.

| argument | description |
| ---: | :--- |
| `text` | A string as the text. |
| `font.family` | A string as the font family. |
| `font.size` | A number as the font size. |
| `font.style` | A string as the font style. |
| `font.variant` | A string as the font variant. |
| `font.weight` | A number or a string as the font weight. |

Returns the created `TextMetrics` instance.

---

```
.text(text, options = {
  fill: '#000',
  font: {
    family: 'sans-serif',
    size: 10,
    style: 'normal',
    variant: 'normal',
    weight: 'normal',
  },
  padding: 0.28,
})
```

Creates a `DearImage` instance with the drawn text.

| argument | description |
| ---: | :--- |
| `text` | A string as the text. |
| `options.fill` | A string as the fill color. |
| `options.font.family` | A string as the font family. |
| `options.font.size` | A string as the font size. |
| `options.font.style` | A string as the font style. |
| `options.font.variant` | A string as the font variant. |
| `options.font.weight` | A number or a string as the font weight. |
| `options.padding` | A number as the space around the text. The value is relative to the font size. |

Returns the created `DearImage` instance.

### properties

`.sizeX`

The size of the image along the x-axis.

```javascript
let image = DearImage.blank(300, 150);
console.log(image.sizeX); // => 300
```

---

`.sizeY`

The size of the image along the y-axis.

```javascript
let image = DearImage.blank(300, 150);
console.log(image.sizeY); // => 150
```

### methods

`.resize(sizeX = this.sizeX, sizeY = this.sizeY)`

Changes the size of the image.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the new width of the image. |
| `sizeY` | A number as the new height of the image. |

Returns the created `DearImage` instance.

![](./examples/resize.png)

---

`.resizeX(size = this.sizeY, proportionally = false)`

Changes the width of the image.

| argument | description |
| ---: | :--- |
| `size` | A number as the new width of the image. |
| `proportionally` | If `true`, the aspect ratio of the image is preserved. |

Returns the created `DearImage` instance.

![](./examples/resizeX.png)

---

`.resizeY(size = this.sizeX, proportionally = false)`

Changes the height of the image.

| argument | description |
| ---: | :--- |
| `size` | A number as the new height of the image. |
| `proportionally` | If `true`, the aspect ratio of the image is preserved. |

Returns the created `DearImage` instance.

![](./examples/resizeY.png)

---

`.crop(startX = 0, startY = 0, sizeX = this.sizeX, sizeY = this.sizeY)`

Selects an area from the image.

| argument | description |
| ---: | :--- |
| `startX` | A number as the horizontal offset of the area. A positive value indicates the offset from the left of the image. A negative value indicates the offset from the right of the image. |
| `startY` | A number as the vertical offset of the area. A positive value indicates the offset from the top of the image. A negative value indicates the offset from the bottom of the image. |
| `sizeX` | A number as the width of the area. A positive value selects an area from left to right. A negative value selects an area from right to left. |
| `sizeY` | A number as the height of the area. A positive value selects an area from top to bottom. A negative value selects an area from bottom to top. |

Returns the created `DearImage` instance.

![](./examples/crop.png)

---

`.reframe(sizeX = this.sizeX, sizeY = this.sizeY, alignmentX = 'center', alignmentY = 'center')`

Aligns the image inside an area.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |
| `alignmentX` | A number as the horizontal alignment of the image. Possible values are `'start'`, `'center'` and `'end'`. |
| `alignmentY` | A number as the vertical alignment of the image. Possible values are `'start'`, `'center'` and `'end'`. |

Returns the created `DearImage` instance.

![](./examples/reframe.png)
---

`.rescale(scalingX = 1, scalingY = 1)`

Changes the size of the image factorially.

| argument | description |
| ---: | :--- |
| `scalingX` | A number as the scaling factor for the width. |
| `scalingY` | A number as the scaling factor for the height. |

Returns the created `DearImage` instance.

![](./examples/rescale.png)

---

`.scale(scaling = 1)`

Changes the size of the image factorially. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `scaling` | A number as the scaling factor. |

Returns the created `DearImage` instance.

![](./examples/scale.png)

---

`.scaleIn(sizeX = this.sizeX, sizeY = this.sizeY)`

Scales the image inside an area. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |

Returns the created `DearImage` instance.

![](./examples/scaleIn.png)

---

`.scaleOut(sizeX = this.sizeX, sizeY = this.sizeY)`

Scales the image outside an area. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |

Returns the created `DearImage` instance.

![](./examples/scaleOut.png)

---

`.scaleDownIn(sizeX = this.sizeX, sizeY = this.sizeY)`

If necessary, scales the image down inside an area. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |

Returns the created `DearImage` instance.

---

`.scaleDownOut(sizeX = this.sizeX, sizeY = this.sizeY)`

If necessary, scales the image down outside an area. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |

Returns the created `DearImage` instance.

---

`.scaleUpIn(sizeX = this.sizeX, sizeY = this.sizeY)`

If necessary, scales the image up inside an area. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |

Returns the created `DearImage` instance.

---

`.scaleUpOut(sizeX = this.sizeX, sizeY = this.sizeY)`

If necessary, scales the image up outside an area. The aspect ratio of the image is preserved.

| argument | description |
| ---: | :--- |
| `sizeX` | A number as the width of the area. |
| `sizeY` | A number as the height of the area. |

Returns the created `DearImage` instance.

---

`.flipX()`

Flips the image horizontally.

Returns the created `DearImage` instance.

![](./examples/flipX.png)


---

`.flipY()`

Flips the image vertically.

Returns the created `DearImage` instance.

![](./examples/flipY.png)

---

`.toDataURL(format, quality)`

Creates a [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) string representing the content.

Returns the created data URL string.

---

`.toImageData()`

Creates an [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) object representing the content.

Returns the created `ImageData` object.


---

`.toBlob(format, quality)`

*browser only*

Creates a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) instance representing the content.

Returns the created `Blob` instance.

---

`.toBuffer(format, quality)`

*node only*

Creates a [`Buffer`](https://nodejs.org/api/buffer.html) instance representing the content.

Returns the created `Buffer` instance.

---

`.toHTMLCanvasElement()`

*browser only*

Creates a [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) instance representing the content.

Returns the created `HTMLCanvasElement` instance.

---

`.toOffscreenCanvas()`

*browser only*

Creates an [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) instance representing the content.

Returns the created `OffscreenCanvas` instance.

---

`.toHTMLImageElement(format, quality)`

*browser only*

Creates a [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) instance representing the content.

Returns the created `HTMLImageElement` instance.

```javascript
let image = DearImage.from(source);
let element = image.toHTMLImageElement('image/jpeg', 0.75);
element.style.border = '1px solid BlueViolet';
document.body.appendChild(element);
```

---

`.saveToFileSystem(target, format, quality)`

*node only*

Asynchronously saves the content to the file system.

| argument | description |
| ---: | :--- |
| `target` | A string as the target path to save to. |

Returns a promise.

```javascript
let image = DearImage.from(source);
await image.saveToFileSystem('/path/to/image.jpg', 'image/jpeg', 0.75);
```

### utils

`.isURL(value)`

Determines whether the passed value is an instance of [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) or an URL string.

| argument | description |
| ---: | :--- |
| `value` | The value to be checked. |

Returns `true` if the passed value is an instance of `URL` or an URL string, `false` otherwise.

```javascript
console.log(DearImage.utils.isURL('https://github.com/SeregPie/DearImage'));
// => true

console.log(DearImage.utils.isURL(new URL('/SeregPie/DearImage', 'https://github.com')));
// => true

console.log(DearImage.utils.isURL('/SeregPie/DearImage')));
// => true in browser and false in node
```

---

`.isDataURL(value)`

Determines whether the passed value is a [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) string.

| argument | description |
| ---: | :--- |
| `value` | The value to be checked. |

Returns `true` if the passed value is a data URL string, `false` otherwise.

```javascript
console.log(DearImage.utils.isDataURL('data:image/png;base64,R0lGODdh'));
// => true

console.log(DearImage.utils.isDataURL('data:,')));
// => true

console.log(DearImage.utils.isDataURL('data:image/png;base64')));
// => false
```
