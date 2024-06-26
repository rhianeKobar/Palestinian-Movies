const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const movieData = require("../palestinian_movies_dataset.json");
const { MovieType} = require("./typeDefs");
const { ImageInputType, ReleaseDateInputType} = require("./inputTypes");


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movies: {
      type: new GraphQLList(MovieType),
      args: { id: { type: GraphQLString } },
      resolve( parent, args) {
        return movieData;
      }
    },
    movieById: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve( parent, args, context) {
        let movie = movieData.find(movie => movie.id === args.id)
        if(!movie) {
          throw new Error(`Unable to find a movie by the id: ${args.id}`)
        }
        return movie
      }
    },
    moviesByReleaseYear: {
      type: new GraphQLList(MovieType),
      args: { year: { type: GraphQLInt } },
      resolve( parent, args ){
        let movies = movieData.filter(movie => movie.releaseDate.year === args.year)
        if(movies.length === 0) {
          throw new Error(`Unable to find any movies released in the year: ${args.year}`)
        }
        return movies
      }
    },
    moviesByTitleText:{
      type: new GraphQLList(MovieType),
      args: { title: { type: GraphQLString} },
      resolve( parent, args ) {
        const argsTitle = args.title.toLowerCase();
        let movies = movieData.filter(movie => movie.titleText.text.toLowerCase().includes(argsTitle))
        if(movies.length === 0) {
          throw new Error(`Unable to find any movies with the title: ${args.title}`)
        }
        return movies
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createMovie: {
      type: MovieType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        id: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: ImageInputType },
        releaseDate: { type: ReleaseDateInputType },
        plotText: { type: new GraphQLNonNull(GraphQLString) },
        language: { type: GraphQLString }
      },
      resolve(parent, args) {
        const newMovie = {
          titleText: { text: args.title },
          id: args.id,
          primaryImage: args.image,
          releaseDate: args.releaseDate,
          plot: {
            plotText: { plainText: args.plotText },
            language: { id: args.language }
          }
        };
        movieData.push(newMovie);
        return newMovie;
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        id: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: ImageInputType },
        releaseDate: { type: ReleaseDateInputType },
        plotText: { type: new GraphQLNonNull(GraphQLString) },
        language: { type: GraphQLString }
      },
      resolve(parent, args) {
        let movie = movieData.find(movie => movie.id === args.id);
        if(!movie) {
          throw new Error('Movie not found');
        }
        if (args.title) movie.titleText.text = args.title;
        if (args.image) movie.primaryImage = args.image;
        if (args.releaseDate) movie.releaseDate = args.releaseDate;
        if (args.plotText) movie.plot.plotText.plainText = args.plotText;
        if (args.language) movie.plot.language.id = args.language;

        return movie;
      }
    },
    deleteMovie:{
      type: MovieType,
      args:{
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const index = movieData.findIndex(movie => movie.id === args.id);
        if(index === -1) {
          throw new Error(' Movie not found');
        }
        const deletedMovie = movieData[index];
        movieData.splice(index, 1);
        return deletedMovie;
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });