(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){return function(t){var n=m(t.components);return r.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,u=c["".concat(i,".").concat(d)]||c[d]||h[d]||o;return n?r.a.createElement(u,p(p({ref:t},l),{},{components:n})):r.a.createElement(u,p({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},133:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.GraphQLResult=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("strong",null,"Result: "),r.default.createElement("pre",{className:"graphql-result"},JSON.stringify(e.result,null,2)))};var r=a(n(0))},413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:{films:[{title:"The Notebook",year:"2004",actors:[{name:"Rachel McAdams"},{name:"Ryan Gosling"}]}]}}},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:{addFilm:{title:"Cast Away",year:"2000",actors:[{name:"Tom Hanks"},{name:"Wilson the Volleyball"}]}}}},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return x}));var a=n(2),r=n(7),o=(n(0),n(123)),i=n(133),l={rightToc:[]};function p(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),'import { Paper } from "graphql-paper";\nimport { GraphQLHandler } from "graphql-mocks";\nimport { extractDependencies } from "graphql-mocks/resolver";\n\nconst graphqlSchema = `\n  schema {\n    query: Query\n  }\n\n  type Query {\n    films: [Film!]!\n  }\n\n  type Film {\n    title: String!\n    year: String!\n    actors: [Actor!]!\n  }\n\n  type Actor {\n    name: String!\n  }\n`;\n\nasync function run() {\n  const paper = new Paper(graphqlSchema);\n\n  // seed with some data about the film "The Notebook"\n  await paper.mutate(({ create }) => {\n    const rachel = create("Actor", {\n      name: "Rachel McAdams",\n    });\n\n    const ryan = create("Actor", {\n      name: "Ryan Gosling",\n    });\n\n    create("Film", {\n      title: "The Notebook",\n      year: "2004",\n      actors: [rachel, ryan],\n    });\n  });\n\n  const resolverMap = {\n    Query: {\n      films(root, args, context, info) {\n        const { paper } = extractDependencies(context, ["paper"]);\n\n        // return all Documents of type `Film`\n        return paper.data.Film;\n      },\n    },\n  };\n\n  const handler = new GraphQLHandler({\n    resolverMap,\n    dependencies: { graphqlSchema, paper },\n  });\n\n  const result = await handler.query(`\n    query {\n      films {\n        title\n        year\n        actors {\n          name\n        }\n      }\n    }\n  `);\n  console.log(result);\n}\n\n// kick everything off!\nrun();\n')))}p.isMDXComponent=!0;var s=n(413),c=n.n(s),d={rightToc:[]};function m(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),'import { Paper } from "graphql-paper";\nimport { GraphQLHandler } from "graphql-mocks";\nimport { extractDependencies } from "graphql-mocks/resolver";\nimport { v4 as uuid } from "uuid";\n\nconst graphqlSchema = `\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n\n  type Query {\n    noop: Boolean\n  }\n\n  type Mutation {\n    addFilm(input: AddFilmInput): Film!\n  }\n\n  type Film {\n    id: ID!\n    title: String!\n    year: String!\n    actors: [Actor!]!\n  }\n\n  type Actor {\n    id: ID!\n    name: String!\n  }\n\n  input AddFilmInput {\n    title: String!\n    year: String!\n    actorIds: [ID!]\n  }\n`;\n\nasync function run() {\n  const paper = new Paper(graphqlSchema);\n\n  const { tomHanks, wilson } = await paper.mutate(({ create }) => {\n    const tomHanks = create("Actor", {\n      id: uuid(),\n      name: "Tom Hanks",\n    });\n\n    const wilson = create("Actor", {\n      id: uuid(),\n      name: "Wilson the Volleyball",\n    });\n\n    return { tomHanks, wilson };\n  });\n\n  const resolverMap = {\n    Mutation: {\n      addFilm(root, args, context, info) {\n        const { paper } = extractDependencies(context, ["paper"]);\n\n        // find Actor documents based on args.input.actorIds\n        const filmActors = (args.input.actorIds ?? [])\n          .map((actorId) =>\n            paper.data.Actor.find((actor) => actor.id === actorId)\n          )\n          .filter(Boolean);\n\n        // return created Film document, matching `addFilm` return type: Film!\n        const newFilm = paper.mutate(({ create }) => {\n          return create("Film", {\n            id: uuid(),\n            title: args.input.title,\n            year: args.input.year,\n            actors: filmActors,\n          });\n        });\n\n        return newFilm;\n      },\n    },\n  };\n\n  const handler = new GraphQLHandler({\n    resolverMap,\n    dependencies: { graphqlSchema, paper },\n  });\n\n  const result = await handler.query(\n    `\n    mutation($addFilmInput: AddFilmInput) {\n      addFilm(input: $addFilmInput) {\n        title\n        year\n        actors {\n          name\n        }\n      }\n    }\n  `,\n    {\n      addFilmInput: {\n        title: "Cast Away",\n        year: "2000",\n        actorIds: [tomHanks.id, wilson.id],\n      },\n    }\n  );\n  console.log(result);\n}\n\n// kick everything off!\nrun();\n')))}m.isMDXComponent=!0;var u=n(414),h=n.n(u),b={title:"Using Paper with graphql-mocks"},f={unversionedId:"guides/paper",id:"guides/paper",isDocsHomePage:!1,title:"Using Paper with graphql-mocks",description:"GraphQL Paper can be used on its own but has been designed and tested to integrate with graphql-mocks.",source:"@site/docs/guides/paper.md",slug:"/guides/paper",permalink:"/docs/guides/paper",version:"current",sidebar:"docs",previous:{title:"Nock",permalink:"/docs/network/nock"},next:{title:"Automatic Resolver Filtering with Wrappers",permalink:"/docs/guides/automatic-filtering"}},g=[{value:"Setup",id:"setup",children:[]},{value:"Using <code>Paper</code> within Resolver Functions",id:"using-paper-within-resolver-functions",children:[]},{value:"Querying Data",id:"querying-data",children:[]},{value:"Mutating Data",id:"mutating-data",children:[]},{value:"Separation of Concrete and Derived Data",id:"separation-of-concrete-and-derived-data",children:[{value:"Concrete Data",id:"concrete-data",children:[]},{value:"Derived Data",id:"derived-data",children:[]}]}],O={rightToc:g};function x(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"GraphQL Paper can be used on its own but has been designed and tested to integrate with ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks"),"."),Object(o.mdx)("p",null,"For more features specific to GraphQL Paper and its capabilities check out the ",Object(o.mdx)("a",Object(a.default)({parentName:"p"},{href:"/docs/paper/introducing-paper"}),"GraphQL Paper Documentation"),"."),Object(o.mdx)("h2",{id:"setup"},"Setup"),Object(o.mdx)("p",null,"The only setup after installing the ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-paper")," package is to import it, create a new instance and add it to the GraphQL Handler's dependencies."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),"import { Paper } from 'graphql-paper';\nimport { GraphQLHandler } from 'graphql-mocks';\nimport graphqlSchema from './schema';\n\nconst paper = new Paper(graphqlSchema);\nconst handler = new GraphQLHandler({ dependencies: { graphqlSchema, paper }})\n")),Object(o.mdx)("h2",{id:"using-paper-within-resolver-functions"},"Using ",Object(o.mdx)("inlineCode",{parentName:"h2"},"Paper")," within Resolver Functions"),Object(o.mdx)("p",null,"Within a resolver function the ",Object(o.mdx)("inlineCode",{parentName:"p"},"paper")," dependency can be extracted using ",Object(o.mdx)("inlineCode",{parentName:"p"},"extractDependencies"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),"import { extractDependencies } from 'graphql-mocks/resolver';\n\nfunction resolver(parent, args, context, info) {\n    const paper = extractDependencies(context, ['paper']);\n    // do something with the paper store...\n    // see below for query and mutation examples\n}\n")),Object(o.mdx)("h2",{id:"querying-data"},"Querying Data"),Object(o.mdx)("p",null,"Only top-level Query resolvers need to be specified for the GraphQL Paper Document. The rercursive data structure of Paper Documents from the store will follow Connections to other Paper Documents, automatically resolving the fields backed by ",Object(o.mdx)("em",{parentName:"p"},"Concrete Data"),". In the case of ",Object(o.mdx)("em",{parentName:"p"},"Derived Data")," there are some examples and patterns to follow below."),Object(o.mdx)(p,{mdxType:"PaperQueryingExample"}),Object(o.mdx)(i.GraphQLResult,{result:c.a,mdxType:"GraphQLResult"}),Object(o.mdx)("h2",{id:"mutating-data"},"Mutating Data"),Object(o.mdx)("p",null,"Similar to ",Object(o.mdx)("em",{parentName:"p"},"Querying Data")," only the top-level Mutation resolvers need to be defined returning necessary documents and nested ",Object(o.mdx)("em",{parentName:"p"},"Concrete Data")," will be automatically resolved."),Object(o.mdx)(m,{mdxType:"PaperMutationExample"}),Object(o.mdx)(i.GraphQLResult,{result:h.a,mdxType:"GraphQLResult"}),Object(o.mdx)("h2",{id:"separation-of-concrete-and-derived-data"},"Separation of Concrete and Derived Data"),Object(o.mdx)("p",null,"One important thing to consider when using GraphQL Paper with ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," is how data should be modeled. Most of the time the data is dealt with as ",Object(o.mdx)("em",{parentName:"p"},"Concrete Data")," and should be stored in the GraphQL Paper store. In other cases it's ",Object(o.mdx)("em",{parentName:"p"},"Derived Data")," and should be handled by ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," and its tools. These definitions and examples are expanded on below."),Object(o.mdx)("h3",{id:"concrete-data"},"Concrete Data"),Object(o.mdx)("p",null,"Concrete data usually represents a distinct entity, might have an ID and defined property values. In the example of GraphQL Paper concrete data is represented by a Paper Document and its properties. Not all GraphQL Types or fields on GraphQL Types should be reflected by concrete data, which is covered in the ",Object(o.mdx)("em",{parentName:"p"},"Derived Data")," sections below."),Object(o.mdx)("p",null,"An example of concrete data could be a ",Object(o.mdx)("inlineCode",{parentName:"p"},"Film")," which is unique and represents a singular entity."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-graphql"}),"type Film {\n  title: String!\n}\n")),Object(o.mdx)("p",null,"represented concretely by a Paper Document:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),"{\n  title: 'The Notebook'\n}\n")),Object(o.mdx)("p",null,"This is an example of ",Object(o.mdx)("em",{parentName:"p"},"Concrete Data")," represented by a GraphQL Paper Document where its properties mirror the GraphQL Types and its fields which allows for the data to resolve automatically, and recursively through connections and their fields."),Object(o.mdx)("h3",{id:"derived-data"},"Derived Data"),Object(o.mdx)("p",null,"Derived Data represents data that does not stand on its own and should be handled by ",Object(o.mdx)("inlineCode",{parentName:"p"},"graphql-mocks")," in helping resolve a query with supporting data from the GraphQL Paper store. There are two main types of ",Object(o.mdx)("em",{parentName:"p"},"Derived Data")," when dealing and resolving GraphQL queries."),Object(o.mdx)("h4",{id:"derived-types"},"Derived Types"),Object(o.mdx)("p",null,"Derived types are types whose definition is derived by the concrete data it contains but on its own is not reflected in the store. The container type often acts a logical grouping."),Object(o.mdx)("p",null,"In this example ",Object(o.mdx)("inlineCode",{parentName:"p"},"FilmSearchResults")," represents a container containing the actual results of films and the count. This type should not have any documents stored in GraphQL Paper but can still be resolved by a ",Object(o.mdx)("em",{parentName:"p"},"Resolver")," or ",Object(o.mdx)("em",{parentName:"p"},"Resolver Wrapper"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-graphql"}),"type FilmSearchResults {\n  results: [Film!]!\n  count: Int!\n}\n")),Object(o.mdx)("h5",{id:"using-resolvers"},"Using Resolvers"),Object(o.mdx)("p",null,"A ",Object(o.mdx)("em",{parentName:"p"},"Resolver")," function can be used to resolve the correct shape of the ",Object(o.mdx)("em",{parentName:"p"},"Derived Data"),". In the case a ",Object(o.mdx)("em",{parentName:"p"},"Resolver")," function already exists then using a ",Object(o.mdx)("em",{parentName:"p"},"Resolver Wrapper")," is appropriate (see below)."),Object(o.mdx)("p",null,"This example uses the ",Object(o.mdx)("inlineCode",{parentName:"p"},"FilmSearchResults")," type from above and assumes that we have a top-level query field ",Object(o.mdx)("inlineCode",{parentName:"p"},"searchFilms"),":"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  searchFilm(query: String!): FilmSearchResults!\n}\n")),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"searchFilm")," resolver function could look like:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),'const  searchFilmResolver = (root, args, context, info) => {\n  const { paper } = extractDependencies(context, ["paper"]);\n  const films = paper.data.Film.filter((film) => film.title.includes(args.query));\n\n  // return the required shape of `FilmSearchResults`\n  return {\n    results: films,\n    count: films.length,\n  };\n}\n')),Object(o.mdx)("p",null,"This resolver can be applied to the initial ",Object(o.mdx)("inlineCode",{parentName:"p"},"resolverMap")," passed into the ",Object(o.mdx)("a",Object(a.default)({parentName:"p"},{href:"/docs/getting-started/create-handler"}),"GraphQL Handler")," or applied via ",Object(o.mdx)("a",Object(a.default)({parentName:"p"},{href:"/docs/resolver-map/managing-resolvers#using-embed"}),Object(o.mdx)("inlineCode",{parentName:"a"},"embed")),"."),Object(o.mdx)("h5",{id:"using-resolver-wrappers"},"Using Resolver Wrappers"),Object(o.mdx)("p",null,"In some special cases the data might already be represented by a field with a resolver that resolves the correct data but not in the supporting shape of the ",Object(o.mdx)("em",{parentName:"p"},"Derived Type"),". In this case a ",Object(o.mdx)("em",{parentName:"p"},"Resolver Wrapper")," can be used to retrieve the data of the original resolver and return a modified form. This has the added benefit of decoupling the resolver sourcing the data from the wrapper that transforms it to the shape expected, making the wrapper re-usable also in cases where this transform might be needed again."),Object(o.mdx)("p",null,"In this example the ",Object(o.mdx)("inlineCode",{parentName:"p"},"films")," property on an ",Object(o.mdx)("inlineCode",{parentName:"p"},"Actor")," might already be returning the ",Object(o.mdx)("inlineCode",{parentName:"p"},"films")," property but not in the shape of ",Object(o.mdx)("inlineCode",{parentName:"p"},"FilmSearchResults"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-graphql"}),"type Actor {\n  films(query: String!): FilmSearchResults!\n}\n")),Object(o.mdx)("p",null,"Assuming the original resolver returns an array of ",Object(o.mdx)("inlineCode",{parentName:"p"},"Film")," documents we could use this wrapper:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),"import { createWrapper, WrapperFor } from 'graphql-mocks/resolver';\n\nconst wrapper = createWrapper('FilmSearchResults', WrapperFor.FIELD, function(originalResolver, wrapperOptions) {\n  return function filmSearchResultsWrapper(parent, args, context, info) {\n    const films = await originalResolver(parent, args, context, info);\n    return {\n      results: films,\n      count: films.length\n    };\n  };\n});\n")),Object(o.mdx)("h4",{id:"derived-fields"},"Derived Fields"),Object(o.mdx)("p",null,"In other cases derived fields could be something that derives its value from other fields or when filtering the existing data based on the arguments."),Object(o.mdx)("p",null,"In the case that the derived data is filtered or refined based on arguments, and the data exists by the resolver already, it's best to use a resolver wrapper. See ",Object(o.mdx)("a",Object(a.default)({parentName:"p"},{href:"/docs/guides/automatic-filtering"}),Object(o.mdx)("em",{parentName:"a"},"Automatic Resolver Filtering with Wrappers"))," for ideas and examples."),Object(o.mdx)("p",null,"This is an example of a value being derived from other fields. We wouldn't want to store the ",Object(o.mdx)("inlineCode",{parentName:"p"},"speed")," on the Paper Document since it can be determined from ",Object(o.mdx)("inlineCode",{parentName:"p"},"miles")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"timeInHours"),". The ",Object(o.mdx)("inlineCode",{parentName:"p"},"speed")," data itself would would be best represented by a resolver."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-graphql"}),"type Trip {\n  miles: Float!\n  timeInHours: Float!\n\n  # miles per hour (miles / timeInHours)\n  speed: Float!\n}\n")),Object(o.mdx)("p",null,"The resolver for the ",Object(o.mdx)("inlineCode",{parentName:"p"},"speed")," field would look like:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(a.default)({parentName:"pre"},{className:"language-js"}),"function tripSpeedResolver(parent, args, context, info) {\n  const { miles, timeInHours } = parent;\n  return miles / timeInHours;\n}\n")),Object(o.mdx)("p",null,"This resolver can be applied to the initial ",Object(o.mdx)("inlineCode",{parentName:"p"},"resolverMap")," passed into the ",Object(o.mdx)("a",Object(a.default)({parentName:"p"},{href:"/docs/getting-started/create-handler"}),"GraphQL Handler")," or applied via ",Object(o.mdx)("a",Object(a.default)({parentName:"p"},{href:"/docs/resolver-map/managing-resolvers#using-embed"}),Object(o.mdx)("inlineCode",{parentName:"a"},"embed")),"."))}x.isMDXComponent=!0}}]);