const express = require("express");
const app = express();
const PORT = 4000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
let requests = [];
app.use(
  "/graphql",
  (req, res, next)=> {
    const requestInfo = {
      method: req.method,
      body: req.body,
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
})

app.listen(PORT, () => {
  console.log("Server running");
});