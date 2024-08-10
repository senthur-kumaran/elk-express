import { Client } from "@elastic/elasticsearch";
import config from "./config.js";

const esClient = new Client({ node: config.elasticsearchUrl });

export default esClient;