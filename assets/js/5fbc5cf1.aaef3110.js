(self.webpackChunkpedigree_chart_docs=self.webpackChunkpedigree_chart_docs||[]).push([[207],{1203:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(2122),l=a(9756),i=(a(7294),a(3905)),r=["components"],p={},o="API",d={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API",description:"Set of all available methods and thier short descriptions",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/pedigree-chart-docs/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic pedigrees",permalink:"/pedigree-chart-docs/fundamentals/basic_components"}},m=[{value:"PedigreeChart",id:"pedigreechart",children:[{value:"<code>setDiagram</code>",id:"setdiagram",children:[]},{value:"<code>setConfig</code>",id:"setconfig",children:[]},{value:"<code>create</code>",id:"create",children:[]},{value:"<code>connect</code>",id:"connect",children:[]},{value:"<code>connectTwins</code>",id:"connecttwins",children:[]},{value:"<code>createLegend</code>",id:"createlegend",children:[]},{value:"<code>on</code>",id:"on",children:[]}]},{value:"Pedigree",id:"pedigree",children:[{value:"<code>draw</code>",id:"draw",children:[]},{value:"<code>getX</code>",id:"getx",children:[]},{value:"<code>getY</code>",id:"gety",children:[]},{value:"<code>getMidX</code>",id:"getmidx",children:[]},{value:"<code>getMidY</code>",id:"getmidy",children:[]},{value:"<code>setStorage</code>",id:"setstorage",children:[]},{value:"<code>getStorage</code>",id:"getstorage",children:[]},{value:"<code>setLabel</code>",id:"setlabel",children:[]},{value:"<code>addDiseaseShape</code>",id:"adddiseaseshape",children:[]}]},{value:"Legend",id:"legend",children:[]}],s={toc:m};function k(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api"},"API"),(0,i.kt)("p",null,"Set of all available methods and thier short descriptions"),(0,i.kt)("h2",{id:"pedigreechart"},"PedigreeChart"),(0,i.kt)("p",null,"Main class necessary to init pedigree chart."),(0,i.kt)("h3",{id:"setdiagram"},(0,i.kt)("inlineCode",{parentName:"h3"},"setDiagram")),(0,i.kt)("p",null,"Method for injecting chart functionalities into canvas element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"diagramID: string"))),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import PedigreeChart from "pedigree-chart"\n\nconst chart = new PedigreeChart()\nchart.setDiagram("pedigree-editor")\n')),(0,i.kt)("h3",{id:"setconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"setConfig")),(0,i.kt)("p",null,"Update chart configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configObject"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Config object props")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width = 1200")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height = 600")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragEnabled = false")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines if user can drag chart elements"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"panEnabled = false")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines if user can pan the chart"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'scaleType: "none" | "scroll" | "pointer" = "none"')," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"none" - diagram zoom disabled'),(0,i.kt)("li",{parentName:"ul"},'"scroll" - diagram zoom based on user scroll'),(0,i.kt)("li",{parentName:"ul"},'"pointer" - diagram zoom based on user scroll and mouse position'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minScale = 0.5")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxScale = 2.5")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"font = 16px Arial")," ","\xa0"," ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Font styling for labels")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.setConfig({\n    width: 1000,\n    heigh: 800,\n    dragEnabled = true\n})\n")),(0,i.kt)("h3",{id:"create"},(0,i.kt)("inlineCode",{parentName:"h3"},"create")),(0,i.kt)("p",null,"Returns a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'sex: "female" | "male" | "unknown"'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defines shape of ",(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," position on x-axis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pedigree")," position on y-axis")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const UnknownPedigree = chart.create("unknown", 100, 200)\n')),(0,i.kt)("h3",{id:"connect"},(0,i.kt)("inlineCode",{parentName:"h3"},"connect")),(0,i.kt)("p",null,"Create a specific line between two ",(0,i.kt)("inlineCode",{parentName:"p"},"Pedigree")," instances."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pedigreeA: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pedigreeB: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'lineType: "partnership" | "separation" | "sibling" | "consanguineous"'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const MalePedigree = chart.create("male", 100, 200)\nconst FemalePedigree = chart.create("female", 200, 200)\n\nchart.connect(MalePedigree, FemalePedigree, "separation")\n')),(0,i.kt)("h3",{id:"connecttwins"},(0,i.kt)("inlineCode",{parentName:"h3"},"connectTwins")),(0,i.kt)("p",null,"Join twins together and create connection with parent."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"twinA: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"twinB: Pedigree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'lineType: "identical" | "non-identical"'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Mom = chart.create("female", 200, 100)\nconst ChildA = chart.create("female", 200, 200)\nconst ChildB = chart.create("female", 300, 200)\n\nchart.connectTwins(MalePedigree, FemalePedigree, "separation")\n')),(0,i.kt)("h3",{id:"createlegend"},(0,i.kt)("inlineCode",{parentName:"h3"},"createLegend")),(0,i.kt)("p",null,"Creates new legend table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Legend")," position on x-axis"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Legend")," position on y-axis")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const legendTable = chart.createLegend(200, 100)\n")),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Legend")," to check available methods."),(0,i.kt)("h3",{id:"on"},(0,i.kt)("inlineCode",{parentName:"h3"},"on")),(0,i.kt)("p",null,"Adds custom event listeners on events emitted by chart."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'eventName: "pedigree-click"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventHandler: Function"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'chart.on("pedigree-click", (pedigree)=>{\n    console.log(pedigree)\n})\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Payloads")),(0,i.kt)("p",null,"For your custom event handler you can add a parameter, where pedigree instance will be passed."),(0,i.kt)("h2",{id:"pedigree"},"Pedigree"),(0,i.kt)("p",null,"The basic component/"),(0,i.kt)("h3",{id:"draw"},(0,i.kt)("inlineCode",{parentName:"h3"},"draw")),(0,i.kt)("p",null,"Force pedigree redrawing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const pedigree = chart.create("unknown", 100, 200)\n\npedigree.draw()\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use this method to force redrawing. You don't have to use it\nby default."))),(0,i.kt)("h3",{id:"getx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getX")),(0,i.kt)("p",null,"Get the shape position on X-axis."),(0,i.kt)("h3",{id:"gety"},(0,i.kt)("inlineCode",{parentName:"h3"},"getY")),(0,i.kt)("p",null,"Get the shape position on Y-axis."),(0,i.kt)("h3",{id:"getmidx"},(0,i.kt)("inlineCode",{parentName:"h3"},"getMidX")),(0,i.kt)("p",null,"Get the middle of shape position on X-axis."),(0,i.kt)("h3",{id:"getmidy"},(0,i.kt)("inlineCode",{parentName:"h3"},"getMidY")),(0,i.kt)("p",null,"Get the middle of shape position on Y-axis."),(0,i.kt)("h3",{id:"setstorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"setStorage")),(0,i.kt)("p",null,"Add data that you want to store in specific pedigree."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageObj"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Any key-value pair object")))),(0,i.kt)("h3",{id:"getstorage"},(0,i.kt)("inlineCode",{parentName:"h3"},"getStorage")),(0,i.kt)("p",null,"Returns data from pedigree storage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = pedigree.getStorage()\n")),(0,i.kt)("h3",{id:"setlabel"},(0,i.kt)("inlineCode",{parentName:"h3"},"setLabel")),(0,i.kt)("p",null,"Attach label to a pedigree."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configObj"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Any key-value pair object")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pedigree.setLabel({\n    id: "some-random-value",\n    name: "Kamil"\n})\n')),(0,i.kt)("h3",{id:"adddiseaseshape"},(0,i.kt)("inlineCode",{parentName:"h3"},"addDiseaseShape")),(0,i.kt)("p",null,"Fill the pedigree with various shapes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Params")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shape: string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color: string"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"any ",(0,i.kt)("strong",{parentName:"li"},"HEX")," value")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available shapes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill top-left quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill top-right quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill bottom-left quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q4"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill bottom-right quarter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"draw a dot in middle of shape"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fill"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fill a whole shape")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pedigree.addDiseaseShape("q1", "#1f1f1f")\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can stack shapes to build more extraordinary shapes"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pedigree.addDiseaseShape("q3", "#1f1f1f")\npedigree.addDiseaseShape("q4", "#1f1f1f")\n')),(0,i.kt)("h2",{id:"legend"},"Legend"))}k.isMDXComponent=!0}}]);