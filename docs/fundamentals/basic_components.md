---
sidebar_position: 3
title: "Basic pedigrees"
---

After successful project setup in [previous section](https://docusaurus.io/), you are finally able to draw some shapes.
Meet with the basic sex shapes below:

<img
  src={require('../../static/img/basic_shapes.png').default}
  alt="Example banner"
/>

## Create pedigree

### `create(sex, x, y)`
Method you call on the PedigreeChart instance, it returns pedigree object so you can save it in variable. It takes following params. 

- `sex: "male" | "female" | "unknown"` 
  - Defines pedigree shape
- `x: number`
  - Location on chart x-axis
- `y: number`
  - Location on chart y-axis


## Events
Every pedigree can emit events. You can use them for improving interactions with user. To use events 
