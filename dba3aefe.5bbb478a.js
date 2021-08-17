(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?a.a.createElement(h,p(p({ref:n},c),{},{components:t})):a.a.createElement(h,p({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},111:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),a=t.n(r);function i(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"Result: "),a.a.createElement("pre",{className:"graphql-result"},JSON.stringify(e.result,null,2)))}},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return h})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return g})),t.d(n,"default",(function(){return y}));var r=t(2),a=(t(0),t(102)),i=t(111);const o={rightToc:[]};function p({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import schemaString from "./schema";\n\nimport { Paper } from "graphql-paper";\nimport { graphql, buildSchema } from "graphql";\n\nasync function run() {\n  const graphqlSchema = buildSchema(schemaString);\n  const paper = new Paper(graphqlSchema);\n\n  await paper.mutate(({ create }) => {\n    create("Film", {\n      id: "1",\n      title: "Jurassic Park",\n      year: "1993",\n      actors: [\n        { id: "1", name: "Jeff Goldblum" },\n        { id: "2", name: "Wayne Knight" },\n      ],\n    });\n\n    create("Film", {\n      id: "2",\n      title: "Office Space",\n      year: "1999",\n      actors: [\n        { id: "3", name: "Ron Livingston" },\n        { id: "4", name: "Jennifer Aniston" },\n      ],\n    });\n  });\n\n  const queryType = graphqlSchema.getQueryType();\n  const queryTypeFields = queryType.getFields();\n\n  queryTypeFields.films.resolve = function filmsResolver(\n    root,\n    args,\n    context,\n    info\n  ) {\n    // return all `Film` Documents\n    return paper.data.Film;\n  };\n\n  queryTypeFields.film.resolve = function filmResolver(\n    root,\n    args,\n    context,\n    info\n  ) {\n    return paper.data.Film.find((film) => film.id === args.filmId) ?? null;\n  };\n\n  const query = `\n    query {\n      film(filmId: "1") {\n        id\n        title\n        year\n        actors {\n          id\n          name\n        }\n      }\n\n      films {\n        id\n        title\n        year\n\n        # will return the connected Actor documents automatically\n        actors {\n          id\n          name\n        }\n      }\n    }\n  `;\n\n  const result = await graphql({\n    source: query,\n    schema: graphqlSchema,\n  });\n\n  console.log(result);\n}\n\n// kick everything off!\nrun();\n')))}p.isMDXComponent=!0;var l={data:{film:{actors:[{id:"1",name:"Jeff Goldblum"},{id:"2",name:"Wayne Knight"}],id:"1",title:"Jurassic Park",year:"1993"},films:[{id:"1",title:"Jurassic Park",year:"1993",actors:[{id:"1",name:"Jeff Goldblum"},{id:"2",name:"Wayne Knight"}]},{id:"2",title:"Office Space",year:"1999",actors:[{id:"3",name:"Ron Livingston"},{id:"4",name:"Jennifer Aniston"}]}]}};const c={rightToc:[]};function s({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const graphqlSchema = `\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n\n  type Query {\n    films: [Film!]!\n    film(filmId: ID!): Film\n  }\n\n  type Mutation {\n    addFilm(input: AddFilmInput!): Film!\n  }\n\n  type Film {\n    id: ID!\n    title: String!\n    year: String!\n    actors: [Actor!]!\n  }\n\n  type Actor {\n    id: ID!\n    name: String!\n  }\n\n  input AddFilmInput {\n    title: String!\n    year: String!\n    actors: [AddFilmActorInput!]!\n  }\n\n  input AddFilmActorInput {\n    name: String!\n  }\n`;\n\n// kick everything off\nexport default graphqlSchema;\n")))}s.isMDXComponent=!0;const m={rightToc:[]};function u({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import schemaString from "./schema";\n\nimport { Paper } from "graphql-paper";\nimport { graphql, buildSchema } from "graphql";\n\nasync function run() {\n  const graphqlSchema = buildSchema(schemaString);\n  const paper = new Paper(graphqlSchema);\n\n  const mutationType = graphqlSchema.getMutationType();\n  const mutationTypeFields = mutationType.getFields();\n\n  mutationTypeFields.addFilm.resolve = function filmsResolver(\n    root,\n    args,\n    context,\n    info\n  ) {\n    return paper.mutate(({ create, getStore }) => {\n      const store = getStore();\n      const maxIdReducer = (previous, { id }) =>\n        Math.max(Number(previous), Number(id)).toString();\n      let lastFilmId = store.Film.reduce(maxIdReducer, "0");\n      let lastActorId = store.Actor.reduce(maxIdReducer, "0");\n\n      const newFilm = create("Film", {\n        id: ++lastFilmId,\n        title: args.input.title,\n        year: args.input.year,\n      });\n\n      newFilm.actors = args.input.actors.map((actor) => {\n        return create("Actor", {\n          id: ++lastActorId,\n          ...actor,\n        });\n      });\n\n      return newFilm;\n    });\n  };\n\n  const mutation = `\n    mutation($addFilmInput: AddFilmInput!) {\n      addFilm(input: $addFilmInput) {\n        id\n        title\n        year\n        actors {\n          id\n          name\n        }\n      }\n    }\n  `;\n\n  const mutationInput = {\n    title: "My Girl",\n    year: "1991",\n    actors: [{ name: "Anna Chlumsky" }],\n  };\n\n  const result = await graphql({\n    source: mutation,\n    schema: graphqlSchema,\n    variableValues: { addFilmInput: mutationInput },\n  });\n\n  console.log(result);\n}\n\n// kick everything off!\nrun();\n')))}u.isMDXComponent=!0;var d={data:{addFilm:{actors:[{id:"1",name:"Anna Chlumsky"}],id:"1",title:"My Girl",year:"1991"}}};const h={id:"with-graphql",title:"Using GraphQL Paper with GraphQL"},b={unversionedId:"paper/guides/with-graphql",id:"paper/guides/with-graphql",isDocsHomePage:!1,title:"Using GraphQL Paper with GraphQL",description:"GraphQL Paper is built on the core graphql library and works well with its default resolvers. GraphQL Paper should also work well with other javascript systems that use resolver functions, too. The best integrations will still be with graphql-mocks and its packages which are designed and tested together.",source:"@site/docs/paper/guides/with-graphql.md",slug:"/paper/guides/with-graphql",permalink:"/docs/paper/guides/with-graphql",version:"current",sidebar:"docs",previous:{title:"Generating Data with Factories",permalink:"/docs/paper/guides/factories"},next:{title:"Managing IDs",permalink:"/docs/paper/guides/managing-ids"}},g=[{value:"Example",id:"example",children:[{value:"Schema",id:"schema",children:[]},{value:"Querying",id:"querying",children:[]},{value:"Mutating",id:"mutating",children:[]}]}],f={rightToc:g};function y({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL Paper is built on the core ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js"}),Object(a.b)("inlineCode",{parentName:"a"},"graphql")," library")," and works well with its default resolvers. GraphQL Paper should also work well with other javascript systems that use resolver functions, too. The best integrations will still be with ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-mocks")," and its packages which are designed and tested together."),Object(a.b)("p",null,"If using GraphQL Paper with ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-mocks")," check out the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/paper"}),"guide")," dedicated to setup, common patterns and techniques."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Here is an example of GraphQL Paper working with the core ",Object(a.b)("inlineCode",{parentName:"p"},"graphql")," package"),Object(a.b)("h3",{id:"schema"},"Schema"),Object(a.b)("p",null,"The full ",Object(a.b)("em",{parentName:"p"},"Querying")," and ",Object(a.b)("em",{parentName:"p"},"Mutating")," examples below make use of the following schema:"),Object(a.b)(s,{mdxType:"ExampleSchema"}),Object(a.b)("h3",{id:"querying"},"Querying"),Object(a.b)("p",null,"To resolve queries in a GraphQL Resolver return data from the ",Object(a.b)("inlineCode",{parentName:"p"},"paper.data")," property on a ",Object(a.b)("inlineCode",{parentName:"p"},"Paper")," instance. The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/paper/querying-data"}),Object(a.b)("em",{parentName:"a"},"GraphQL Paper Querying Data documentation"))," provides more information on how to retrieve data with GraphQL Paper."),Object(a.b)("p",null,"GraphQL Paper also provides connections between different types and their corresponding documents out of the box which allows for the resolution of resolvers to work recursively. To kick off this behavior ",Object(a.b)("em",{parentName:"p"},"return")," the appropriate Document or list of Documents from the top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Query")," resolvers."),Object(a.b)("h4",{id:"complete-query-example"},"Complete Query Example"),Object(a.b)("p",null,"In this example returning the resolvers for a list of ",Object(a.b)("inlineCode",{parentName:"p"},"[Film!]")," from the ",Object(a.b)("inlineCode",{parentName:"p"},"Query.films")," or a single ",Object(a.b)("inlineCode",{parentName:"p"},"Film")," by ID from ",Object(a.b)("inlineCode",{parentName:"p"},"Query.film")," will also satisify any queries that request a film's ",Object(a.b)("inlineCode",{parentName:"p"},"Actor"),"s by returning the ",Object(a.b)("inlineCode",{parentName:"p"},"actors")," connections on the ",Object(a.b)("inlineCode",{parentName:"p"},"Film")," document."),Object(a.b)("p",null,"Using the ",Object(a.b)("inlineCode",{parentName:"p"},"graphql")," npm package with the above schema for an end-to-end example involving mutations."),Object(a.b)(p,{mdxType:"QueryExample"}),Object(a.b)(i.a,{result:l,mdxType:"GraphQLResult"}),Object(a.b)("h3",{id:"mutating"},"Mutating"),Object(a.b)("p",null,"Mutations also work with GraphQL Paper and ",Object(a.b)("inlineCode",{parentName:"p"},"graphql"),". The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/paper/mutating-data"}),Object(a.b)("em",{parentName:"a"},"GraphQL Paper Mutating Data documentation"))," provides more information on how mutating data with GraphQL Paper."),Object(a.b)("h4",{id:"returning-from-mutations"},"Returning from Mutations"),Object(a.b)("p",null,"If a document can satisfy a mutation's expected return type then return it from ",Object(a.b)("inlineCode",{parentName:"p"},"paper.mutate"),". In this example if the mutation field returns a GraphQL Type of ",Object(a.b)("inlineCode",{parentName:"p"},"SomeType")," then"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"async function createSomeTypeMutationResolver(root, args, context, info) {\n  // return the paper.mutate\n  return paper.mutate(({ create }) => {\n    // return the created SomeType Paper Document\n    return create('SomeType', { /* use data from args... */ });\n  });\n}\n")),Object(a.b)("p",null,"If the result is not satisfied by the document the result can be awaited and modified as needed. Assuming in this example the mutation payload only required the payload of"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"{ someTypeId: newId }\n")),Object(a.b)("p",null,"Then the mutation resolver could look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"async function createSomeTypeMutationResolver(root, args, context, info) {\n  // return the paper.mutate\n  const someType = await paper.mutate(({ create }) => {\n    // return the created SomeType Paper Document\n    return create('SomeType', { /* use data from args... */ });\n  });\n\n  return {\n    someTypeId: someType.id\n  };\n}\n")),Object(a.b)("h4",{id:"complete-mutation-example"},"Complete Mutation Example"),Object(a.b)("p",null,"Using the ",Object(a.b)("inlineCode",{parentName:"p"},"graphql")," npm package with the above schema for an end-to-end example involving mutations."),Object(a.b)(u,{mdxType:"MutationExample"}),Object(a.b)(i.a,{result:d,mdxType:"GraphQLResult"}))}y.isMDXComponent=!0}}]);