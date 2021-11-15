(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{129:function(e,n,r){"use strict";r.r(n),r.d(n,"MDXContext",(function(){return l})),r.d(n,"MDXProvider",(function(){return m})),r.d(n,"mdx",(function(){return b})),r.d(n,"useMDXComponents",(function(){return u})),r.d(n,"withMDXComponents",(function(){return p}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){return function(n){var r=u(n.components);return o.a.createElement(e,i({},n,{components:r}))}},u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(r),p=t,m=l["".concat(i,".").concat(p)]||l[p]||w[p]||a;return r?o.a.createElement(m,s(s({ref:n},c),{},{components:r})):o.a.createElement(m,s({ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(2),o=r(7),a=(r(0),r(129)),i={id:"introducing-network-handlers",title:"Introducing Network Handlers"},c={unversionedId:"network/introducing-network-handlers",id:"network/introducing-network-handlers",isDocsHomePage:!1,title:"Introducing Network Handlers",description:"GraphQL is network-agnostic and works across any protocol where requests and responses can be sent and received. This flexibility extends to graphql-mocks allowing for writing mocks once and reusing them in node.js, the browser, and with any library that can handle requests and responses.",source:"@site/docs/network/introducing-network-handlers.md",slug:"/network/introducing-network-handlers",permalink:"/docs/network/introducing-network-handlers",version:"current",sidebar:"docs",previous:{title:"Handler State",permalink:"/docs/handler/handler-state"},next:{title:"Express",permalink:"/docs/network/express"}},s=[{value:"Supported Node Network Handlers",id:"supported-node-network-handlers",children:[{value:"Express",id:"express",children:[]},{value:"Nock",id:"nock",children:[]}]},{value:"Supported Browser Network Handlers",id:"supported-browser-network-handlers",children:[{value:"<code>msw</code> (mock service worker)",id:"msw-mock-service-worker",children:[]}]}],d={rightToc:s};function l(e){var n=e.components,r=Object(o.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(t.default)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"GraphQL is network-agnostic and works across any protocol where requests and responses can be sent and received. This flexibility extends to ",Object(a.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," allowing for writing mocks once and reusing them in node.js, the browser, and with any library that can handle requests and responses."),Object(a.mdx)("p",null,"Depending on the situation different network handling will be appropriate for your mocking use-case. To make things easier ",Object(a.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," provides packages to integrate with different network scenarios. These packages start with the ",Object(a.mdx)("inlineCode",{parentName:"p"},"network")," prefix (ie: ",Object(a.mdx)("inlineCode",{parentName:"p"},"@graphql-mocks/network-*"),")."),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"More Network Handlers coming soon!")),Object(a.mdx)("h2",{id:"supported-node-network-handlers"},"Supported Node Network Handlers"),Object(a.mdx)("h3",{id:"express"},"Express"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"@graphql-mocks/network-express")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(t.default)({parentName:"li"},{href:"/docs/network/express"}),"Documentation"))),Object(a.mdx)("h3",{id:"nock"},"Nock"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"@graphql-mocks/network-nock")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(t.default)({parentName:"li"},{href:"/docs/network/nock"}),"Documentation"))),Object(a.mdx)("h2",{id:"supported-browser-network-handlers"},"Supported Browser Network Handlers"),Object(a.mdx)("h3",{id:"msw-mock-service-worker"},Object(a.mdx)("inlineCode",{parentName:"h3"},"msw")," (mock service worker)"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"@graphql-mocks/network-msw")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(t.default)({parentName:"li"},{href:"/docs/network/msw"}),"Documentation"))))}l.isMDXComponent=!0}}]);