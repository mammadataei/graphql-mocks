(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r.n(n);function o(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"Result: "),a.a.createElement("pre",{className:"graphql-result"},JSON.stringify(e.result,null,2)))}},207:function(e,t,r){"use strict";t.a={data:{helloWorld:"Hello from my first GraphQL resolver!"}}},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return h})),r.d(t,"default",(function(){return f}));var n=r(2),a=r(6),o=(r(0),r(91)),i=["components"],l={rightToc:[]};function s(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\n\nconst schemaString = `\n  schema {\n    query: Query\n  }\n\n  type Query {\n    helloWorld: String!\n  }\n`;\n\nconst resolverMap = {\n  Query: {\n    helloWorld() {\n      return "Hello from my first GraphQL resolver!";\n    },\n  },\n};\n\nconst handler = new GraphQLHandler({\n  resolverMap,\n  dependencies: {\n    graphqlSchema: schemaString,\n  },\n});\n\nconst query = handler.query(\n  `\n    {\n      helloWorld\n    }\n  `\n);\nquery.then((result) => console.log(result));\n')))}s.isMDXComponent=!0;var c=r(207),p=r(106),u=["components"],d={id:"create-handler",title:"Creating a GraphQL Handler"},b={unversionedId:"getting-started/create-handler",id:"getting-started/create-handler",isDocsHomePage:!1,title:"Creating a GraphQL Handler",description:"Ultimately, in order to be able to execute GraphQL queries you need a GraphQL handler. This handler represents your",source:"@site/docs/getting-started/create-handler.mdx",slug:"/getting-started/create-handler",permalink:"/docs/getting-started/create-handler",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Quick Example",permalink:"/docs/getting-started/quick-example"}},h=[{value:"Getting started",id:"getting-started",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:h};function f(e){var t=e.components,r=Object(a.a)(e,u);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ultimately, in order to be able to execute GraphQL queries you need a GraphQL handler. This handler represents your\nGraphQL API and will take a query and variables and return a promise containing containing data or errors."),Object(o.b)("p",null,"If you are just getting started with setting up your GraphQL API this library provides a GraphQL handler. If you already\nhave a GraphQL handler ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../guides/pack"}),"use the ",Object(o.b)("inlineCode",{parentName:"a"},"pack")," guide")," to still be able to use this library's underlying\ncomposibility features including Resovler Map Middlewares and Resolver Wrappers."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLHandler")," instance handles GraphQL operations (queries and mutations). A GraphQL Schema is a required\ndependency for setting it up. The Schema can be a:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"instance of ",Object(o.b)("inlineCode",{parentName:"li"},"GraphQLSchema")),Object(o.b)("li",{parentName:"ul"},"GraphQL Schema AST (sometimes what is provided by babel loaders or bundlers)"),Object(o.b)("li",{parentName:"ul"},"a string that is formatted in GraphQL SDL (Schema Definition Language)")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLHandler")," instance has a ",Object(o.b)("inlineCode",{parentName:"p"},"query")," function that processes queries and variables, returning the execution as a\npromise with the result or any errors."),Object(o.b)("p",null,"Here is a quick example:"),Object(o.b)(s,{mdxType:"CreateHandlerExample"}),Object(o.b)(p.a,{result:c.a,mdxType:"GraphQLResult"}),Object(o.b)("p",null,"This example follows a similar path of creating custom resolvers that many GraphQL tutorials follow, especially those\nfor testing and mocking an API."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"To do this setup manual resolvers for each field on each type is possible but can take a bit of time and makes managing\nthe Resolver Map surface area a bit more cumbersome. This library provides abstractions to make this process easier,\nwhether there are common resolvers, static data, or auto resolvers backed by a stateful source this library provides the\nways of setting up your mock GraphQL API easier."))}f.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(h,l(l({ref:t},c),{},{components:r})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);