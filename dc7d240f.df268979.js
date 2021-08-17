(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{102:function(e,r,a){"use strict";a.d(r,"a",(function(){return c})),a.d(r,"b",(function(){return m}));var n=a(0),t=a.n(n);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=t.a.createContext({}),p=function(e){var r=t.a.useContext(d),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=p(e.components);return t.a.createElement(d.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},h=t.a.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||b[h]||i;return a?t.a.createElement(m,o(o({ref:r},d),{},{components:a})):t.a.createElement(m,o({ref:r},d))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return i})),a.d(r,"metadata",(function(){return l})),a.d(r,"rightToc",(function(){return o})),a.d(r,"default",(function(){return d}));var n=a(2),t=(a(0),a(102));const i={title:"Managing Resolvers with Middlewares"},l={unversionedId:"resolver-map/managing-resolvers",id:"resolver-map/managing-resolvers",isDocsHomePage:!1,title:"Managing Resolvers with Middlewares",description:"Adding and Managing Resolvers on a Resolver Map is a common task when setting up different scenarios. This library provides two Resolver Map Middleware functions to make this easy, embed and layer, both which can apply Resolver Wrappers.",source:"@site/docs/resolver-map/managing-resolvers.md",slug:"/resolver-map/managing-resolvers",permalink:"/docs/resolver-map/managing-resolvers",version:"current",sidebar:"docs",previous:{title:"Introducing Resolver Map Middlewares",permalink:"/docs/resolver-map/introducing-middlewares"},next:{title:"Available Middlewares",permalink:"/docs/resolver-map/available-middlewares"}},o=[{value:"Using <code>layer</code> and <code>embed</code> with <code>GraphQLHandler</code>",id:"using-layer-and-embed-with-graphqlhandler",children:[]},{value:"Using <code>embed</code>",id:"using-embed",children:[{value:"Add Resolver",id:"add-resolver",children:[]},{value:"Add Resolver with a Resolver Wrapper",id:"add-resolver-with-a-resolver-wrapper",children:[]},{value:"Add Resolver Replacing Existing",id:"add-resolver-replacing-existing",children:[]},{value:"Wrap Existing Resolvers with Resolver Wrappers",id:"wrap-existing-resolvers-with-resolver-wrappers",children:[]}]},{value:"Using <code>layer</code>",id:"using-layer",children:[{value:"Adding Resolve Map Partials",id:"adding-resolve-map-partials",children:[]},{value:"Adding Resolvers with Resolver Wrappers",id:"adding-resolvers-with-resolver-wrappers",children:[]},{value:"Replace Existing Resolvers",id:"replace-existing-resolvers",children:[]}]}],s={rightToc:o};function d({components:e,...r}){return Object(t.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Adding and Managing Resolvers on a Resolver Map is a common task when setting up different scenarios. This library provides two Resolver Map Middleware functions to make this easy, ",Object(t.b)("inlineCode",{parentName:"p"},"embed")," and ",Object(t.b)("inlineCode",{parentName:"p"},"layer"),", both which can apply ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/resolver/introducing-wrappers"}),"Resolver Wrappers"),"."),Object(t.b)("h2",{id:"using-layer-and-embed-with-graphqlhandler"},"Using ",Object(t.b)("inlineCode",{parentName:"h2"},"layer")," and ",Object(t.b)("inlineCode",{parentName:"h2"},"embed")," with ",Object(t.b)("inlineCode",{parentName:"h2"},"GraphQLHandler")),Object(t.b)("p",null,"The generated Resolver Map Middleware from ",Object(t.b)("inlineCode",{parentName:"p"},"embed")," or ",Object(t.b)("inlineCode",{parentName:"p"},"layer")," create Resolver Map Middlewares that most often used with ",Object(t.b)("inlineCode",{parentName:"p"},"GraphQLHandler")," and its ",Object(t.b)("inlineCode",{parentName:"p"},"middlewares")," option."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const embeddedMiddleware = embed(/*...*/);\nconst layeredMiddleware = layer(/*...*/);\n\nconst handler = new GraphQLHandler({\n  resolverMap,\n  middlewares: [embeddedMiddleware, layeredMiddleware],\n});\n")),Object(t.b)("h2",{id:"using-embed"},"Using ",Object(t.b)("inlineCode",{parentName:"h2"},"embed")),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"embed")," is commonly used to:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Target specific parts of the Resolver Map with ",Object(t.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/highlight/introducing-highlight"}),"Highlight")),Object(t.b)("li",{parentName:"ul"},"Add a Resolver with or without Resolver Wrappers"),Object(t.b)("li",{parentName:"ul"},"Target existing Resolvers already on the Resolver Map with Resolver Wrappers")),Object(t.b)("h3",{id:"add-resolver"},"Add Resolver"),Object(t.b)("p",null,"Adds a resolver on the ",Object(t.b)("inlineCode",{parentName:"p"},"users")," field on the ",Object(t.b)("inlineCode",{parentName:"p"},"Query")," type, using a highlight callback that provides a highlight instance. See the ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/highlight/creating-highlighters"}),"available highlighters")," for more options on targeting the schema."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const middleware = embed({\n  resolver: resolverToEmbed,\n  highlight: (h) => h.include(field(['Query', 'users'])),\n});\n")),Object(t.b)("h3",{id:"add-resolver-with-a-resolver-wrapper"},"Add Resolver with a Resolver Wrapper"),Object(t.b)("p",null,"Wrappers can be applied to the resolver being embedded, also. This example passes ",Object(t.b)("inlineCode",{parentName:"p"},"fooWrapper")," in an array of ",Object(t.b)("inlineCode",{parentName:"p"},"wrappers")," that are applied in order by the ",Object(t.b)("inlineCode",{parentName:"p"},"wrappers")," option on `embed."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const middleware = embed({\n  resolver: resolverToEmbed,\n  highlight: (h) => h.include(field(['Query', 'users'])),\n  wrappers: [fooWrapper]\n});\n")),Object(t.b)("h3",{id:"add-resolver-replacing-existing"},"Add Resolver Replacing Existing"),Object(t.b)("p",null,"Pass ",Object(t.b)("inlineCode",{parentName:"p"},"true")," for the ",Object(t.b)("inlineCode",{parentName:"p"},"replace")," option to replace any existing resolvers that might exist on the Resolver Map."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const middleware = embed({\n  resolver: resolverToEmbed,\n  replace: true,\n});\n")),Object(t.b)("h3",{id:"wrap-existing-resolvers-with-resolver-wrappers"},"Wrap Existing Resolvers with Resolver Wrappers"),Object(t.b)("p",null,"By not specifying a resolver, the ",Object(t.b)("inlineCode",{parentName:"p"},"highlight")," option will be used to select existing Resolvers and apply the the Resolver Wrappers passed into the ",Object(t.b)("inlineCode",{parentName:"p"},"wrappers")," option."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const middleware = embed({\n  highlight: (h) => h.include(field(['Query', 'users'])),\n  wrappers: [fooWrapper]\n});\n")),Object(t.b)("h2",{id:"using-layer"},"Using ",Object(t.b)("inlineCode",{parentName:"h2"},"layer")),Object(t.b)("p",null,"Take fragments, or Resolver Map partials, and layer one or more lazily into a Resolver Map with the generated Resolver Map Middleware. These Resolver Map Partials can be defined separately and combined as needed with ",Object(t.b)("inlineCode",{parentName:"p"},"layer"),"."),Object(t.b)("h3",{id:"adding-resolve-map-partials"},"Adding Resolve Map Partials"),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const queryPersonPartial = {\n  Query: {\n    person: queryPersonResolver\n  },\n};\n\nconst mutationAddPersonPartial = {\n  Mutation: {\n    addPerson: mutationAddPersonResolver\n  }\n}\n\nconst middleware = layer([queryPersonPartial, mutationAddPersonPartial]);\n")),Object(t.b)("p",null,"The resulting ",Object(t.b)("inlineCode",{parentName:"p"},"middleware")," in this example would lazily apply the ",Object(t.b)("inlineCode",{parentName:"p"},"queryPersonPartial"),", then the ",Object(t.b)("inlineCode",{parentName:"p"},"mutationAddPersonPartial")," via the generated Resolver Map Middleware."),Object(t.b)("h3",{id:"adding-resolvers-with-resolver-wrappers"},"Adding Resolvers with Resolver Wrappers"),Object(t.b)("p",null,"Additionally, the Resolvers that are being layered in can also be wrapped with Resolver Wrappers by passing a ",Object(t.b)("inlineCode",{parentName:"p"},"wrappers")," option on the second argument to ",Object(t.b)("inlineCode",{parentName:"p"},"layer"),"."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const middleware = layer(\n  [resolverMapPartial],\n  { wrappers: [fooWrapper, barWrapper] },\n);\n")),Object(t.b)("h3",{id:"replace-existing-resolvers"},"Replace Existing Resolvers"),Object(t.b)("p",null,"As a safeguard, by default, resolver being added by ",Object(t.b)("inlineCode",{parentName:"p"},"layer")," won't replace existing resolvers unless the ",Object(t.b)("inlineCode",{parentName:"p"},"replace")," true option is provided."),Object(t.b)("pre",null,Object(t.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const middleware = layer(\n  [resolverMapPartial],\n  { replace: true },\n);\n")))}d.isMDXComponent=!0}}]);