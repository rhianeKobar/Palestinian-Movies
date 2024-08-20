require("@dotenvx/dotenvx").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT ;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");
const helmet = require("helmet");

function ValidateApiKey(req, res, next) {

	const apiKey = req.headers["x-api-key"];

	 if (!apiKey) {
     return res.status(401).json({ error: "API key is missing!" });
   }

   if (apiKey !== process.env.API_KEY) {
     return res.status(403).json({ error: "API key is invalid" });
   }

	next();

}

app.use(cors());
app.use(express.json());
app.use(helmet());
app.disable("x-powered-by");

let requests = [];
app.use(
  "/graphql",
	ValidateApiKey,
  (req, res, next) => {

    const requestInfo = {
      method: req.method,
      statusCode: res.statusCode,
      body: req.body,
      headers: req.rawHeaders,
      timestamp: new Date(),

    };
    if(requests.length > 50) {
      requests.shift();
    }
    requests.push(requestInfo);
    next();
  },
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/debug/responses', (req, res) => {
  res.json(requests);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});