(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={title:"West Side Story",actors:[{name:"Rita Moreno"},{name:"Natalie Wood"},{name:"George Chakiris"},{name:"Richard Beymer"}],richard:{name:"Richard Beymer"}}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){return function(t){var n=m(t.components);return a.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(n),s=r,u=d["".concat(i,".").concat(s)]||d[s]||h[s]||o;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.GraphQLResult=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("strong",null,"Result: "),a.default.createElement("pre",{className:"graphql-result"},JSON.stringify(e.result,null,2)))};var a=r(n(0))},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(133)),i={rightToc:[]};function c(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),'import { Paper } from "graphql-paper";\n\nconst graphqlSchema = `\n  schema {\n    query: Query\n  }\n\n  type Query {\n    films: [Film!]!\n  }\n\n  type Film {\n    title: String!\n    year: Int!\n    actors: [Actor!]!\n  }\n\n  type Actor {\n    name: String!\n  }\n`;\n\nconst paper = new Paper(graphqlSchema);\n\nasync function run() {\n  const westSideStory = await paper.mutate(({ create }) => {\n    // Create a Film with several actors\n    const film = create("Film", {\n      title: "West Side Story",\n      year: 1961,\n      actors: [\n        { name: "Rita Moreno" },\n        { name: "Natalie Wood" },\n        { name: "George Chakiris" },\n        { name: "Richard Beymer" },\n      ],\n    });\n\n    // return film to be available outside the `mutate`\n    return film;\n  });\n\n  // pull results off the returned result\n  const { title, actors } = westSideStory;\n\n  // FIRST console.log\n  console.log(title);\n\n  // SECOND console.log\n  console.log(actors);\n\n  // can lookup results on the `Paper` instance, too\n  const richard = paper.data.Actor.find(\n    ({ name }) => name === "Richard Beymer"\n  );\n\n  // THIRD console.log\n  console.log(richard);\n}\n\n// kick off async function\nrun();\n')))}c.isMDXComponent=!0;var l=n(1109),p=n.n(l),d=n(143),s={id:"introducing-paper",title:"Introducing GraphQL Paper"},m={unversionedId:"paper/introducing-paper",id:"paper/introducing-paper",isDocsHomePage:!1,title:"Introducing GraphQL Paper",description:"GraphQL Paper is a flexible in-memory store based on a provided GraphQL Schema.",source:"@site/docs/paper/introducing-paper.md",slug:"/paper/introducing-paper",permalink:"/docs/paper/introducing-paper",version:"current",sidebar:"docs",previous:{title:"Create Custom Highlighters",permalink:"/docs/highlight/creating-highlighters"},next:{title:"Installation",permalink:"/docs/paper/installation"}},u=[{value:"\u2728 Features",id:"-features",children:[]},{value:"API Reference",id:"api-reference",children:[]},{value:"Integration with <code>graphql-mocks</code>",id:"integration-with-graphql-mocks",children:[]},{value:"Documents and the Store",id:"documents-and-the-store",children:[]},{value:"A Quick Example",id:"a-quick-example",children:[]}],h={rightToc:u};function b(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"GraphQL Paper is a flexible in-memory store based on a provided GraphQL Schema."),Object(o.mdx)("p",null,"In testing and development it is handy to have a store that reflects the current state of the world, handles connections between data, and updates via mutations. While GraphQL Paper integrates well with the rest of ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks"),", it can also be used on its own."),Object(o.mdx)("h2",{id:"-features"},"\u2728 Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Built and based on GraphQL"),Object(o.mdx)("li",{parentName:"ul"},"Works in the Browser and Node JS"),Object(o.mdx)("li",{parentName:"ul"},"Works without ",Object(o.mdx)("inlineCode",{parentName:"li"},"graphql-mocks")," with support for the official default GraphQL resolvers"),Object(o.mdx)("li",{parentName:"ul"},"Written in TypeScript"),Object(o.mdx)("li",{parentName:"ul"},"Support and integration with ",Object(o.mdx)("inlineCode",{parentName:"li"},"graphql-mocks")),Object(o.mdx)("li",{parentName:"ul"},"Support for relationships and connections between types"),Object(o.mdx)("li",{parentName:"ul"},"Immutable"),Object(o.mdx)("li",{parentName:"ul"},"Accessible via native js APIs"),Object(o.mdx)("li",{parentName:"ul"},"Hooks (",Object(o.mdx)("a",Object(r.default)({parentName:"li"},{href:"/docs/paper/hooks"}),"docs"),")"),Object(o.mdx)("li",{parentName:"ul"},"Events (",Object(o.mdx)("a",Object(r.default)({parentName:"li"},{href:"/docs/paper/events"}),"docs"),")"),Object(o.mdx)("li",{parentName:"ul"},"Transaction Operations (",Object(o.mdx)("a",Object(r.default)({parentName:"li"},{href:"/docs/paper/operations"}),"docs"),")"),Object(o.mdx)("li",{parentName:"ul"},"Validations (",Object(o.mdx)("a",Object(r.default)({parentName:"li"},{href:"/docs/paper/validations"}),"docs"),")"),Object(o.mdx)("li",{parentName:"ul"},"API Query Imports")),Object(o.mdx)("p",null,"Coming Soon:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Time-travel debugging, store snapshots, and the ability to restore to existing store snapshots"),Object(o.mdx)("li",{parentName:"ul"},"Specialized ",Object(o.mdx)("inlineCode",{parentName:"li"},"factory")," operation with support for various states and scenarios, with functional factories currently working now (",Object(o.mdx)("a",Object(r.default)({parentName:"li"},{href:"/docs/paper/guides/factories"}),"docs"),")")),Object(o.mdx)("h2",{id:"api-reference"},"API Reference"),Object(o.mdx)("p",null,"There is the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/api/paper/"}),"API reference")," available for the ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-paper")," package."),Object(o.mdx)("h2",{id:"integration-with-graphql-mocks"},"Integration with ",Object(o.mdx)("inlineCode",{parentName:"h2"},"graphql-mocks")),Object(o.mdx)("p",null,"Check out the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/docs/guides/paper"}),"guide")," for using ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," with GraphQL Paper."),Object(o.mdx)("h2",{id:"documents-and-the-store"},"Documents and the Store"),Object(o.mdx)("p",null,"With GraphQL Paper a ",Object(o.mdx)("inlineCode",{parentName:"p"},"Document")," is a POJO (plain-old javascript object) that represents a concrete GraphQL type, it is ",Object(o.mdx)("em",{parentName:"p"},"not")," an instance."),Object(o.mdx)("p",null,"For example an ",Object(o.mdx)("inlineCode",{parentName:"p"},"Actor")," GraphQL type:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-graphql"}),"type Actor {\n  title: String!\n}\n")),Object(o.mdx)("p",null,"Could have a corresponding ",Object(o.mdx)("inlineCode",{parentName:"p"},"Document"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"{\n  title: 'Jurassic Park'\n}\n")),Object(o.mdx)("p",null,"Documents are stored in an array on the ",Object(o.mdx)("inlineCode",{parentName:"p"},"DocumentStore")," keyed by the GraphQL type. Based on the previous example a basic store containing our document could look like:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"{\n  Actor: [{ title: 'Jurassic Park' }]\n}\n")),Object(o.mdx)("p",null,"This is a simplistic, but realistic example, of how data is stored. Learn how to ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/docs/paper/querying-data"}),"query")," and ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/docs/paper/mutating-data"}),"mutate")," the store (see below for a quick example of both). Check out the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/docs/paper/technical-notes"}),"technical notes")," for a closer look at how everything works."),Object(o.mdx)("h2",{id:"a-quick-example"},"A Quick Example"),Object(o.mdx)("p",null,"Here's a quick glimpse at what is possible with GraphQL Paper:"),Object(o.mdx)(c,{mdxType:"QuickExample"}),Object(o.mdx)("p",null,"First ",Object(o.mdx)("inlineCode",{parentName:"p"},"console.log")," for ",Object(o.mdx)("inlineCode",{parentName:"p"},"title")),Object(o.mdx)(d.GraphQLResult,{result:p.a.title,mdxType:"GraphQLResult"}),Object(o.mdx)("p",null,"Second ",Object(o.mdx)("inlineCode",{parentName:"p"},"console.log")," for ",Object(o.mdx)("inlineCode",{parentName:"p"},"actors")),Object(o.mdx)(d.GraphQLResult,{result:p.a.actors,mdxType:"GraphQLResult"}),Object(o.mdx)("p",null,"Third ",Object(o.mdx)("inlineCode",{parentName:"p"},"console.log")," for ",Object(o.mdx)("inlineCode",{parentName:"p"},"richard")),Object(o.mdx)(d.GraphQLResult,{result:p.a.richard,mdxType:"GraphQLResult"}))}b.isMDXComponent=!0}}]);