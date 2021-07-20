(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{106:function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var a=r(0),t=r.n(a);function i(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement("strong",null,"Result: "),t.a.createElement("pre",{className:"graphql-result"},JSON.stringify(e.result,null,2)))}},81:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return J})),r.d(n,"metadata",(function(){return E})),r.d(n,"rightToc",(function(){return F})),r.d(n,"default",(function(){return W}));var a=r(2),t=r(6),i=(r(0),r(91)),o=r(106),s=["components"],l={rightToc:[]};function c(e){var n=e.components,r=Object(t.a)(e,s);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { createServer } from "miragejs";\nimport { createRouteHandler, mirageMiddleware } from "@graphql-mocks/mirage";\n\ncreateServer({\n  routes: function routes() {\n    // capture mirageServer dependency\n    var mirageServer = this;\n\n    // create a route handler for POSTs to `/graphql`\n    // using `createRouteHandler`\n    this.post(\n      "graphql",\n      createRouteHandler({\n        middlewares: [mirageMiddleware()],\n        dependencies: {\n          mirageServer: mirageServer,\n          graphqlSchema: graphqlSchema,\n        },\n      })\n    );\n  },\n});\n')))}c.isMDXComponent=!0;var p=["components"],m={rightToc:[]};function d(e){var n=e.components,r=Object(t.a)(e,p);return Object(i.b)("wrapper",Object(a.a)({},m,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { mirageMiddleware } from "@graphql-mocks/mirage";\nimport { createServer, Model, hasMany } from "miragejs";\n\n// Define GraphQL Schema\nvar graphqlSchema =\n  "\\n  schema {\\n    query: Query\\n  }\\n\\n  type Query {\\n    movies: [Movie!]!\\n  }\\n\\n  type Movie {\\n    title: String!\\n    actors: [Actor!]!\\n  }\\n\\n  type Actor {\\n    name: String!\\n  }\\n";\n\n// Create the mirage server and schema\nvar mirageServer = createServer({\n  models: {\n    Actor: Model,\n    Movie: Model.extend({\n      actors: hasMany(),\n    }),\n  },\n});\n\n// Create model instances\nvar meryl = mirageServer.schema.create("actor", { name: "Meryl Streep" });\nvar bill = mirageServer.schema.create("actor", { name: "Bill Murray" });\nvar anjelica = mirageServer.schema.create("actor", { name: "Anjelica Huston" });\n\nmirageServer.schema.create("movie", {\n  title: "Fantastic Mr. Fox",\n  actors: [meryl, bill],\n});\nmirageServer.schema.create("movie", {\n  title: "The Life Aquatic with Steve Zissou",\n  actors: [bill, anjelica],\n});\n\nvar graphqlHandler = new GraphQLHandler({\n  middlewares: [mirageMiddleware()],\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar query = graphqlHandler.query(\n  "\\n  {\\n    movies {\\n      title\\n      actors {\\n        name\\n      }\\n    }\\n  }\\n"\n);\nquery.then(function (result) {\n  return console.log(result);\n});\n')))}d.isMDXComponent=!0;var u={data:{movies:[{title:"Fantastic Mr. Fox",actors:[{name:"Meryl Streep"},{name:"Bill Murray"}]},{title:"The Life Aquatic with Steve Zissou",actors:[{name:"Bill Murray"},{name:"Anjelica Huston"}]}]}},h=["components"],b={rightToc:[]};function g(e){var n=e.components,r=Object(t.a)(e,h);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { createServer, Model } from "miragejs";\nimport { extractDependencies } from "graphql-mocks/resolver";\n\nvar mirageServer = createServer({\n  models: {\n    Movie: Model,\n  },\n});\n\nvar graphqlSchema =\n  "\\n  schema {\\n    query: Query\\n    mutation: Mutation\\n  }\\n\\n  type Query {\\n    Movie: [Movie!]!\\n  }\\n\\n  type Mutation {\\n    # Create mutation\\n    addMovie(input: AddMovieInput): Movie!\\n  }\\n\\n  type Movie {\\n    id: ID!\\n    title: String!\\n    style: MovieStyle!\\n  }\\n\\n  input AddMovieInput {\\n    title: String!\\n    style: MovieStyle!\\n  }\\n\\n  enum MovieStyle {\\n    LiveAction\\n    StopMotion\\n    Animated\\n  }\\n";\n\n// Represents the resolverMap with our static Resolver Function\n// using `extractDependencies` to handle the input args and\n// return the added Movie\nvar resolverMap = {\n  Mutation: {\n    addMovie: function addMovie(_root, args, context, _info) {\n      var _extractDependencies = extractDependencies(context, ["mirageServer"]),\n        mirageServer = _extractDependencies.mirageServer;\n\n      var addedMovie = mirageServer.schema.movies.create({\n        title: args.input.title,\n        style: args.input.style,\n      });\n\n      return addedMovie;\n    },\n  },\n};\n\nvar handler = new GraphQLHandler({\n  resolverMap: resolverMap,\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar mutation = handler.query(\n  "\\n    mutation($movie: AddMovieInput) {\\n      addMovie(input: $movie) {\\n        id\\n        title\\n        style\\n      }\\n    }\\n  ",\n\n  // Pass external variables for the mutation\n  {\n    movie: {\n      title: "Isle of Dogs",\n      style: "StopMotion",\n    },\n  }\n);\nmutation.then(function (result) {\n  return console.log(result);\n});\n')))}g.isMDXComponent=!0;var v={data:{addMovie:{id:"1",title:"Isle of Dogs",style:"StopMotion"}}},y=["components"],j={rightToc:[]};function M(e){var n=e.components,r=Object(t.a)(e,y);return Object(i.b)("wrapper",Object(a.a)({},j,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { createServer, Model } from "miragejs";\nimport { extractDependencies } from "graphql-mocks/resolver";\n\nvar mirageServer = createServer({\n  models: {\n    movie: Model,\n  },\n});\n\n// Create the movie "The Royal Tenenbaums" in Mirage JS\n// Whoops! It\'s been assigned the wrong year but we can\n// fix this via a GraphQL Mutation\nvar royalTenenbaums = mirageServer.schema.create("movie", {\n  name: "The Royal Tenenbaums",\n  year: "2020",\n});\n\nvar graphqlSchema =\n  "\\n  schema {\\n    query: Query\\n    mutation: Mutation\\n  }\\n\\n  type Query {\\n    movies: [Movie!]!\\n  }\\n\\n  type Mutation {\\n    # Update\\n    updateYear(movieId: ID!, year: String!): Movie!\\n  }\\n\\n  type Movie {\\n    id: ID!\\n    name: String!\\n    year: String!\\n  }\\n";\n\nvar resolverMap = {\n  Mutation: {\n    updateYear: function updateYear(_root, args, context, _info) {\n      var _extractDependencies = extractDependencies(context, ["mirageServer"]),\n        mirageServer = _extractDependencies.mirageServer;\n\n      // lookup and update the year on the movie with args\n      var movie = mirageServer.schema.movies.find(args.movieId);\n      movie.year = args.year;\n      movie.save();\n\n      return movie;\n    },\n  },\n};\n\nvar handler = new GraphQLHandler({\n  resolverMap: resolverMap,\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar mutation = handler.query(\n  "\\n    mutation($movieId: ID!, $year: String!) {\\n      updateYear(movieId: $movieId, year: $year) {\\n        id\\n        name\\n        year\\n      }\\n    }\\n  ",\n\n  // Pass external variables for the mutation\n  {\n    movieId: royalTenenbaums.id, // corresponds with the model we created above\n    year: "2001",\n  }\n);\nmutation.then(function (result) {\n  return console.log(result);\n});\n')))}M.isMDXComponent=!0;var O={data:{updateYear:{id:"1",name:"The Royal Tenenbaums",year:"2001"}}},f=["components"],S={rightToc:[]};function w(e){var n=e.components,r=Object(t.a)(e,f);return Object(i.b)("wrapper",Object(a.a)({},S,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { createServer, Model } from "miragejs";\nimport { extractDependencies } from "graphql-mocks/resolver";\n\nvar mirageServer = createServer({\n  models: {\n    movie: Model,\n  },\n});\n\nvar grandBudapestHotel = mirageServer.schema.create("movie", {\n  title: "The Grand Budapest Hotel",\n});\n\nvar hamilton = mirageServer.schema.create("movie", {\n  title: "Hamilton",\n});\n\nvar graphqlSchema =\n  "\\n  schema {\\n    query: Query\\n    mutation: Mutation\\n  }\\n\\n  type Query {\\n    movies: [Movie!]!\\n  }\\n\\n  type Mutation {\\n    # Remove\\n    removeMovie(movieId: ID!): Movie!\\n  }\\n\\n  type Movie {\\n    id: ID!\\n    title: String!\\n  }\\n";\n\nvar resolverMap = {\n  Mutation: {\n    removeMovie: function removeMovie(_root, args, context, _info) {\n      var _extractDependencies = extractDependencies(context, ["mirageServer"]),\n        mirageServer = _extractDependencies.mirageServer;\n\n      var movie = mirageServer.schema.movies.find(args.movieId);\n      movie.destroy();\n\n      return movie;\n    },\n  },\n};\n\nvar handler = new GraphQLHandler({\n  resolverMap: resolverMap,\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar mutation = handler.query(\n  "\\n    mutation($movieId: ID!) {\\n      removeMovie(movieId: $movieId) {\\n        id\\n        title\\n      }\\n    }\\n  ",\n\n  // Pass external variables for the mutation\n  {\n    movieId: hamilton.id,\n  }\n);\nmutation.then(function (result) {\n  return console.log(result);\n});\n')))}w.isMDXComponent=!0;var T={data:{removeMovie:{id:"2",title:"Hamilton"}}},x=["components"],N={rightToc:[]};function q(e){var n=e.components,r=Object(t.a)(e,x);return Object(i.b)("wrapper",Object(a.a)({},N,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { extractDependencies } from "graphql-mocks/resolver";\nimport { mirageMiddleware } from "@graphql-mocks/mirage";\nimport { createServer, Model } from "miragejs";\n\nvar graphqlSchema =\n  "\\n  schema {\\n    query: Query\\n  }\\n\\n  type Query {\\n    movies: [Movie!]!\\n  }\\n\\n  type Movie {\\n    name: String!\\n  }\\n";\n\nvar mirageServer = createServer({\n  models: {\n    Movie: Model,\n  },\n});\n\nmirageServer.schema.create("movie", {\n  name: "Moonrise Kingdom",\n});\n\nmirageServer.schema.create("movie", {\n  name: "The Darjeeling Limited",\n});\n\nmirageServer.schema.create("movie", {\n  name: "Bottle Rocket",\n});\n\nvar resolverMap = {\n  Query: {\n    movies: function movies(_parent, _args, context, _info) {\n      var _extractDependencies = extractDependencies(context, ["mirageServer"]),\n        mirageServer = _extractDependencies.mirageServer;\n      return mirageServer.schema.movies.all().models;\n    },\n  },\n};\n\nvar handler = new GraphQLHandler({\n  resolverMap: resolverMap,\n\n  // Note: the `mirageMiddleware` is only required for handling downstream\n  // mirage relationships from the returned models. Non-relationship\n  // attributes on the model will "just work"\n  middlewares: [mirageMiddleware()],\n\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar query = handler.query("\\n  {\\n    movies {\\n      name\\n    }\\n  }\\n");\nquery.then(function (result) {\n  return console.log(result);\n});\n')))}q.isMDXComponent=!0;var k={data:{movies:[{name:"Moonrise Kingdom"},{name:"The Darjeeling Limited"},{name:"Bottle Rocket"}]}},C=["components"],D={rightToc:[]};function L(e){var n=e.components,r=Object(t.a)(e,C);return Object(i.b)("wrapper",Object(a.a)({},D,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'export default "\\n  schema {\\n    query: Query\\n  }\\n\\n  type Query {\\n    person: Person!\\n  }\\n\\n  type Person {\\n    favoriteMedium: [Media]!\\n  }\\n\\n  union Media = Movie | TV | Book | Magazine\\n\\n  interface MovingPicture {\\n    title: String!\\n    durationInMinutes: Int!\\n  }\\n\\n  interface WrittenMedia {\\n    title: String!\\n    pageCount: String!\\n  }\\n\\n  type Movie implements MovingPicture {\\n    title: String!\\n    durationInMinutes: Int!\\n    director: String!\\n  }\\n\\n  type TV implements MovingPicture {\\n    title: String!\\n    episode: String!\\n    durationInMinutes: Int!\\n    network: String!\\n  }\\n\\n  type Book implements WrittenMedia {\\n    title: String!\\n    author: String!\\n    pageCount: String!\\n  }\\n\\n  type Magazine implements WrittenMedia {\\n    title: String!\\n    issue: String!\\n    pageCount: String!\\n  }\\n";\n')))}L.isMDXComponent=!0;var Q=["components"],R={rightToc:[]};function I(e){var n=e.components,r=Object(t.a)(e,Q);return Object(i.b)("wrapper",Object(a.a)({},R,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { mirageMiddleware } from "@graphql-mocks/mirage";\nimport { createServer, Model, hasMany } from "miragejs";\nimport { extractDependencies } from "graphql-mocks/resolver";\nimport graphqlSchema from "./abstract-type-schema.source";\n\nvar mirageServer = createServer({\n  models: {\n    Person: Model.extend({\n      // represent the abstract type with a polymorphic relationship\n      favoriteMedium: hasMany({ polymorphic: true }),\n    }),\n\n    // model definition exists for each discrete type\n    Movie: Model.extend(),\n    TV: Model.extend(),\n    Book: Model.extend(),\n    Magazine: Model.extend(),\n  },\n});\n\nvar movie = mirageServer.schema.create("movie", {\n  title: "The Darjeeling Limited",\n  durationInMinutes: 104,\n  director: "Wes Anderson",\n});\n\nvar tv = mirageServer.schema.create("tv", {\n  title: "Malcolm in the Middle",\n  episode: "Rollerskates",\n  network: "Fox",\n  durationInMinutes: 24,\n});\n\nvar book = mirageServer.schema.create("book", {\n  title: "The Hobbit, or There and Back Again",\n  author: "J.R.R. Tolkien",\n  pageCount: 310,\n});\n\nvar magazine = mirageServer.schema.create("magazine", {\n  title: "Lighthouse Digest",\n  issue: "May/June 2020",\n  pageCount: 42,\n});\n\nmirageServer.schema.create("person", {\n  favoriteMedium: [movie, tv, book, magazine],\n});\n\nvar graphqlHandler = new GraphQLHandler({\n  resolverMap: {\n    Query: {\n      person: function person(_parent, _args, context) {\n        var _extractDependencies = extractDependencies(context, [\n            "mirageServer",\n          ]),\n          mirageServer = _extractDependencies.mirageServer;\n        return mirageServer.schema.people.first();\n      },\n    },\n  },\n\n  middlewares: [mirageMiddleware()],\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar query = graphqlHandler.query(\n  "\\n  {\\n    person {\\n      favoriteMedium {\\n        __typename\\n\\n        ... on MovingPicture {\\n          title\\n          durationInMinutes\\n        }\\n\\n        ... on Movie {\\n          director\\n        }\\n\\n        ... on TV {\\n          episode\\n          network\\n        }\\n\\n        ... on WrittenMedia {\\n          title\\n          pageCount\\n        }\\n\\n        ... on Book {\\n          author\\n        }\\n\\n        ... on Magazine {\\n          issue\\n        }\\n      }\\n    }\\n  }\\n"\n);\nquery.then(function (result) {\n  return console.log(result);\n});\n')))}I.isMDXComponent=!0;var G={data:{person:{favoriteMedium:[{title:"The Darjeeling Limited",director:"Wes Anderson",durationInMinutes:104,__typename:"Movie"},{title:"Malcolm in the Middle",durationInMinutes:24,episode:"Rollerskates",network:"Fox",__typename:"TV"},{title:"The Hobbit, or There and Back Again",author:"J.R.R. Tolkien",pageCount:"310",__typename:"Book"},{title:"Lighthouse Digest",issue:"May/June 2020",pageCount:"42",__typename:"Magazine"}]}}},_=["components"],H={rightToc:[]};function A(e){var n=e.components,r=Object(t.a)(e,_);return Object(i.b)("wrapper",Object(a.a)({},H,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { GraphQLHandler } from "graphql-mocks";\nimport { mirageMiddleware } from "@graphql-mocks/mirage";\nimport { createServer, Model, hasMany } from "miragejs";\nimport { extractDependencies } from "graphql-mocks/resolver";\nimport graphqlSchema from "./abstract-type-schema.source";\n\nvar mirageServer = createServer({\n  models: {\n    Person: Model.extend({\n      favoriteMedium: hasMany("media"),\n    }),\n\n    // using a single model to represent _all_ the concrete types\n    Media: Model.extend(),\n  },\n});\n\n// All models created are for "media", but have their\n// concrete type specified via __typename\n\nvar movie = mirageServer.schema.create("media", {\n  title: "The Darjeeling Limited",\n  durationInMinutes: 104,\n  director: "Wes Anderson",\n  __typename: "Movie",\n});\n\nvar tvShow = mirageServer.schema.create("media", {\n  title: "Malcolm in the Middle",\n  episode: "Rollerskates",\n  network: "Fox",\n  durationInMinutes: 24,\n  __typename: "TV",\n});\n\nvar book = mirageServer.schema.create("media", {\n  title: "The Hobbit, or There and Back Again",\n  author: "J.R.R. Tolkien",\n  pageCount: 310,\n  __typename: "Book",\n});\n\nvar magazine = mirageServer.schema.create("media", {\n  title: "Lighthouse Digest",\n  issue: "May/June 2020",\n  pageCount: 42,\n  __typename: "Magazine",\n});\n\nmirageServer.schema.create("person", {\n  favoriteMedium: [movie, tvShow, book, magazine],\n});\n\nvar graphqlHandler = new GraphQLHandler({\n  resolverMap: {\n    Query: {\n      person: function person(_parent, _args, context) {\n        var _extractDependencies = extractDependencies(context, [\n            "mirageServer",\n          ]),\n          mirageServer = _extractDependencies.mirageServer;\n        return mirageServer.schema.people.first();\n      },\n    },\n  },\n\n  middlewares: [mirageMiddleware()],\n  dependencies: {\n    graphqlSchema: graphqlSchema,\n    mirageServer: mirageServer,\n  },\n});\n\nvar query = graphqlHandler.query(\n  "\\n  {\\n    person {\\n      favoriteMedium {\\n        __typename\\n\\n        ... on MovingPicture {\\n          title\\n          durationInMinutes\\n        }\\n\\n        ... on Movie {\\n          director\\n        }\\n\\n        ... on TV {\\n          episode\\n          network\\n        }\\n\\n        ... on WrittenMedia {\\n          title\\n          pageCount\\n        }\\n\\n        ... on Book {\\n          author\\n        }\\n\\n        ... on Magazine {\\n          issue\\n        }\\n      }\\n    }\\n  }\\n"\n);\nquery.then(function (result) {\n  return console.log(result);\n});\n')))}A.isMDXComponent=!0;var P=["components"],J={id:"mirage-js",title:"Mirage JS"},E={unversionedId:"guides/mirage-js",id:"guides/mirage-js",isDocsHomePage:!1,title:"Mirage JS",description:'// Uses the same result as "With Typename"',source:"@site/docs/guides/mirage-js.mdx",slug:"/guides/mirage-js",permalink:"/docs/guides/mirage-js",version:"current",sidebar:"docs",previous:{title:"Relay Pagination",permalink:"/docs/guides/relay-pagination"},next:{title:"Manually Apply Middlewares",permalink:"/docs/guides/pack"}},F=[{value:"Installation",id:"installation",children:[]},{value:"Mirage JS Auto Resolvers Middleware",id:"mirage-js-auto-resolvers-middleware",children:[]},{value:"How Mirage JS &amp; Auto Resolving works",id:"how-mirage-js--auto-resolving-works",children:[]},{value:"Interface and Union Types",id:"interface-and-union-types",children:[{value:"One Model per Abstract Type",id:"one-model-per-abstract-type",children:[]},{value:"One Model per Concrete Type",id:"one-model-per-concrete-type",children:[]}]},{value:"Mock the GraphQL Endpoint using Mirage JS Route Handlers",id:"mock-the-graphql-endpoint-using-mirage-js-route-handlers",children:[]},{value:"Relay Pagination",id:"relay-pagination",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic Query",id:"basic-query",children:[]},{value:"Mutations (Create, Update, Delete)",id:"mutations-create-update-delete",children:[]},{value:"Static Resolver Functions",id:"static-resolver-functions",children:[]}]},{value:"Comparison with <code>miragejs/graphql</code>",id:"comparison-with-miragejsgraphql",children:[]}],B={rightToc:F};function W(e){var n=e.components,r=Object(t.a)(e,P);return Object(i.b)("wrapper",Object(a.a)({},B,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://miragejs.com/"}),"Mirage JS")," is a great tool that makes mocking RESTful APIs much easier. One of the main benefits\nof Mirage JS is that it provides a full in-memory database and ORM. This allows for mocked queries to be backed by\nstateful data."),Object(i.b)("p",null,'This library provides a few ways that to extend GraphQL with Mirage JS including "Auto Resolvers" or by using Mirage JS\nwithin resolver functions, or a combination of both.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/api/mirage"}),"API documentation for ",Object(i.b)("inlineCode",{parentName:"a"},"@graphql-mocks/mirage")))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install Mirage JS and the complementary ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-mocks/mirage")," package"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# npm\nnpm install --save-dev miragejs @graphql-mocks/mirage\n\n# yarn\nyarn add --dev miragejs @graphql-mocks/mirage\n")),Object(i.b)("h2",{id:"mirage-js-auto-resolvers-middleware"},"Mirage JS Auto Resolvers Middleware"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mirageMiddleware")," will fill the Resolver Map with Auto Resolvers where resolvers do not already exist, unless\n",Object(i.b)("inlineCode",{parentName:"p"},"replace")," option is provided. To control where resolvers are applied, specify the ",Object(i.b)("inlineCode",{parentName:"p"},"highlight")," option. The Middleware\nsimply applies two types of resolvers to the Resolver Map: A Type Resolver for Abstract Types (Unions and Interfaces)\nand a Field Resolver for fields."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLHandler } from 'graphql-mocks';\nimport { mirageMiddleware } from '@graphql-mocks/mirage';\n\nconst handler = new GraphQLHandler({\n  middlewares: [mirageMiddleware()],\n  dependencies: {\n    mirageServer,\n    graphqlSchema,\n  },\n});\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mirageServer")," is a required dependency for this middleware.")),Object(i.b)("p",null,"Additional options on the ",Object(i.b)("inlineCode",{parentName:"p"},"mirageMiddleware")," include:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"mirageMiddleware({\n  highlight: HighlightableOption,\n  replace: boolean,\n});\n")),Object(i.b)("h2",{id:"how-mirage-js--auto-resolving-works"},"How Mirage JS & Auto Resolving works"),Object(i.b)("p",null,"Mirage JS can be setup where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Models and Relationships map to GraphQL types"),Object(i.b)("li",{parentName:"ul"},"Model attributes map to fields on GraphQL types")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Person {\n  name: String\n  family: [Person!]!\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Model, hasMany } from 'miragejs';\n\nModel.create({\n  family: hasMany('person'),\n});\n")),Object(i.b)("p",null,"Associations between models reflect the relationships between GraphQL types. Relationships will be automatically\nresolved based on the matching naming between Mirage JS models and GraphQL types. This provides the basis for the auto\nresolving a GraphQL query. Auto Resolvers are applied to a Resolver map via the ",Object(i.b)("inlineCode",{parentName:"p"},"mirageMiddlware")," or can be imported\nindividually if required."),Object(i.b)("h2",{id:"interface-and-union-types"},"Interface and Union Types"),Object(i.b)("p",null,"GraphQL Union and Interface are ",Object(i.b)("em",{parentName:"p"},"Abstract Types")," that represent concrete types. The ",Object(i.b)("inlineCode",{parentName:"p"},"mirageMiddleware")," Type Resolver\nprovides two different strategies for resolving and modeling Abstract Types in Mirage. Both have their pros/cons and the\nbest fit will depend on the use case. The accompanying examples are a bit verbose but demonstrate the extent of setting\nup these use cases. Both are setup with the same GraphQL Schema, query and return the same result. The ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," has\nbeen queried also to show the resolved discrete type."),Object(i.b)("p",null,"The GraphQL Schema for these examples is:"),Object(i.b)(L,{mdxType:"AbstractTypeSchema"}),Object(i.b)("p",null,"This GraphQL schema has the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Four GraphQL Concrete Types: ",Object(i.b)("inlineCode",{parentName:"li"},"Movie"),", ",Object(i.b)("inlineCode",{parentName:"li"},"TV"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Book"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"Magazine")),Object(i.b)("li",{parentName:"ul"},"All four Concrete types are in a GraphQL Union called ",Object(i.b)("inlineCode",{parentName:"li"},"Media")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Movie")," and ",Object(i.b)("inlineCode",{parentName:"li"},"TV")," implement a ",Object(i.b)("inlineCode",{parentName:"li"},"MovingPicture")," interface"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Book")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Magazine")," implement a ",Object(i.b)("inlineCode",{parentName:"li"},"WrittenMedia")," interface")),Object(i.b)("h3",{id:"one-model-per-abstract-type"},"One Model per Abstract Type"),Object(i.b)("p",null,"In this case a Mirage model (",Object(i.b)("inlineCode",{parentName:"p"},"Media"),") is setup for the Abstract type itself, and instances specify their concrete type\nby the ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," attribute on the model, like ",Object(i.b)("inlineCode",{parentName:"p"},"__typename: 'Movie'"),". This option is easier and faster to setup but\ncan become harder to manage and requires remembering to specify the ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," model attribute on each instance\ncreated."),Object(i.b)(A,{mdxType:"AbstractTypeWithTypenameExample"}),Object(i.b)(o.a,{result:G,mdxType:"GraphQLResult"}),Object(i.b)("h3",{id:"one-model-per-concrete-type"},"One Model per Concrete Type"),Object(i.b)("p",null,"This option allows for each discrete type to be represented by its own Mirage Model definition. A relationship attribute\nthat can hold an Abstract type should specify the ",Object(i.b)("inlineCode",{parentName:"p"},"{ polymorphic: true }")," option on the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://miragejs.com/docs/main-concepts/relationships/#polymorphic"}),"relationship definition"),". This option sets up for\ndistinct definitions but can also be more verbose."),Object(i.b)(I,{mdxType:"AbstractTypeWithDiscreteModelsExample"}),Object(i.b)(o.a,{result:G,mdxType:"GraphQLResult"}),Object(i.b)("h2",{id:"mock-the-graphql-endpoint-using-mirage-js-route-handlers"},"Mock the GraphQL Endpoint using Mirage JS Route Handlers"),Object(i.b)("p",null,"A GraphQL handler handles the mocked responses for GraphQL queries and mutations. However, GraphQL is agnostic to the\nnetwork transport layer. Typically, GraphQL clients do use HTTP and luckily Mirage JS comes with out-of-the-box XHR\ninterception and route handlers to mock this as well. GraphQL API Servers operate on a single endpoint for a query so\nonly one route handler is needed. Migrating to other mocked networking methods later is easy as well."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"createRouteHandler")," to get setup with a mocked GraphQL endpoint. Specify the same options as the ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLHandler"),"\nconstructor or specify a ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLHandler")," instance. This example sets up a GraphQLHandler on the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," route."),Object(i.b)(c,{mdxType:"RouteHandlerExample"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MirageServer")," instance can be referenced by ",Object(i.b)("inlineCode",{parentName:"p"},"this")," within the ",Object(i.b)("inlineCode",{parentName:"p"},"routes()")," function and must be passed in as the\n",Object(i.b)("inlineCode",{parentName:"p"},"mirageServer")," dependency. See the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://miragejs.com/docs/main-concepts/route-handlers/"}),"Mirage JS route handlers documentation")," for more information\nabout mocking HTTP endpoints with route handlers."),Object(i.b)("p",null,"Note: The rest of the examples skip this part and focus on ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-mocks")," and Mirage JS configuration and examples."),Object(i.b)("h2",{id:"relay-pagination"},"Relay Pagination"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"relayWrapper")," for quick relay pagination. It must be ",Object(i.b)("em",{parentName:"p"},"after")," the Mirage JS Middleware. The ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-mocks/mirage")," package\nprovides a ",Object(i.b)("inlineCode",{parentName:"p"},"mirageCursorForNode")," function to be used for the required ",Object(i.b)("inlineCode",{parentName:"p"},"cursorForNode")," argument."),Object(i.b)("p",null,"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/relay-pagination"}),"Relay Wrapper documentation")," for more details."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLHandler } from 'graphql-mocks';\nimport { mirageCursorForNode } from '@graphql-mocks/mirage';\n\nconst handler = new GraphQLHandler({\n  middlewares: [\n    mirageMiddleware(),\n    embed({\n      wrappers: [\n        relayWrapper({ cursorForNode: mirageCursorForNode })\n      ]\n    })\n  ],\n  dependencies: {\n    mirageServer,\n    graphqlSchema,\n  },\n});\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"basic-query"},"Basic Query"),Object(i.b)("p",null,"This example shows the result of querying with Auto Resolvers against Mirage Models with relationships (between a Wizard\nand their spells). It uses the ",Object(i.b)("inlineCode",{parentName:"p"},"mirageMiddlware")," middlware, sets up dependencies and runs a query. The mutations will\npersist as part of Mirage JS's in-memory database for future mutations and queries."),Object(i.b)(d,{mdxType:"BasicExample"})," ",Object(i.b)(o.a,{result:u,mdxType:"GraphQLResult"}),Object(i.b)("h3",{id:"mutations-create-update-delete"},"Mutations (Create, Update, Delete)"),Object(i.b)("p",null,"GraphQL Mutations can be done with static resolvers and a reference to the ",Object(i.b)("inlineCode",{parentName:"p"},"mirageServer")," dependency using the\n",Object(i.b)("inlineCode",{parentName:"p"},"extractDependencies")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'resolverFunction: function(root, args, context, info) {\n  const { mirageServer } = extractDependencies(context, ["mirageServer"]);\n}\n')),Object(i.b)("h4",{id:"create-example-with-input-variables"},"Create Example with Input Variables"),Object(i.b)("p",null,"This example creates a new instance of a Wizard model on the Mirage JS using a GraphQL Input Type."),Object(i.b)(g,{mdxType:"MutationCreateExample"})," ",Object(i.b)(o.a,{result:v,mdxType:"GraphQLResult"}),Object(i.b)("h4",{id:"update-example"},"Update Example"),Object(i.b)("p",null,"In this example Voldemort, Tom Riddle, has mistakenly been put into the wrong Hogwarts house. Using the ",Object(i.b)("inlineCode",{parentName:"p"},"updateHouse"),"\nmutation will take his Model ID, the correct House, and return the updated data. The ",Object(i.b)("inlineCode",{parentName:"p"},"resolverMap")," has a ",Object(i.b)("inlineCode",{parentName:"p"},"updateHouse"),"\nResolver Function that will handle this mutation and update the within Mirage JS."),Object(i.b)(M,{mdxType:"MutationUpdateExample"})," ",Object(i.b)(o.a,{result:O,mdxType:"GraphQLResult"}),Object(i.b)("h4",{id:"delete-example"},"Delete Example"),Object(i.b)("p",null,"Removing Voldemort's entry in the Mirage JS database can be done through a ",Object(i.b)("inlineCode",{parentName:"p"},"removeWizard")," mutation. The ",Object(i.b)("inlineCode",{parentName:"p"},"resolverMap"),"\nhas a ",Object(i.b)("inlineCode",{parentName:"p"},"removeWizard")," Resolver Function that will handle this mutation and update the within Mirage JS."),Object(i.b)(w,{mdxType:"MutationDeleteExample"})," ",Object(i.b)(o.a,{result:T,mdxType:"GraphQLResult"}),Object(i.b)("h3",{id:"static-resolver-functions"},"Static Resolver Functions"),Object(i.b)("p",null,"Mirage JS can be used directly in static Resolver Functions in a Resolver Map by using the ",Object(i.b)("inlineCode",{parentName:"p"},"extractDependencies"),"\nutility. This technique can be with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mutations-create-update-delete"}),"Mutations"),", and Query Resolver Functions to bypass\nAuto Resolving while still having access to Mirage. This is usually done when fine-grained control is needed."),Object(i.b)(q,{mdxType:"StaticResolverExample"})," ",Object(i.b)(o.a,{result:k,mdxType:"GraphQLResult"}),Object(i.b)("h2",{id:"comparison-with-miragejsgraphql"},"Comparison with ",Object(i.b)("inlineCode",{parentName:"h2"},"miragejs/graphql")),Object(i.b)("p",null,"Mirage JS has a GraphQL solution, ",Object(i.b)("inlineCode",{parentName:"p"},"miragejs/graphql"),", that leverages mirage & graphql automatic mocking and sets up\nmodels on the mirage schema automatically. ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-mocks")," with ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-mocks/mirage ")," do a few things differently\nthan ",Object(i.b)("inlineCode",{parentName:"p"},"miragejs/graphql"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This library focuses on providing a flexible GraphQL-first mocking experience using Middlewares and Wrappers, and\nmainly uses Mirage JS as a stateful store. While Mirage JS focuses on mocking REST and uses ",Object(i.b)("inlineCode",{parentName:"li"},"@miragejs/graphql")," as an\nextension to provide GraphQL resolving."),Object(i.b)("li",{parentName:"ul"},"This library also does not apply automatic filtering like ",Object(i.b)("inlineCode",{parentName:"li"},"@miragejs/graphql")," as this tends to be highly specific to\nthe individual GraphQL API. The same result, however, can be achieved by using a Resolver Wrapper, see\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/automatic-filtering"}),"Automatic Filtering with Wrappers")," for examples."),Object(i.b)("li",{parentName:"ul"},"This library currently does not setup the Mirage JS Schema with Models and relationships based on the GraphQL Schema\nbut aims at adding this as a configuration option in the future (PRs are welcome).")))}W.isMDXComponent=!0},91:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return h}));var a=r(0),t=r.n(a);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=t.a.createContext({}),p=function(e){var n=t.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=p(e.components);return t.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},u=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return r?t.a.createElement(h,s(s({ref:n},c),{},{components:r})):t.a.createElement(h,s({ref:n},c))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);