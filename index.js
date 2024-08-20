require("@dotenvx/dotenvx").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT ;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");
const helmet = require("helmet");


let requests = [];

function ValidateApiKey(req, res, next) {

	const apiKey = req.headers["x-api-key"];

	if (!apiKey) {
    res.status(401);
    LogRequest(req, res);
    return res.json({ error: "API key is missing!" });
  }

  if (apiKey !== process.env.API_KEY) {
    res.status(403);
    LogRequest(req, res); 
    return res.json({ error: "API key is invalid" });
  }

  LogRequest(req, res);
	next();

}

function LogRequest(req, res, next){
	const requestInfo = {
    method: req.method,
    statusCode: res.statusCode,
    body: req.body,
    headers: req.rawHeaders,
    timestamp: new Date(),
  };
  if (requests.length > 50) {
    requests.shift();
  }
  requests.push(requestInfo);
}

app.use(cors());
app.use(express.json());
app.use(helmet());
app.disable("x-powered-by");
app.use(
  "/graphql",
  ValidateApiKey,
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