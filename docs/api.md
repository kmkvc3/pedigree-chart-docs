# API

Set of all available methods and thier short descriptions

## PedigreeChart
Main class necessary to init pedigree chart.
### `setDiagram`
Method for injecting chart functionalities into canvas element.

**Params**

- `diagramID: string`

Example usage:

```js
import PedigreeChart from "pedigree-chart"

const chart = new PedigreeChart()
chart.setDiagram("pedigree-editor")
```

### `setConfig`

Update chart configuration

**Params**

- `configObject`

**Config object props**
- `width = 1200` &nbsp `optional`
- `height = 600` &nbsp `optional`
- `dragEnabled = false` &nbsp `optional`
    - Defines if user can drag chart elements
- `panEnabled = false` &nbsp `optional`
    - Defines if user can pan the chart
- `scaleType: "none" | "scroll" | "pointer" = "none"` &nbsp `optional`
    - "none" - diagram zoom disabled
    - "scroll" - diagram zoom based on user scroll
    - "pointer" - diagram zoom based on user scroll and mouse position
- `minScale = 0.5` &nbsp `optional`
- `maxScale = 2.5` &nbsp `optional`
- `font = 16px Arial` &nbsp `optional`
    - Font styling for labels

**Example usage:**

```js
chart.setConfig({
    width: 1000,
    heigh: 800,
    dragEnabled = true
})
```

### `create`

Returns a new instance of `Pedigree`.

**Params**

- `shape: "female" | "male" | "unknown" | "male-miscarriage" | "female-miscarriage" | "unknown-miscarriage"`
    - Defines shape of `Pedigree`
- `x: number`
    - `Pedigree` position on x-axis
- `y: number`
    - `Pedigree` position on y-axis

**Example usage:**

```js
const UnknownPedigree = chart.create("unknown", 100, 200)
```

:::info

disease-shapes for "male-miscarriage" | "female-miscarriage" | "unknown-miscarriage" are unavailable.

:::

### `delete`

Removes `Pedigree` instance.

**Params**

- `id: number`
    - id of `Pedigree` instance that you want to remove

**Example usage:**

```js
chart.delete(3)
```

### `connect`

Create a specific line between two `Pedigree` instances.

**Params**

- `pedigreeA: Pedigree`
- `pedigreeB: Pedigree`
- `lineType: "partnership" | "separation" | "sibling" | "consanguineous"`

**Example usage:**

```js
const MalePedigree = chart.create("male", 100, 200)
const FemalePedigree = chart.create("female", 200, 200)

chart.connect(MalePedigree, FemalePedigree, "separation")
```

### `connectTwins`

Join twins together and create connection with parent.

**Params**

- `parent: Pedigree`
- `twinA: Pedigree`
- `twinB: Pedigree`
- `lineType: "identical" | "non-identical"`

**Example usage:**

```js
const Mom = chart.create("female", 200, 100)
const ChildA = chart.create("female", 200, 200)
const ChildB = chart.create("female", 300, 200)

chart.connectTwins(MalePedigree, FemalePedigree, "separation")
```

### `createLegend`

Creates new legend table.

**Params**

- `x: number`
    - `Legend` position on x-axis
- `y: number`
    - `Legend` position on y-axis

**Example usage:**

```js
const legendTable = chart.createLegend(200, 100)
```

Go to [Legend](https://docusaurus.io/) to check available methods.


### `on`

Adds custom event listeners on events emitted by chart.

**Params**

- `eventName: "pedigree-click"`
- `eventHandler: Function`

**Example usage:**

```js
chart.on("pedigree-click", (pedigree)=>{
    console.log(pedigree)
})
```

**Payloads**

For your custom event handler you can add a parameter, where pedigree instance will be passed.


## Pedigree

The basic component.

### `draw`

Force pedigree redrawing.

**Example usage:**

```js
const pedigree = chart.create("unknown", 100, 200)

pedigree.draw()
```

:::info

Use this method to force redrawing. You don't have to use it 
by default.

:::

### `getX`

Get the shape position on X-axis.

### `getY`

Get the shape position on Y-axis.

### `getMidX`

Get the middle of shape position on X-axis.

### `getMidY`

Get the middle of shape position on Y-axis.

### `setStorage`

Add data that you want to store in specific pedigree.

**Params**

- `storageObj`
    - Any key-value pair object

### `getStorage`

Returns data from pedigree storage

**Example usage:**

```js
const data = pedigree.getStorage()
```

### `setLabel`

Attach label to a pedigree.

**Params**

- `configObj`
    - Any key-value pair object

**Example usage:**

```js
pedigree.setLabel({
    id: "some-random-value",
    name: "Kamil"
})
```

### `addDiseaseShape`

Fill the pedigree with various shapes.

**Params**
- `shape: string`
- `color: string`
    - any **HEX** value

**Available shapes**
- `q1`
    - fill top-left quarter
- `q2`
    - fill top-right quarter
- `q3`
    - fill bottom-left quarter
- `q4`
    - fill bottom-right quarter
- `dot`
    - draw a dot in middle of shape
- `fill`
    - fill a whole shape

:::info

You can stack shapes to build more extraordinary shapes

:::

**Example usage:**

```js
pedigree.addDiseaseShape("q3", "#1f1f1f")
pedigree.addDiseaseShape("q4", "#1f1f1f")
```

### `clearShapes`

Remove all shapes.

**Example usage:**

```js
pedigree.clearShapes()
```

### `setPregnacy`

Displays a 'P' char in the middle of pedigree

**Params**
- `value: boolean = false`

**Example usage:**

```js
// Display pregnancy
pedigree.setPregnancy(true)

// Hide pregnancy
pedigree.setPregnancy(false)
```

### `setDeceased`

Displays a crossing line over the pedigree

**Params**
- `value: boolean = false`

**Example usage:**

```js
pedigree.setDeceased(true)
```

### `setProband`

**Params**
- `value: boolean = false`

**Example usage:**

```js
pedigree.setProband(true)
```

### `setMulitpleIndividuals`

Displays a number in middle of a pedigree

**Params**
- `value: boolean = false`
- `count: number = 0`

**Example usage:**

```js
pedigree.setMulitpleIndividuals(true, 5)
```


## Legend

Create description table with disease names and thier shapes

### `setPedigree`

Attach pedigree shape with its description.

**Params**

- `pedigree: Pedigree`
    - Pedigree shape and color that you want to save in the legend
- `description: string`
    - Description attached to pedigree shape

**Example usage:**

```js
legendTable.setPedigree(unknownPedigree, "disease 1")
```

### `removePedigree`

Remove `Pedigree` instance from legend and its label

**Params**

- `id: number`
    - id of `Pedigree` instance that you want to remove from legend

**Example usage:**

```js
legendTable.removePedigree(2)
```

### `setItemsPerRow`

Attach pedigree shape with its description.

**Params**

- `num: number`
    - Max items per row without overlapping

**Example usage:**

```js
legendTable.setItemsPerRow(3)
```