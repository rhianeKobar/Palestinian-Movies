const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLEnumType, GraphQLInputObjectType } = graphql;

const TextType = new GraphQLObjectType({
  name: "Text",
  fields: () => ({
    text: { type: GraphQLString }
  })
});

const PlainTextType = new GraphQLObjectType({
  name: "PlainText",
  fields: () => ({
    plainText: { type: GraphQLString }
  })
});

const CountryCodeEnum = new GraphQLEnumType({
  name: "CountryCode",
  values: {
    US: { value: 'US' },
    FR: { value: 'FR' },
    PS: { value: 'PS' },
    IL: { value: 'IL' },
    NL: { value: 'NL' },
    DE: { value: 'DE' },
    QA: { value: 'QA' },
    AE: { value: 'AE' },
    SG: { value: 'SG' },
    GB: { value: 'GB' },
  }
})

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: CountryCodeEnum },
    text: { type: GraphQLString }
  })
});

const LanguageType = new GraphQLObjectType({
  name: "Language",
  fields: () => ({
    id: { type: GraphQLString }
  })
});

const PlotType = new GraphQLObjectType({
  name: "Plot",
  fields: () => ({
    plotText: { type: PlainTextType },
    language: { type: LanguageType }
  })
});

const ReleaseDateType = new GraphQLObjectType({
  name: "ReleaseDate",
  fields: () => ({
    day: { type: GraphQLInt},
    month: { type: GraphQLInt},
    year: { type: GraphQLInt},
    country: { type: CountryType},
  })
});

const ImageType = new GraphQLObjectType({
  name: "Image",
  fields: () => ({
    id: { type: GraphQLString},
    width: { type: GraphQLInt},
    height: { type: GraphQLInt},
    url: { type: GraphQLString},
    caption: { type: PlainTextType},
  })
});

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    titleText: { type: TextType},
    id: { type: GraphQLString},
    primaryImage: { type: ImageType},
    releaseDate: { type: ReleaseDateType},
    plot: { type: PlotType},
  })
});

module.exports = {
  MovieType,
  CountryCodeEnum
};