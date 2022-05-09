(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,s({},t,{components:n}))}},d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,u=l["".concat(s,".").concat(m)]||l[m]||h[m]||o;return n?a.a.createElement(u,c(c({ref:t},i),{},{components:n})):a.a.createElement(u,c({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(7),o=(n(0),n(133)),s={id:"msw",title:"Mock Service Worker"},i={unversionedId:"network/msw",id:"network/msw",isDocsHomePage:!1,title:"Mock Service Worker",description:"The msw (mock service worker) package is useful in intercepting and mocking requests in the browser. Its use of service workers means requests still appear in the network tab, creating a realistic mocking environment. With @graphql-mocks/network-msw the requests and responses can be handled by msw with a GraphQL handler for full GraphQL mocking in the browser.",source:"@site/docs/network/msw.md",slug:"/network/msw",permalink:"/docs/network/msw",version:"current",sidebar:"docs",previous:{title:"Express",permalink:"/docs/network/express"},next:{title:"Nock",permalink:"/docs/network/nock"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Resolver Context",id:"resolver-context",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://mswjs.io/"}),Object(o.mdx)("inlineCode",{parentName:"a"},"msw"))," (mock service worker) package is useful in intercepting and mocking requests in the browser. Its use of service workers means requests still appear in the network tab, creating a realistic mocking environment. With ",Object(o.mdx)("inlineCode",{parentName:"p"},"@graphql-mocks/network-msw")," the requests and responses can be handled by ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," with a GraphQL handler for full GraphQL mocking in the browser."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note:")," ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," also provides its own method of GraphQL mocking where a named query is responded to with hardcoded fixture data. ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," provides a more universal mocking experience using resolvers and the GraphQL schema to reflect how real GraphQL APIs recursively resolve data."),Object(o.mdx)("h2",{id:"installation"},"Installation"),Object(o.mdx)("p",null,"Install the ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," and  ",Object(o.mdx)("inlineCode",{parentName:"p"},"@graphql-mocks/network-msw")," npm packages."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install --save-dev msw @graphql-mocks/network-msw\n\n# yarn\nyarn add --dev msw @graphql-mocks/network-msw\n")),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("p",null,"Setup ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," using the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://mswjs.io/docs/getting-started/mocks/rest-api"}),"REST API Documentation"),"."),Object(o.mdx)("p",null,"Then integreate with the ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," by creating or importing a ",Object(o.mdx)("inlineCode",{parentName:"p"},"GraphQLHandler")," instance and passing it to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"mswResolver")," handler."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"// src/mocks/handlers.js\n\nimport { GraphQLHandler } from 'graphql-mocks';\nimport { mswResolver } from '@graphql-mocks/network-msw';\nimport { rest } from 'msw'\nimport graphqlSchema from './graphql-schema';\n\nconst graphqlHandler = new GraphQLHandler({ dependencies: { graphqlSchema }});\n\nexport const handlers = [\n  rest.post('/graphql', mswResolver(graphqlHandler))\n]\n")),Object(o.mdx)("p",null,"Alternatively, instead of ",Object(o.mdx)("inlineCode",{parentName:"p"},"/graphql"),", a full path url can be used also. See the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://mswjs.io/docs/basics/request-matching#request-url"}),Object(o.mdx)("inlineCode",{parentName:"a"},"msw")," documentation")," for options on specifying the path of the request handler."),Object(o.mdx)("p",null,"Next, follow the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://mswjs.io/docs/getting-started/integrate/browser"}),Object(o.mdx)("inlineCode",{parentName:"a"},"msw")," browser integration documentation")," to integrate msw properly with your front-end build."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Note:")," The handler ",Object(o.mdx)("inlineCode",{parentName:"p"},"src/mocks/handlers.js")," file created above should be imported and used with the ",Object(o.mdx)("inlineCode",{parentName:"p"},"setupWorkers")," function as described in the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://mswjs.io/docs/getting-started/integrate/browser"}),"browser integration documentation"),"."),Object(o.mdx)("p",null,"With everything integrated, requests in the browser should be intercepted by ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," and use the rest handler with the ",Object(o.mdx)("inlineCode",{parentName:"p"},"GraphQLHandler")," for resolving GraphQL queries."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"// fetch using the url specified in src/mocks/handlers.js\n// `/graphql` becomes `http://localhost/graphql`\nfetch('http://localhost/graphql, {\n  method: 'POST',\n  body: JSON.stringify({\n    // required\n    query: `\n      query {\n        # graphql query\n      }\n    `,\n\n    // optional\n    variables: {},\n\n    // optional\n    operationName: 'OperationName'\n  }),\n}).then(async (response) => {\n  // get the final json payload\n  const result = await response.json();\n  return result;\n})\n")),Object(o.mdx)("p",null,"See the ",Object(o.mdx)("a",Object(r.default)({parentName:"p"},{href:"https://graphql.org/learn/serving-over-http/#post-request"}),"GraphQL docs")," for details on these body parameters, and making http requests."),Object(o.mdx)("h2",{id:"resolver-context"},"Resolver Context"),Object(o.mdx)("p",null,"When using the ",Object(o.mdx)("inlineCode",{parentName:"p"},"@graphql-mocks/network-msw")," network handler each resolver context has an ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," property which contains the ",Object(o.mdx)("inlineCode",{parentName:"p"},"req")," (request), ",Object(o.mdx)("inlineCode",{parentName:"p"},"res")," (response), and ",Object(o.mdx)("inlineCode",{parentName:"p"},"ctx")," (",Object(o.mdx)("em",{parentName:"p"},Object(o.mdx)("inlineCode",{parentName:"em"},"msw")," context"),"), from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"msw")," rest request handler."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"function resolver(parent, args, context, info) {\n  const { msw } = context;\n  // request, response and context from the `msw` request handler\n  const { req, res, ctx } = msw;\n}\n")))}l.isMDXComponent=!0}}]);