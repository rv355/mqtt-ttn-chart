This project demonstrates the visualization of data streams received from multiple sensors over MQTT through The Things Network.

## Features
### Server
+ Subscribes to MQTT topic
+ forwards the received messages to the client using websockets


### Client
+ real-time data visualization with a multi-series line chart

## Getting Started

### Prerequisites

Before you run the client, be sure you have these downloaded/installed on your machine:

+ node.js
+ npm
+ have the feedmqtt.ttn secrets file

### Installing

To get started with this project, follow the installation steps described here,


## 1. server

Navigate inside the root folder and run:

Add appropriate data for opt, mqttClient, mqttTopic, and sensor in the app.js file.

npm install
npm start

this will install the dependencies and start the express server locally on port 3000.


## 2. client

*Before running the client, be sure you have already completed steps 1 and 2, and have both Moquette and mqtt-realtime-chart-server running in separate terminal windows.*

Open a new terminal window and navigate inside the root folder of the client application, then run:

```
npm install
npm start
```

After compilation, you will see the link in the terminal *(e.g. http://localhost:8081)* where the application is currently running. Use your browser to navigate to that link. 




## Built With


### Server
* [Express.js](https://github.com/expressjs/express) - minimalist web framework for node.
* [Socket.io](https://github.com/socketio/socket.io) - real-time bidirectional event-based communication using websockets
* [MQTT.js](https://github.com/mqttjs/MQTT.js) - MQTT client for Node.js and the browser 

### Client
* [Vue.js](https://github.com/vuejs/vue) - JavaScript framework for building UI on the web.
* [Rickshaw.js](https://github.com/shutterstock/rickshaw) - JavaScript toolkit for creating interactive real-time graphs
* [Socket.io-client](https://github.com/socketio/socket.io) - real-time bidirectional event-based communication using websockets (client)
* [Bootstrap](https://github.com/twbs/bootstrap) - HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.



## Authors

* **Rohit Verma** - [GitHub](https://github.com/rv355)

