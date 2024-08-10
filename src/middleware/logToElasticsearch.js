import esClient from "../config/elasticsearch.js";

const logToElasticsearch = async (req, _res, next) => {
    const { method, url, headers, body } = req;
    const logEntry = {
        timestamp: new Date(),
        method,
        url,
        headers,
        body,
    };

    try {
        await esClient.index({
            index: 'logs',
            document: logEntry,
        });
        next();
    } catch (err) {
        console.error('Elasticsearch Error:', err);
        next(err);
    }
};

export default logToElasticsearch;