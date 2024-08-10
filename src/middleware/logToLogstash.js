import axios from "axios";
import config from "../config/config.js";

const logToLogstash = async (req, _res, next) => {
    const { method, url, headers, body } = req;
    const logEntry = {
        timestamp: new Date(),
        method,
        url,
        headers,
        body,
    };

    try {
        await axios.post(config.logstashUrl, logEntry);
        next();
    } catch (err) {
        console.error('Logstash Error:', err);
        next(err);
    }
};

export default logToLogstash;