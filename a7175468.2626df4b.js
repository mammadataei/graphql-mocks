(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?o.a.createElement(b,c(c({ref:n},p),{},{components:t})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},111:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0),o=t.n(r);function a(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("strong",null,"Result: "),o.a.createElement("pre",{className:"graphql-result"},JSON.stringify(e.result,null,2)))}},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return b}));var r=t(2),o=t(6),a=(t(0),t(102)),l=t(111);const c={rightToc:[]};function i({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler, embed } from "graphql-mocks";\nimport { spyWrapper } from "@graphql-mocks/sinon";\n\n// this string represents our schema formatted in\n// GraphQL SDL (Schema Definition Language), but\n// a GraphQL Instance or SDL String can be used\nconst graphqlSchema = `\nschema {\n  query: Query\n}\n\ntype Query {\n  helloWorld: String!\n}\n`;\n\nconst resolverMap = {\n  Query: {\n    helloWorld() {\n      return "Hello from our test resolver!";\n    },\n  },\n};\n\n// Create a query handler with the GraphQL Schema, Resolver Map, and embedded wrappers\nconst handler = new GraphQLHandler({\n  resolverMap,\n  middlewares: [\n    embed({\n      wrappers: [spyWrapper],\n    }),\n  ],\n\n  dependencies: {\n    graphqlSchema,\n  },\n});\n\n// Send the query\nconst query = handler.query(`\n  {\n    helloWorld\n  }\n`);\n\n// console.log the result and the sinon spies that were applied to\n// the resolver\nquery.then((result) => {\n  console.log(result);\n  console.log(handler.state.spies.Query.helloWorld);\n});\n')))}i.isMDXComponent=!0;var p={data:{helloWorld:"Hello from our test resolver!"}},s={id:"quick-example",title:"Quick Example"},u={unversionedId:"getting-started/quick-example",id:"getting-started/quick-example",isDocsHomePage:!1,title:"Quick Example",description:"This example will show how to:",source:"@site/docs/getting-started/quick-example.mdx",slug:"/getting-started/quick-example",permalink:"/docs/getting-started/quick-example",version:"current",sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/getting-started/concepts"},next:{title:"Using Resolvers",permalink:"/docs/resolver/using-resolvers"}},m=[],d={rightToc:m};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This example will show how to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create a Resolver Map with Resolver functions"),Object(a.b)("li",{parentName:"ol"},"Apply a Resolver Wrapper to Resolver functions, the Sinon Spy Wrapper ",Object(a.b)("inlineCode",{parentName:"li"},"spyWrapper")," (via ",Object(a.b)("inlineCode",{parentName:"li"},"@graphql-mocks/sinon"),") by using ",Object(a.b)("inlineCode",{parentName:"li"},"embed"),". The spy\nwrapper will capture all calls to our resolver function which can be useful for testing."),Object(a.b)("li",{parentName:"ol"},"Setup a GraphQL Handler with the the Resolver Wrapper to be able to execute queries"),Object(a.b)("li",{parentName:"ol"},"Execute a Query with the GraphQL Handler"),Object(a.b)("li",{parentName:"ol"},"Check the state object for the results of the Sinon Spies")),Object(a.b)(i,{mdxType:"QuickExample"}),Object(a.b)("p",null,"First ",Object(a.b)("inlineCode",{parentName:"p"},"console.log")),Object(a.b)(l.a,{result:p,mdxType:"GraphQLResult"}),Object(a.b)("p",null,"Second ",Object(a.b)("inlineCode",{parentName:"p"},"console.log")),Object(a.b)(l.a,{result:"Hello from our test resolver!",mdxType:"GraphQLResult"}),Object(a.b)("p",null,"And that's an end-to-end example using the library to create a quick mock GraphQL API with the Sinon Spy Wrapper for\nintrospection. Use the existing out-of-the-box Resolver Wrapper and Resolver Map Middlewares for even more\nfunctionality, or create your own."))}b.isMDXComponent=!0}}]);