(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return d})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return f})),t.d(n,"useMDXComponents",(function(){return m})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){return function(n){var t=m(n.components);return a.a.createElement(e,c({},n,{components:t}))}},m=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=m(t),s=r,u=d["".concat(c,".").concat(s)]||d[s]||h[s]||o;return t?a.a.createElement(u,i(i({ref:n},l),{},{components:t})):a.a.createElement(u,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},45:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(7),o=(t(0),t(125)),c={id:"nock",title:"Nock"},l={unversionedId:"network/nock",id:"network/nock",isDocsHomePage:!1,title:"Nock",description:"Nock is used for testing and mocking http requests in Node. Integrating graphql-mocks with Nock is easy with @graphql-mocks/network-nock.",source:"@site/docs/network/nock.md",slug:"/network/nock",permalink:"/docs/network/nock",version:"current",sidebar:"docs",previous:{title:"Mock Service Worker",permalink:"/docs/network/msw"},next:{title:"Using Paper with graphql-mocks",permalink:"/docs/guides/paper"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Resolver Context",id:"resolver-context",children:[]}]},{value:"API Documentation",id:"api-documentation",children:[]}],p={rightToc:i};function d(e){var n=e.components,t=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://github.com/nock/nock"}),"Nock")," is used for testing and mocking http requests in Node. Integrating ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," with Nock is easy with ",Object(o.mdx)("inlineCode",{parentName:"p"},"@graphql-mocks/network-nock"),"."),Object(o.mdx)("h2",{id:"installation"},"Installation"),Object(o.mdx)("p",null,"Install the ",Object(o.mdx)("inlineCode",{parentName:"p"},"nock")," and  ",Object(o.mdx)("inlineCode",{parentName:"p"},"@graphql-mocks/network-nock")," npm packages."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install --save-dev nock @graphql-mocks/network-nock\n\n# yarn\nyarn add --dev nock @graphql-mocks/network-nock\n")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("p",null,"In any Nock POST ",Object(o.mdx)("inlineCode",{parentName:"p"},".reply()"),", use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"nockHandler")," with a ",Object(o.mdx)("inlineCode",{parentName:"p"},"GraphQLHandler")," instance."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"import { GraphQLHandler } from 'graphql-mocks';\nimport graphqlSchema from './graphqlSchema';\nimport { nockHandler } from '@graphql-mocks/network-nock';\nimport nock from 'nock';\n\nconst graphqlHandler = new GraphQLHandler({\n  dependencies: { graphqlSchema }\n};\n\nnock('http://graphql-api.com')\n  .post('/graphql')\n  .reply(nockHandler(graphqlHandler));\n")),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"nockHandler")," function also accepts an ",Object(o.mdx)("inlineCode",{parentName:"p"},"options")," argument, an object with ",Object(o.mdx)("inlineCode",{parentName:"p"},"checkGraphQLResult")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"checkRequest")," callbacks:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"nockHandler(graphqlHandler, {\n  checkRequest(request, requestBody) => void,\n  checkGraphQLResult: (result) => void\n})\n")),Object(o.mdx)("p",null,"These callbacks are useful for doing checks or additional assertions during testing"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"checkRequest")," callback is passed the incoming ",Object(o.mdx)("inlineCode",{parentName:"li"},"request")," and the ",Object(o.mdx)("inlineCode",{parentName:"li"},"requestBody")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"checkGraphQLResult")," callback is passed the result from the GraphQLHandler")),Object(o.mdx)("p",null,"With the above nock handler setup, a ",Object(o.mdx)("inlineCode",{parentName:"p"},"node-fetch")," call will be intercepted by and responded to from nock and graphql-mocks."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"import fetch from 'node-fetch';\n\nfetch('http://localhost:8080/graphql, {\n  method: 'POST',\n  body: JSON.stringify({\n    // required\n    query: `\n      query {\n        # graphql query\n      }\n    `,\n\n    // optional\n    variables: {},\n\n    // optional\n    operationName: 'OperationName'\n  }),\n}).then(async (response) => {\n  // get the final json payload\n  const result = await response.json();\n  return result;\n})\n")),Object(o.mdx)("p",null,"See the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://graphql.org/learn/serving-over-http/#post-request"}),"GraphQL docs")," for details on these body parameters, and making http requests."),Object(o.mdx)("h3",{id:"resolver-context"},"Resolver Context"),Object(o.mdx)("p",null,"The Nock request object is made available within the resolver ",Object(o.mdx)("inlineCode",{parentName:"p"},"context")," under the ",Object(o.mdx)("inlineCode",{parentName:"p"},"nock")," property:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"function resolver(parent, args, context, info) {\n  const { nock } = context;\n\n  // reference to the Nock request object\n  nock.request;\n}\n")),Object(o.mdx)("h2",{id:"api-documentation"},"API Documentation"),Object(o.mdx)("p",null,"See the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"/api/network-nock/"}),"API Documentation")," for types and more details."))}d.isMDXComponent=!0}}]);