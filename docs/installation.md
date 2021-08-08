---
sidebar_position: 2
---

# Installation

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Assuming you have **[node.js](https://nodejs.org/en/)** installed, you can go with npm.

```shell
npm install pedigree-chart
```

## Adding chart to your project

To start using library in your project simply use:  
`import { PedigreeChart } from "pedigree-chart";`

Then call `setDiagram` method to inform library where your diagram will be living. 

Usage:
<Tabs
  defaultValue="react"
  values={[
    { label: 'React.js', value: 'react', },
    { label: 'Vue.js', value: 'vue', },
  ]
}>
<TabItem value="react">

```js
import { useEffect } from "react";
import { PedigreeChart } from "pedigree-chart";

function App() {
  let chart = new PedigreeChart();
  useEffect(() => {
    chart.setDiagram("chart");
  });
  return <div id="chart"></div>;
}

export default App;
```

</TabItem>
<TabItem value="vue">

```js
<template>
  <div id="chart"></div>
</template>

<script>
import PedigreeChart from "pedigree-chart";

export default {
  name: "App",
  data: function() {
    return { chart: null };
  },
  mounted: function() {
    this.chart = new PedigreeChart();
    this.chart.setDiagram('chart');
  },
};
</script>
```

</TabItem>
</Tabs>

### `PedigreeChart`
the instance of `PedigreeChart` class is a place where you can access all methods to control your chart or override its default behaviour.

### `setDiagram`
method to call after `PedigreeChart` is initied. It takes `id: string` param, which is the id of html tag, where you want to put your chart.

:::info

Make sure you will call `setDiagram` method when all DOM elements are accessible!

:::

## What's next?

- Check available methods. [Go to API](https://docusaurus.io/pedigree-chart-docs/api)
- Check the demo app. [Go to DEMO](https://docusaurus.io/)