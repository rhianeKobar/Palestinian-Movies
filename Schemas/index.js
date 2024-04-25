const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQlSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = graphql;

const movieData = require("../palestinian_movies_dataset.json");
const { MovieType, ReleaseDateType} = require("./typeDefs");
const {GraphQLSchema} = require('graphql/type');


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllMovies: {
      type: new GraphQLList(MovieType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return movieData;
      }
    },
    getMovieById: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args, context) {
        return movieData.find(movie => movie.id === args.id)
      }
    },
    getMovieByReleaseYear: {
      type: new GraphQLList(MovieType),
      args: { year: { type: GraphQLInt } },
      resolve(parent, args ){
        return movieData.filter(movie => movie.releaseDate.year === args.year)
      }
    },
    getMovieByTitleText:{

    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery})