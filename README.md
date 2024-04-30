# Palestinian Movies
An GraphQL API for Palestinian movies

Made using [this dataset](https://www.kaggle.com/code/sondosaabed/palestinian-movies-json-notebook?rvi=1)

## Run the project
### Run locally
1. Open the project directory in the terminal.
2. Run ```node index.js```

### Run on docker
1. Open project directory in terminal.
2. Run ```docker build -t srsalazar/palestinian-movies-api .```
3. Run ```docker run -p 4000:4000 srsalazar/palestinian-movies-api```

### Pull image from Docker hub
- ```docker pull srsalazar/palestinian-movies-api:tagname```


## Usage
| Path             | Method | 
|------------------|--------|
| /graphql         | POST   | 
| /debug/responses | GET    |


## Schema
```
schema {
  query: RootQueryType
  mutation: Mutation
}

type RootQueryType {
  movies(id: String): [Movie]
  movieById(id: String): Movie
  movieByReleaseYear(year: Int): [Movie]
  movieByTitleText(title: String): [Movie]
}

type Movie {
  titleText: Text
  id: String
  primaryImage: Image
  releaseDate: ReleaseDate
  plot: Plot
}

type Text {
  text: String
}

type Image {
  id: String
  width: Int
  height: Int
  url: String
  caption: PlainText
}

type PlainText {
  plainText: String
}

type ReleaseDate {
  day: Int
  month: Int
  year: Int
  country: Country
}

type Country {
  id: CountryCode
  text: String
}

enum CountryCode {
  US
  FR
  PS
  IL
  NL
  DE
  QA
  AE
  SG
  GB
}

type Plot {
  plotText: PlainText
  language: Language
}

type Language {
  id: String
}

type Mutation {
  createMovie(title: String!, id: String!, image: ImageInput, releaseDate: ReleaseDateInput, plotText: String!, language: String): Movie
  updateMovie(title: String!, id: String!, image: ImageInput, releaseDate: ReleaseDateInput, plotText: String!, language: String): Movie
  deleteMovie(id: String!): Movie
}

input ImageInput {
  id: String
  width: Int
  height: Int
  url: String
  caption: PlainTextInput
}

input PlainTextInput {
  plainText: String
}

input ReleaseDateInput {
  day: Int
  month: Int
  year: Int
  country: CountryInput
}

input CountryInput {
  id: CountryCode
  text: String
}
```

## Operations
- [Queries](#Queries)
- - [movies](#movies)
- - [movieById](#movieById)
- - [moviesByReleaseYear](#moviesByReleaseYear)
- - [moviesByTitleText](#moviesByTitleText)
- [Mutations](#Mutations)
- - [createMovie](#createMovie)
- - [updateMovie](#updateMovie)
- - [deleteMovie](#deleteMovie)

### Queries

#### movies
##### query:
```
query allMovies {
  movies {
    id
    titleText {
      text
    }
    releaseDate {
      year
    }
    plot {
      plotText {
        plainText
      }
    }
  }
}
```
##### result(truncated):
```
{
  "data": {
    "movies": [
      {
        "id": "tt0111354",
        "titleText": {
          "text": "Hikayatul jawahiri thalath"
        },
        "releaseDate": {
          "year": 1995
        },
        "plot": {
          "plotText": {
            "plainText": "A Palestinian boy becomes entranced with a beautiful Gypsy girl and a fairy tale world she weaves amidst conflict in Gaza. The children explore nature, mysticism and what their future holds, while learning to live with the surrounding brutality c. 1990. Yusef's family scrapes by in a seaside camp while his father's in prison and his heavily-armed brother's on the run, parrying with Israeli troops. Salah, Yusef's schoolmate from a well-off Arab family strives faithfully to assist them, while Yusef helps an elderly, blind neighbor escape from his lonely abandonment into the North American dreamworld he's waited so long for."
          }
        }
      },
      {
        "id": "tt3132086",
        "titleText": {
          "text": "Giraffada"
        },
        "releaseDate": {
          "year": 2014
        },
        "plot": {
          "plotText": {
            "plainText": "A male giraffe dies after a nocturnal air raid in a Palestinian zoo. The female giraffe stops eating. A boy and his father, the veterinarian of the zoo, look for a solution."
          }
        }
      },
      {
        "id": "tt11692148",
        "titleText": {
          "text": "Gaza mon amour"
        },
        "releaseDate": {
          "year": 2021
        },
        "plot": {
          "plotText": {
            "plainText": "Gaza, today. Sixty-year-old fisherman Issa is secretly in love with Siham, a woman who works at the market with her daughter Leila. When he discovers an ancient phallic statue of Apollo in his fishing nets, Issa hides it, not knowing what to do with this mysterious and potent treasure. Yet deep inside, he feels that this discovery will change his life forever. Strangely, his confidence starts to grow and eventually he decides to approach Siham."
          }
        }
      },
      {
        "id": "tt11555492",
        "titleText": {
          "text": "Farha"
        },
        "releaseDate": {
          "year": 2022
        },
        "plot": {
          "plotText": {
            "plainText": "A 14-year-old girl in 1948 Palestine watches from a locked pantry as catastrophe consumes her home."
          }
        }
      },
      {
        "id": "tt2993406",
        "titleText": {
          "text": "Eyes of a Thief"
        },
        "releaseDate": {
          "year": 2014
        },
        "plot": {
          "plotText": {
            "plainText": "A father with a dangerous secret searches for his daughter."
          }
        }
      },
      {
        "id": "tt1670646",
        "titleText": {
          "text": "Habibi Rasak Kharban"
        },
        "releaseDate": {
          "year": 2012
        },
        "plot": {
          "plotText": {
            "plainText": "'Habibi Rasak Kharban' (Darling, Something's Wrong with Your Head) is a dramatic feature that tells the story of a forbidden love in Gaza. The film is a modern re-telling of the famous ancient Sufi parable 'Majnun Layla'."
          }
        }
      },
      {
        "id": "tt3121066",
        "titleText": {
          "text": "Falastine Stereo"
        },
        "releaseDate": {
          "year": 2014
        },
        "plot": {
          "plotText": {
            "plainText": "Two Palestinian brothers plan on immigrating to Canada after the Israeli air force bombs their family home. Milad (Stereo) used to be a wedding singer but because his wife dies in the attack he doesn't want to live in palestine or sing anymore. The bombing also leaves his brother Samy mute and deaf. The two set about earning money for their travel to Canada by buying a secondhand sound system that they rent out for events in Ramallah."
          }
        }
      },
      {
        "id": "tt0115895",
        "titleText": {
          "text": "Chronicle of a Disappearance"
        },
        "releaseDate": {
          "year": 1996
        },
        "plot": {
          "plotText": {
            "plainText": "A Palestinian expatriate filmmaker (Elia Suleiman) documents the loss of national identity in Israel's Arab population."
          }
        }
      },
      {
        "id": "tt1281951",
        "titleText": {
          "text": "Laila's Birthday"
        },
        "releaseDate": {
          "year": 2009
        },
        "plot": {
          "plotText": {
            "plainText": "Abu Laila used to be a judge, but because the government doesn't have the means to renew his assignment he is forced to be a taxi driver. On the day his daughter Laila becomes seven years old his wife insists that he'll be at home early and bring her a present and a cake. Abu Laila's has nothing else on his mind then completing this mission. But the daily life in Palestine has other plans."
          }
        }
      },
      {
        "id": "tt1172963",
        "titleText": {
          "text": "Lemon Tree"
        },
        "releaseDate": {
          "year": 2008
        },
        "plot": {
          "plotText": {
            "plainText": "The story of a Palestinian widow who must defend her lemontree field when a new Israeli Defense Minister moves next to her and threatens to have her lemon grove torn down."
          }
        }
      },
      {
        "id": "tt4429074",
        "titleText": {
          "text": "Degrade"
        },
        "releaseDate": {
          "year": 2016
        },
        "plot": {
          "plotText": {
            "plainText": "In Gaza, two hairdressers and ten customers of various ages and backgrounds spend the day trapped in a beauty salon while Hamas police fight a gang in the street."
          }
        }
      },
      {
        "id": "tt2915160",
        "titleText": {
          "text": "Bethlehem"
        },
        "releaseDate": {
          "year": 2013
        },
        "plot": {
          "plotText": {
            "plainText": "Tells the story of the complex relationship between an Israeli Secret Service officer and his teenage Palestinian informant. Shuttling back and forth between conflicting points of view, the film is a raw portrayal of characters torn apart by competing loyalties and impossible moral dilemmas, giving an unparalleled glimpse into the dark and fascinating world of human intelligence."
          }
        }
      },
      {
        "id": "tt7083868",
        "titleText": {
          "text": "Bonboné"
        },
        "releaseDate": {
          "year": 2017
        },
        "plot": {
          "plotText": {
            "plainText": "A Palestinian couple resorts to an unusual way to conceive as the husband is detained in an Israeli jail where visits are restricted."
          }
        }
      },
      {
        "id": "tt10111746",
        "titleText": {
          "text": "Between Heaven and Earth"
        },
        "releaseDate": {
          "year": 2020
        },
        "plot": {
          "plotText": {
            "plainText": "Two married young couple are going through steps to get divorced when the husband finds out secrets about his past"
          }
        }
      },
      {
        "id": "tt5974388",
        "titleText": {
          "text": "In Between"
        },
        "releaseDate": {
          "year": 2017
        },
        "plot": {
          "plotText": {
            "plainText": "Three Palestinian women living in an apartment in Tel Aviv try to find a balance between traditional and modern culture."
          }
        }
      },
      {
        "id": "tt0406551",
        "titleText": {
          "text": "Bab el shams"
        },
        "releaseDate": {
          "year": 2005
        },
        "plot": {
          "plotText": {
            "plainText": "In the beginning was Palestine, and the story of Younes (Orwa Nyrabia) began, known as Abou Salem, known as the Man, said to be the father of Ibrahim, fighting the English from the age of 16, still fighting, but retrenched in the Lebanon, illegal in his own country ; the story of Nahila (Rim Turki) also began, married to him when she was twelve, breast-feeding their first child, born during the villagers' exhausting trek towards the North, fleeing their burning homes, Nahila whom he met secretly in a cave in Bab El Chams, in Galilee. Again it is the story of Doctor Khalil (Bassel Khayat), abandoned by his mother in the shambles of the refugee camps, who, in Beirut, rescued Younes in a deep coma, lulling him with the tragic story of his people ; and yet again it is that of Chams (Hala Omran) whom Khalil loved and was executed by his companions in arms. Fifty years of history full of suffering, hope and love."
          }
        }
      },
      {
        "id": "tt1320282",
        "titleText": {
          "text": "Al-mor wa al rumman"
        },
        "releaseDate": {
          "year": 2009
        },
        "plot": {
          "plotText": {
            "plainText": "A free spirited Palestinian dancer becomes the wife of a prisoner."
          }
        }
      },
      {
        "id": "tt11474480",
        "titleText": {
          "text": "The Present"
        },
        "releaseDate": {
          "year": 2021
        },
        "plot": {
          "plotText": {
            "plainText": "On his wedding anniversary, Yusef and his young daughter set out in the West Bank to buy his wife a gift. Between soldiers, segregated roads and checkpoints, how easy would it be to go shopping?"
          }
        }
      },
      {
        "id": "tt4253322",
        "titleText": {
          "text": "Love, Theft and Other Entanglements"
        },
        "releaseDate": {
          "year": 2016
        },
        "plot": {
          "plotText": {
            "plainText": "A Palestinian car thief gets into the trouble of his life when he steals the wrong car. What he thought was an Israeli car and an easy way to make money in his impoverished refugee camp turns out to be a load of misfortune when he discovers a kidnapped Israeli soldier in the trunk."
          }
        }
      },
```

#### movieById
##### query:
```
query{
  movieById(id:"tt0111354"){
    titleText{
      text
    }
    plot{
      plotText{
        plainText
      }
    }
    releaseDate{
      year
    }
  }
}
```
##### result:
```
{
  "data": {
    "movieById": {
      "titleText": {
        "text": "Hikayatul jawahiri thalath"
      },
      "plot": {
        "plotText": {
          "plainText": "A Palestinian boy becomes entranced with a beautiful Gypsy girl and a fairy tale world she weaves amidst conflict in Gaza. The children explore nature, mysticism and what their future holds, while learning to live with the surrounding brutality c. 1990. Yusef's family scrapes by in a seaside camp while his father's in prison and his heavily-armed brother's on the run, parrying with Israeli troops. Salah, Yusef's schoolmate from a well-off Arab family strives faithfully to assist them, while Yusef helps an elderly, blind neighbor escape from his lonely abandonment into the North American dreamworld he's waited so long for."
        }
      },
      "releaseDate": {
        "year": 1995
      }
    }
  }
}
```

#### moviesByReleaseYear
##### query:
```
query{
  movieByReleaseYear(year:2017){
    titleText{
      text
    }
    plot{
      plotText{
        plainText
      }
    }
    releaseDate{
      year
    }
  }
}
```
##### result:
```
{
  "data": {
    "moviesByReleaseYear": [
      {
        "titleText": {
          "text": "Bonboné"
        },
        "plot": {
          "plotText": {
            "plainText": "A Palestinian couple resorts to an unusual way to conceive as the husband is detained in an Israeli jail where visits are restricted."
          }
        },
        "releaseDate": {
          "year": 2017
        }
      },
      {
        "titleText": {
          "text": "In Between"
        },
        "plot": {
          "plotText": {
            "plainText": "Three Palestinian women living in an apartment in Tel Aviv try to find a balance between traditional and modern culture."
          }
        },
        "releaseDate": {
          "year": 2017
        }
      },
      {
        "titleText": {
          "text": "Ambulance"
        },
        "plot": {
          "plotText": {
            "plainText": "During the summer of 2014, Mohamed Jabaly joins an ambulance crew attempting to save those injured during the war in Gaza."
          }
        },
        "releaseDate": {
          "year": 2017
        }
      }
    ]
  }
}
```

#### moviesByTitleText
##### query:
```
query{
  moviesByTitleText(title:"Al"){
    titleText{
      text
    }
    plot{
      plotText{
        plainText
      }
    }
    releaseDate{
      year
    }
  }
}
```
##### result:
```
{
  "data": {
    "moviesByTitleText": [
      {
        "titleText": {
          "text": "Hikayatul jawahiri thalath"
        },
        "plot": {
          "plotText": {
            "plainText": "A Palestinian boy becomes entranced with a beautiful Gypsy girl and a fairy tale world she weaves amidst conflict in Gaza. The children explore nature, mysticism and what their future holds, while learning to live with the surrounding brutality c. 1990. Yusef's family scrapes by in a seaside camp while his father's in prison and his heavily-armed brother's on the run, parrying with Israeli troops. Salah, Yusef's schoolmate from a well-off Arab family strives faithfully to assist them, while Yusef helps an elderly, blind neighbor escape from his lonely abandonment into the North American dreamworld he's waited so long for."
          }
        },
        "releaseDate": {
          "year": 1995
        }
      },
      {
        "titleText": {
          "text": "Falastine Stereo"
        },
        "plot": {
          "plotText": {
            "plainText": "Two Palestinian brothers plan on immigrating to Canada after the Israeli air force bombs their family home. Milad (Stereo) used to be a wedding singer but because his wife dies in the attack he doesn't want to live in palestine or sing anymore. The bombing also leaves his brother Samy mute and deaf. The two set about earning money for their travel to Canada by buying a secondhand sound system that they rent out for events in Ramallah."
          }
        },
        "releaseDate": {
          "year": 2014
        }
      },
      {
        "titleText": {
          "text": "Al-mor wa al rumman"
        },
        "plot": {
          "plotText": {
            "plainText": "A free spirited Palestinian dancer becomes the wife of a prisoner."
          }
        },
        "releaseDate": {
          "year": 2009
        }
      },
      {
        "titleText": {
          "text": "Al-Nakba"
        },
        "plot": {
          "plotText": {
            "plainText": "The ethnic cleansing that occurred during the creation of the State of Israel is known to Palestinians as Nakba, which means \"catastrophe.\""
          }
        },
        "releaseDate": {
          "year": 2008
        }
      },
      {
        "titleText": {
          "text": "1948 Palestinian Exodus"
        },
        "plot": {
          "plotText": {
            "plainText": "The film presents eyewitness accounts of Palestinian refugees and Zionist soldiers to tell the story of the displacement of 750,000 Palestinians as a part of the creation of the state of Israel."
          }
        },
        "releaseDate": {
          "year": 1997
        }
      },
      {
        "titleText": {
          "text": "Stealing a Nation"
        },
        "plot": {
          "plotText": {
            "plainText": "This tells a story literally 'hidden from history'. In the 1960s and 70s, British governments, conspiring with American officials, tricked into leaving, then expelled the entire population of the Chagos islands in the Indian Ocean. The aim was to give the principal island of this Crown Colony, Diego Garcia, to the Americans who wanted it as a major military base. Indeed, from Diego Garcia US planes have since bombed Afghanistan and Iraq. The story is told by islanders who were dumped in the slums of Mauritius and in the words of the British officials who left a 'paper trail' of what the International Criminal Court now describes as 'a crime against humanity' ."
          }
        },
        "releaseDate": {
          "year": 2004
        }
      },
      {
        "titleText": {
          "text": "Life in Occupied Palestine: Eyewitness Stories & Photos"
        },
        "plot": {
          "plotText": {
            "plainText": "Anna Baltzer, the Jewish-American granddaughter of Holocaust refugees, provides a straightforward account of the Israeli-Palestinian conflict, while chronicling the almost unbearable living conditions of Palestinians under the Occupation."
          }
        },
        "releaseDate": {
          "year": 1997
        }
      }
    ]
  }
}
```

### Mutations

#### createMovie
##### mutation:
```
mutation{
  createMovie(id: "tt2369543", plotText: "1967. The world is alive with change: brimming with reawakened energy, new styles, music and an infectious sense of hope. In Jordan, a different kind of change is underway as tens of thousands of refugees pour across the border from Palestine. Having been separated from his father in the chaos of war, Tarek, 11, and his mother Ghaydaa, are amongst this latest wave of refugees. Placed in 'temporary' refugee camps made up of tents and prefab houses until they would be able to return, they wait, like the generation before them who arrived in 1948. With difficulties adjusting to life in Harir camp and a longing to be reunited with his father, Tarek searches a way out, and discovers a new hope emerging with the times. Eventually his free spirit and curious nature lead him to a group of people on a journey that will change their lives. When I Saw You is the story of people affected by the times around them, in search of something more in their lives. A journey full of adventure, love, humor, and the desire to be free. A story of the human spirit that knows no borders.", title: "When I saw you") {
    id
  }
}
```
##### variables:
```
{
    id: "tt2369543",
    title: "When I saw you",
    plotText: "1967. The world is alive with change: brimming with reawakened energy, new styles, music and an infectious sense of hope. In Jordan, a different kind of change is underway as tens of thousands of refugees pour across the border from Palestine. Having been separated from his father in the chaos of war, Tarek, 11, and his mother Ghaydaa, are amongst this latest wave of refugees. Placed in 'temporary' refugee camps made up of tents and prefab houses until they would be able to return, they wait, like the generation before them who arrived in 1948. With difficulties adjusting to life in Harir camp and a longing to be reunited with his father, Tarek searches a way out, and discovers a new hope emerging with the times. Eventually his free spirit and curious nature lead him to a group of people on a journey that will change their lives. When I Saw You is the story of people affected by the times around them, in search of something more in their lives. A journey full of adventure, love, humor, and the desire to be free. A story of the human spirit that knows no borders."
}
```
##### result:
```
{
  "data": {
    "createMovie": {
      "id": "tt2369543",
      "titleText": {
        "text": "When I saw you"
      }
    }
  }
}
```

#### updateMovie
##### mutation:
```
mutation {
  updateMovie(
    id: "tt2369543"
    releaseDate: {year: 2012}
  ) {
    id
    titleText{
      text
    }
    releaseDate{
      year
    }
  }
}
```
##### variables:
```
{
    id: "tt2369543",
    releaseDate: {year: 2012}
}
```
##### result:
```
{
  "data": {
    "updateMovie": {
      "id": "tt2369543",
      "titleText": {
        "text": "When I saw you"
      },
      "releaseDate": {
        "year": 2012
      }
    }
  }
}
```

#### deleteMovie
##### mutation:
```
mutation {
  deleteMovie(id:"tt2369543"){
    id
  }
}
```
##### variables:
```
{
    id: "tt2369543"
}
```
##### result:
```
{
  "data": {
    "deleteMovie": {
      "id": "tt2369543"
    }
  }
}
```

## Future Development

- The mutations queries need some work
- I'd love to make this a more complete project with a frontend and a backend to persist the new data.