(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return s})),r.d(t,"MDXProvider",(function(){return u})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return p})),r.d(t,"withMDXComponents",(function(){return g}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),g=function(e){return function(t){var r=p(t.components);return i.a.createElement(e,o({},t,{components:r}))}},p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),s=p(r),g=n,u=s["".concat(o,".").concat(g)]||s[g]||m[g]||a;return r?i.a.createElement(u,l(l({ref:t},h),{},{components:r})):i.a.createElement(u,l({ref:t},h))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var h={};for(var l in t)hasOwnProperty.call(t,l)&&(h[l]=t[l]);h.originalType=e,h.mdxType="string"==typeof e?e:n,o[1]=h;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return h})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(7),a=(r(0),r(133)),o={title:"Create Custom Highlighters"},h={unversionedId:"highlight/creating-highlighters",id:"highlight/creating-highlighters",isDocsHomePage:!1,title:"Create Custom Highlighters",description:"Highlighters return highlighted References, that is an array of either Type References or Field References, for a given schema. There are already a number of useful highlighters provided by graphql-mocks out-of-the-box.",source:"@site/docs/highlight/creating-highlighters.md",slug:"/highlight/creating-highlighters",permalink:"/docs/highlight/creating-highlighters",version:"current",sidebar:"docs",previous:{title:"Available Highlighters",permalink:"/docs/highlight/available-highlighters"},next:{title:"Introducing GraphQL Paper",permalink:"/docs/paper/introducing-paper"}},l=[{value:"Stateless Highlighters",id:"stateless-highlighters",children:[]},{value:"Stateful Highlighters",id:"stateful-highlighters",children:[]},{value:"Highlight All",id:"highlight-all",children:[]}],c={rightToc:l};function s(e){var t=e.components,r=Object(i.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(n.default)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Highlighters return highlighted ",Object(a.mdx)("a",Object(n.default)({parentName:"p"},{href:"/docs/highlight/introducing-highlight#references"}),"References"),", that is an array of either ",Object(a.mdx)("a",Object(n.default)({parentName:"p"},{href:"pathname:///api/graphql-mocks/modules/highlight.types.html#TypeReference"}),"Type References")," or ",Object(a.mdx)("a",Object(n.default)({parentName:"p"},{href:"pathname:///api/graphql-mocks/modules/highlight.types.html#FieldReference"}),"Field References"),", for a given schema. There are already a number of useful highlighters provided by graphql-mocks out-of-the-box."),Object(a.mdx)("p",null,"A highlighter must conform to the ",Object(a.mdx)("a",Object(n.default)({parentName:"p"},{href:"pathname:///api/graphql-mocks/interfaces/highlight.types.Highlighter.html"}),Object(a.mdx)("inlineCode",{parentName:"a"},"Highlighter")," interface"),". This interface is simply a ",Object(a.mdx)("inlineCode",{parentName:"p"},"mark")," function on an object:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.default)({parentName:"pre"},{}),"{\n  mark(schema: GraphQLSchema): Reference[]\n}\n")),Object(a.mdx)("h2",{id:"stateless-highlighters"},"Stateless Highlighters"),Object(a.mdx)("p",null,"The simplest highlighter to create is one that does not have any state, which can simply be a POJO that conforms to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Highlighter")," interface."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-js"}),"const customHighlighter = {\n  mark(schema) {\n    // return an array of highlighted References\n    return [];\n  }\n}\n")),Object(a.mdx)("p",null,"If there are options to the highlighter consider using a function factory:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-js"}),"export const customHighlighter = (options) => {\n  // make use of `options` in scope\n  return {\n    mark(schema) {\n      // return an array of highlighted References\n      return [];\n    }\n  }\n}\n")),Object(a.mdx)("h2",{id:"stateful-highlighters"},"Stateful Highlighters"),Object(a.mdx)("p",null,"If a highlighter needs to hold on to state it's useful to create a class that implements the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Highlighter")," interface, like many of the highlighters provided out-of-the-box, with additional state can be kept on class properties."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-js"}),"import { Highlighter } from 'graphql-mocks/highlight/types';\n\nclass CustomHighlighter implements Highlighter {\n  constructor(/* relevant options*/) {\n  }\n\n  // required `mark` method\n  mark(schema) {\n    // return an array of highlighted References\n    return [];\n  }\n}\n")),Object(a.mdx)("p",null,"Generally, by design highlighters if there are options to a Highlighter for a constructor it's easier to provide a factory function to pass along and construct the instance. For example, continuing with the ",Object(a.mdx)("inlineCode",{parentName:"p"},"CustomHighlighter")," class above:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-js"}),"export const customHighlighter = (options) => new CustomHighlighter(options);\n")),Object(a.mdx)("p",null,"While minimal it provides a more ergonomic API without have to ",Object(a.mdx)("inlineCode",{parentName:"p"},"new")," each Highlighter for use."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-js"}),"hi(graphqlSchema).include(\n  customHighlighter({ /* options */ })\n);\n")),Object(a.mdx)("h2",{id:"highlight-all"},"Highlight All"),Object(a.mdx)("p",null,'If a highlighter has the notion of "highlight all", by convention, it\'s useful to consider these these two cases:'),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Use the ",Object(a.mdx)("inlineCode",{parentName:"li"},"HIGHLIGHT_ALL")," constant as an option"),Object(a.mdx)("li",{parentName:"ul"},"If possible, calling the highlighter without arguments, provides the highlight all case")))}s.isMDXComponent=!0}}]);