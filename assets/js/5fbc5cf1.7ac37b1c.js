(self.webpackChunkpedigree_chart_docs=self.webpackChunkpedigree_chart_docs||[]).push([[207],{1203:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var n=t(2122),l=t(9756),i=(t(7294),t(3905)),r=["components"],p={},o="API",d={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API",description:"Set of all available methods and thier short descriptions",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/pedigree-chart-docs/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/pedigree-chart-docs/installation"}},s=[{value:"PedigreeChart",id:"pedigreechart",children:[{value:"<code>setDiagram</code>",id:"setdiagram",children:[]},{value:"<code>setConfig</code>",id:"setconfig",children:[]},{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>create</code>",id:"create",children:[]},{value:"<code>delete</code>",id:"delete",children:[]},{value:"<code>replace</code>",id:"replace",children:[]},{value:"<code>connect</code>",id:"connect",children:[]},{value:"<code>connectTwins</code>",id:"connecttwins",children:[]},{value:"<code>getConnections</code>",id:"getconnections",children:[]},{value:"<code>getTwinsConnections</code>",id:"gettwinsconnections",children:[]},{value:"<code>createLegend</code>",id:"createlegend",children:[]},{value:"<code>on</code>",id:"on",children:[]}]},{value:"Pedigree",id:"pedigree",children:[{value:"<code>draw</code>",id:"draw",children:[]},{value:"<code>getX</code>",id:"getx",children:[]},{value:"<code>getY</code>",id:"gety",children:[]},{value:"<code>getRawX</code>",id:"getrawx",children:[]},{value:"<code>getRawY</code>",id:"getrawy",children:[]},{value:"<code>getMidX</code>",id:"getmidx",children:[]},{value:"<code>getMidY</code>",id:"getmidy",children:[]},{value:"<code>getScaledX</code>",id:"getscaledx",children:[]},{value:"<code>getScaledY</code>",id:"getscaledy",children:[]},{value:"<code>getScaledRawX</code>",id:"getscaledrawx",children:[]},{value:"<code>getScaledRawY</code>",id:"getscaledrawy",children:[]},{value:"<code>setStorage</code>",id:"setstorage",children:[]},{value:"<code>getStorage</code>",id:"getstorage",children:[]},{value:"<code>setLabel</code>",id:"setlabel",children:[]},{value:"<code>addDiseaseShape</code>",id:"adddiseaseshape",children:[]},{value:"<code>clearShapes</code>",id:"clearshapes",children:[]},{value:"<code>setPregnacy</code>",id:"setpregnacy",children:[]},{value:"<code>setDeceased</code>",id:"setdeceased",children:[]},{value:"<code>setProband</code>",id:"setproband",children:[]},{value:"<code>setMulitpleIndividuals</code>",id:"setmulitpleindividuals",children:[]}]},{value:"Legend",id:"legend",children:[{value:"<code>setPedigree</code>",id:"setpedigree",children:[]},{value:"<code>removePedigree</code>",id:"removepedigree",children:[]},{value:"<code>setItemsPerRow</code>",id:"setitemsperrow",children:[]}]}],m={toc:s};function k(e){var a=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("p",null,"Set of all available methods and thier short descriptions"),(0,i.kt)("h2",{id:"pedigreechart"},"PedigreeChart"),(0,i.kt)("p",null,"Main class necessary to init pedigree chart."),(0,i.kt)("h3",{id:"setdiagram"},(0,i.kt)("inlineCode",{parentName:"h3"},"setDiagram")),(0,i.kt)("p",null,"Method for injecting chart functionalities into canvas element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"diagramID: string"))),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import PedigreeChart from "pedigree-chart";\n\nconst chart = new PedigreeChart();\nchart.setDiagram("pedigree-editor");\n')),(0,i.kt)("h3",{id:"setconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"setConfig")),(0,i.kt)("p",null,"Update chart configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configObject"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Config object props")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width = 1200")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height = 600")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragEnabled = false")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines if user can drag chart elements"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"panEnabled = false")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines if user can pan the chart"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cursorPointer = false")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines if cursor should be pointer when hovering over the pedigree"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'scaleType: "none" | "scroll" | "pointer" = "none"')," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"none" - diagram zoom disabled'),(0,i.kt)("li",{parentName:"ul"},'"scroll" - diagram zoom based on user scroll'),(0,i.kt)("li",{parentName:"ul"},'"pointer" - diagram zoom based on user scroll and mouse position'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minScale = 0.5")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxScale = 2.5")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"font = 16px Arial")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Font styling for labels"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'backgroundColor = "#FFFFFF"'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.setConfig({\n    width: 1000,\n    heigh: 800,\n    dragEnabled = true\n})\n")),(0,i.kt)("h3",{id:"scale"},(0,i.kt)("inlineCode",{parentName:"h3"},"scale")),(0,i.kt)("p",null,"Scale the canvas by choosen scale."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scale: number = 0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Scale value, starts from 0."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"translateX: number = 0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set this value to translate the canvas on x-axis."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"translateY: number = 0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set this value to translate the canvas on y-axis.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.scale(0.25, 0, 0)\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use this method If you want to set initial scale of the diagram.\nIn the user interactions case, you can use the built-in feature of scaling in the setConfig method."))),(0,i.kt)("h3",{id:"create"},(0,i.kt)("inlineCode",{parentName:"h3"},"create")),(0,i.kt)("p",null,"Returns a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'shape: "female" | "male" | "unknown" | "male-miscarriage" | "female-miscarriage" | "unknown-miscarriage"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines shape of ",(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," position on x-axis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," position on y-axis")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const UnknownPedigree = chart.create("unknown", 100, 200);\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'disease-shapes for "male-miscarriage" | "female-miscarriage" | "unknown-miscarriage" are unavailable.'))),(0,i.kt)("h3",{id:"delete"},(0,i.kt)("inlineCode",{parentName:"h3"},"delete")),(0,i.kt)("p",null,"Removes ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree")," instance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"id of ",(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," instance that you want to remove")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.delete(3);\n")),(0,i.kt)("h3",{id:"replace"},(0,i.kt)("inlineCode",{parentName:"h3"},"replace")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree")," instance and creates connections."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id: number")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"id of ",(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," instance that you want to replace"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"newPedigree: Pedigree")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," instance")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const UnknownPedigree = chart.create("unknown", 100, 200);\n\nchart.replace(3, UnknownPedigree);\n')),(0,i.kt)("h3",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h3"},"connect")),(0,i.kt)("p",null,"Create a specific line between two ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree")," instances."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pedigreeA: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pedigreeB: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'lineType: "partnership" | "separation" | "sibling" | "consanguineous"'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const MalePedigree = chart.create("male", 100, 200);\nconst FemalePedigree = chart.create("female", 200, 200);\n\nchart.connect(MalePedigree, FemalePedigree, "separation");\n')),(0,i.kt)("h3",{id:"connecttwins"},(0,i.kt)("inlineCode",{parentName:"h3"},"connectTwins")),(0,i.kt)("p",null,"Join twins together and create connection with parent."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"twinA: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"twinB: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'lineType: "identical" | "non-identical"'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Mom = chart.create("female", 200, 100);\nconst ChildA = chart.create("female", 200, 200);\nconst ChildB = chart.create("female", 300, 200);\n\nchart.connectTwins(MalePedigree, FemalePedigree, "separation");\n')),(0,i.kt)("h3",{id:"getconnections"},(0,i.kt)("inlineCode",{parentName:"h3"},"getConnections")),(0,i.kt)("p",null,"Returns an array of connections for specified pedigree."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"id of pedigree")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const connections = chart.getConnections(2)\n")),(0,i.kt)("h3",{id:"gettwinsconnections"},(0,i.kt)("inlineCode",{parentName:"h3"},"getTwinsConnections")),(0,i.kt)("p",null,"Returns an array of twins connections for specified pedigree."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"id of pedigree")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const twinConnections = chart.getTwinsConnections(2)\n")),(0,i.kt)("h3",{id:"createlegend"},(0,i.kt)("inlineCode",{parentName:"h3"},"createLegend")),(0,i.kt)("p",null,"Creates new legend table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Legend")," position on x-axis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Legend")," position on y-axis")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const legendTable = chart.createLegend(200, 100);\n")),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Legend")," to check available methods."),(0,i.kt)("h3",{id:"on"},(0,i.kt)("inlineCode",{parentName:"h3"},"on")),(0,i.kt)("p",null,"Adds custom event listeners on events emitted by chart."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eventName: "pedigree-click | pedigree-drag | diagram-click"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventHandler: Function"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'chart.on("pedigree-click", (pedigree) => {\n  console.log(pedigree);\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Payloads")),(0,i.kt)("p",null,"For your custom event handler you can add a parameter, where pedigree instance will be passed."),(0,i.kt)("h2",{id:"pedigree"},"Pedigree"),(0,i.kt)("p",null,"The basic component."),(0,i.kt)("h3",{id:"draw"},(0,i.kt)("inlineCode",{parentName:"h3"},"draw")),(0,i.kt)("p",null,"Force pedigree redrawing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const pedigree = chart.create("unknown", 100, 200);\n\npedigree.draw();\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use this method to force redrawing. You don't have to use it\nby default."))),(0,i.kt)("h3",{id:"getx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getX")),(0,i.kt)("p",null,"Get the shape position on X-axis."),(0,i.kt)("h3",{id:"gety"},(0,i.kt)("inlineCode",{parentName:"h3"},"getY")),(0,i.kt)("p",null,"Get the shape position on Y-axis."),(0,i.kt)("h3",{id:"getrawx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getRawX")),(0,i.kt)("p",null,"Get the shape position on X-axis without camera offset."),(0,i.kt)("h3",{id:"getrawy"},(0,i.kt)("inlineCode",{parentName:"h3"},"getRawY")),(0,i.kt)("p",null,"Get the shape position on Y-axis without camera offset."),(0,i.kt)("h3",{id:"getmidx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getMidX")),(0,i.kt)("p",null,"Get the middle of shape position on X-axis."),(0,i.kt)("h3",{id:"getmidy"},(0,i.kt)("inlineCode",{parentName:"h3"},"getMidY")),(0,i.kt)("p",null,"Get the middle of shape position on Y-axis."),(0,i.kt)("h3",{id:"getscaledx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getScaledX")),(0,i.kt)("p",null,"Get the shape position on X-axis recalculated by diagram scale"),(0,i.kt)("h3",{id:"getscaledy"},(0,i.kt)("inlineCode",{parentName:"h3"},"getScaledY")),(0,i.kt)("p",null,"Get the shape position on Y-axis recalculated by diagram scale"),(0,i.kt)("h3",{id:"getscaledrawx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getScaledRawX")),(0,i.kt)("p",null,"Get the shape position on X-axis recalculated by diagram scale without camera offset"),(0,i.kt)("h3",{id:"getscaledrawy"},(0,i.kt)("inlineCode",{parentName:"h3"},"getScaledRawY")),(0,i.kt)("p",null,"Get the shape position on Y-axis recalculated by diagram scale without camera offset"),(0,i.kt)("h3",{id:"setstorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"setStorage")),(0,i.kt)("p",null,"Add data that you want to store in specific pedigree."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageObj"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Any key-value pair object")))),(0,i.kt)("h3",{id:"getstorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"getStorage")),(0,i.kt)("p",null,"Returns data from pedigree storage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = pedigree.getStorage();\n")),(0,i.kt)("h3",{id:"setlabel"},(0,i.kt)("inlineCode",{parentName:"h3"},"setLabel")),(0,i.kt)("p",null,"Attach label to a pedigree.\nSpecify order to sort values."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LabelData: Array"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Array of objects with value and order keys")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pedigree.setLabel([\n  {\n    value: "some random value",\n    order: 1,\n  },\n  {\n    value: "another random value",\n    order: 2,\n  }\n]);\n')),(0,i.kt)("h3",{id:"adddiseaseshape"},(0,i.kt)("inlineCode",{parentName:"h3"},"addDiseaseShape")),(0,i.kt)("p",null,"Fill the pedigree with various shapes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shape: string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color: string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"any ",(0,i.kt)("strong",{parentName:"li"},"HEX")," value")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available shapes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill top-left quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill top-right quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill bottom-left quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q4"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill bottom-right quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"draw a dot in middle of shape"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fill"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill a whole shape")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can stack shapes to build more extraordinary shapes"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pedigree.addDiseaseShape("q3", "#1f1f1f");\npedigree.addDiseaseShape("q4", "#1f1f1f");\n')),(0,i.kt)("h3",{id:"clearshapes"},(0,i.kt)("inlineCode",{parentName:"h3"},"clearShapes")),(0,i.kt)("p",null,"Remove all shapes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"pedigree.clearShapes();\n")),(0,i.kt)("h3",{id:"setpregnacy"},(0,i.kt)("inlineCode",{parentName:"h3"},"setPregnacy")),(0,i.kt)("p",null,"Displays a 'P' char in the middle of pedigree"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: boolean = false"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Display pregnancy\npedigree.setPregnancy(true);\n\n// Hide pregnancy\npedigree.setPregnancy(false);\n")),(0,i.kt)("h3",{id:"setdeceased"},(0,i.kt)("inlineCode",{parentName:"h3"},"setDeceased")),(0,i.kt)("p",null,"Displays a crossing line over the pedigree"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: boolean = false"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"pedigree.setDeceased(true);\n")),(0,i.kt)("h3",{id:"setproband"},(0,i.kt)("inlineCode",{parentName:"h3"},"setProband")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: boolean = false"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"pedigree.setProband(true);\n")),(0,i.kt)("h3",{id:"setmulitpleindividuals"},(0,i.kt)("inlineCode",{parentName:"h3"},"setMulitpleIndividuals")),(0,i.kt)("p",null,"Displays a number in middle of a pedigree"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: boolean = false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count: number = 0"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"pedigree.setMulitpleIndividuals(true, 5);\n")),(0,i.kt)("h2",{id:"legend"},"Legend"),(0,i.kt)("p",null,"Create description table with disease names and thier shapes"),(0,i.kt)("h3",{id:"setpedigree"},(0,i.kt)("inlineCode",{parentName:"h3"},"setPedigree")),(0,i.kt)("p",null,"Attach pedigree shape with its description."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pedigree: Pedigree"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pedigree shape and color that you want to save in the legend"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description: string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description attached to pedigree shape")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'legendTable.setPedigree(unknownPedigree, "disease 1");\n')),(0,i.kt)("h3",{id:"removepedigree"},(0,i.kt)("inlineCode",{parentName:"h3"},"removePedigree")),(0,i.kt)("p",null,"Remove ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree")," instance from legend and its label"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"id of ",(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," instance that you want to remove from legend")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"legendTable.removePedigree(2);\n")),(0,i.kt)("h3",{id:"setitemsperrow"},(0,i.kt)("inlineCode",{parentName:"h3"},"setItemsPerRow")),(0,i.kt)("p",null,"Attach pedigree shape with its description."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Max items per row without overlapping")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"legendTable.setItemsPerRow(3);\n")))}k.isMDXComponent=!0}}]);