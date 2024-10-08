# ELK-Express Application

This project demonstrates an Express application integrated with the ELK (Elasticsearch, Logstash, Kibana) stack using Docker Compose. Logs generated by the application are sent to Logstash, which forwards them to Elasticsearch for indexing, and they can be visualized using Kibana.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Docker and Docker Compose
- Node.js and npm (if running the Express app outside Docker)

## Getting Started

### 1. Clone the Repository

To start, clone the repository to your local machine and navigate to the project directory:

```
git clone https://github.com/senthur-kumaran/elk-express
cd elk-express
```

### 2. Set Up ELK Stack
The ELK stack is configured to run using Docker Compose. The docker-compose.yml file defines the services for Elasticsearch, Logstash, and Kibana.

### 3. Logstash Configuration
The logstash.conf file configures Logstash to receive logs via HTTP on port 5044, filter them if necessary, and then send them to Elasticsearch.

### 4. Running the ELK Stack
To start the ELK stack, use the following command:

```
docker-compose up -d
```

This command will start Elasticsearch, Logstash, and Kibana services. You can access Kibana at http://localhost:5601.

### 5. Running the Express Application
To run the Express application, install the necessary dependencies and start the server:

```
npm install
npm start
```

### 6. Accessing Logs in Kibana
To view logs in Kibana:

Open Kibana in your browser at http://localhost:5601.
Navigate to the Discover section.
Select the correct index pattern (logs-*) to view your logs.

### 7. Stopping the ELK Stack
To stop the ELK stack, use the following command:

```
docker-compose down
```

## Troubleshooting
### Elasticsearch Connection Issues
Ensure that Elasticsearch is running and accessible at http://localhost:9200.

### Logstash Errors
If you encounter any issues with Logstash, check the Logstash logs:

```
docker logs logstash
```

### Kibana Access
If Kibana isn't loading, verify that the kibana container is running and properly connected to Elasticsearch.

## Conclusion
This setup provides a powerful solution for logging and monitoring by integrating an Express application with the ELK stack. Logs are sent from the application to Logstash, indexed in Elasticsearch, and visualized in Kibana, offering a comprehensive way to manage application logs.