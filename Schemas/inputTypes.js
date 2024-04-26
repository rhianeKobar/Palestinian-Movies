const graphql = require("graphql");
const {GraphQLInputObjectType, GraphQLInt, GraphQLString} = graphql;


const { CountryCodeEnum} = require("./typeDefs");

const PlainTextInputType = new GraphQLInputObjectType({
  name: "PlainTextInput",
  fields: () => ({
    plainText: { type: GraphQLString }
  })
});

const CountryInputType = new GraphQLInputObjectType({
  name: "CountryInput",
  fields: () => ({
    id: { type: CountryCodeEnum },
    text: { type: GraphQLString }
  })
});

const ReleaseDateInputType = new GraphQLInputObjectType({
  name: "ReleaseDateInput",
  fields: () => ({
    day: { type: GraphQLInt},
    month: { type: GraphQLInt},
    year: { type: GraphQLInt},
    country: { type: CountryInputType},
  })
});

const ImageInputType = new GraphQLInputObjectType({
  name: "ImageInput",
  fields: () => ({
    id: { type: GraphQLString},
    width: { type: GraphQLInt},
    height: { type: GraphQLInt},
    url: { type: GraphQLString},
    caption: { type: PlainTextInputType},
  })
});

module.exports = {
  ImageInputType,
  ReleaseDateInputType
};
