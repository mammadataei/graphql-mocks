(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return p})),t.d(n,"MDXProvider",(function(){return u})),t.d(n,"mdx",(function(){return b})),t.d(n,"useMDXComponents",(function(){return m})),t.d(n,"withMDXComponents",(function(){return s}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){return function(n){var t=m(n.components);return a.a.createElement(e,d({},n,{components:t}))}},m=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(t),s=r,u=p["".concat(d,".").concat(s)]||p[s]||f[s]||i;return t?a.a.createElement(u,o(o({ref:n},l),{},{components:t})):a.a.createElement(u,o({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,d=new Array(i);d[0]=h;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var c=2;c<i;c++)d[c]=t[c];return a.a.createElement.apply(null,d)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},42:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(7),i=(t(0),t(129)),d={id:"using-middlewares",title:"Using Middlewares"},l={unversionedId:"handler/using-middlewares",id:"handler/using-middlewares",isDocsHomePage:!1,title:"Using Middlewares",description:'The GraphQLHandler accepts an array of middlewares, chaining together a series of modifications to the Resolver Map (or an empty object if one does not exist). After all the Middlewares have been run the GraphQLHandler takes the final "packed" Resolver Map and applies each Resolver function to the GraphQLSchema, its types and fields.',source:"@site/docs/handler/using-middlewares.md",slug:"/handler/using-middlewares",permalink:"/docs/handler/using-middlewares",version:"current",sidebar:"docs",previous:{title:"Introducing the GraphQL Handler",permalink:"/docs/handler/introducing-handler"},next:{title:"Handler State",permalink:"/docs/handler/handler-state"}},o=[{value:"Adding Middlewares at Initialization",id:"adding-middlewares-at-initialization",children:[]},{value:"Adding Middlewares via <code>applyMiddlewares</code>",id:"adding-middlewares-via-applymiddlewares",children:[{value:"Options",id:"options",children:[]}]}],c={rightToc:o};function p(e){var n=e.components,t=Object(a.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"GraphQLHandler")," accepts an array of middlewares, chaining together a series of modifications to the Resolver Map (or an empty object if one does not exist). After all the Middlewares have been run the ",Object(i.mdx)("inlineCode",{parentName:"p"},"GraphQLHandler"),' takes the final "packed" Resolver Map and applies each Resolver function to the ',Object(i.mdx)("inlineCode",{parentName:"p"},"GraphQLSchema"),", its types and fields."),Object(i.mdx)("p",null,"The specific internal mechanics of a middleware are explained in ",Object(i.mdx)("a",Object(r.default)({parentName:"p"},{href:"/docs/resolver-map/introducing-middlewares"}),"Introducing Resolver Map Middlewares")," and the following sections."),Object(i.mdx)("h2",{id:"adding-middlewares-at-initialization"},"Adding Middlewares at Initialization"),Object(i.mdx)("p",null,"The most common way of applying Resolver Map Middlewares is at initialization via the ",Object(i.mdx)("inlineCode",{parentName:"p"},"middlewares")," option on the ",Object(i.mdx)("inlineCode",{parentName:"p"},"GraphQLHandler")," constructor."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"import { GraphQLHandler, embed } from 'graphql-mocks';\nimport { middlewareA, middlewareB } from './middlewares';\n\nconst handler = new GraphQLHandler({\n  middlewares: [middlewareA, middlewareB]\n  dependencies: { graphqlSchema }\n});\n")),Object(i.mdx)("h2",{id:"adding-middlewares-via-applymiddlewares"},"Adding Middlewares via ",Object(i.mdx)("inlineCode",{parentName:"h2"},"applyMiddlewares")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object(r.default)({parentName:"li"},{href:"pathname:///api/graphql-mocks/classes/GraphQLHandler.html#applyMiddlewares"}),"API documentation"))),Object(i.mdx)("p",null,"After initialization of the handler middlewares can be applied via the ",Object(i.mdx)("inlineCode",{parentName:"p"},"applyMiddlewares")," method."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.default)({parentName:"pre"},{className:"language-js"}),"import { GraphQLHandler, embed } from 'graphql-mocks';\nimport { middlewareA, middlewareB } from './middlewares';\n\nconst handler = new GraphQLHandler({\n  dependencies: { graphqlSchema }\n});\n\nhandler.applyMiddlewares([fakerMiddleware, loggingMiddleware], { reset: false });\n")),Object(i.mdx)("h3",{id:"options"},"Options"),Object(i.mdx)("p",null,"The second argument to ",Object(i.mdx)("inlineCode",{parentName:"p"},"applyMiddlewares")," is an optional object of options."),Object(i.mdx)("h4",{id:"reset"},Object(i.mdx)("inlineCode",{parentName:"h4"},"reset")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Default: ",Object(i.mdx)("inlineCode",{parentName:"li"},"false"))),Object(i.mdx)("p",null,"If ",Object(i.mdx)("inlineCode",{parentName:"p"},"true")," this option resets the middlewares used to those passed in on the first argument to ",Object(i.mdx)("inlineCode",{parentName:"p"},"applyMiddlewares"),". If ",Object(i.mdx)("inlineCode",{parentName:"p"},"false")," the middlewares are added to the end of the currently existing array of middlewares."))}p.isMDXComponent=!0}}]);