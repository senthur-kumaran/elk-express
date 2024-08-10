import express from "express";
import 'dotenv/config';
import config from "./config/config.js";
// import logToElasticsearch from "./middleware/logToElasticsearch.js";
import logToLogstash from "./middleware/logToLogstash.js";

const { port } = config
const app = express();

app.use(express.json());
// app.use(logToElasticsearch);
app.use(logToLogstash);

app.get('/', (req, res) => {
    res.send('GET API!');
});

app.post('/', (req, res) => {
    res.send('POST API!');
});

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});
