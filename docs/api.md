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

- `sex: "female" | "male" | "unknown"`
    - Defines shape of `Pedigree`
- `x: number`
    - `Pedigree` position on x-axis
- `y: number`
    - `Pedigree` position on y-axis

**Example usage:**

```js
const UnknownPedigree = chart.create("unknown", 100, 200)
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



## Legend