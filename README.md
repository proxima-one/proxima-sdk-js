# Proxima SDK JS

[![CircleCI](https://circleci.com/gh/proxima-one/ProximaDB.svg?style=svg)](https://circleci.com/gh/proxima-one/ProximaDB)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

The Proxima SDK facilitates interactions with the Proxima node and data vertices, including the routing of data requests, proof verification, and the construction of fraud proofs. The SDK is used throughout the Proxima Protocol, within the data aggregator, the Proxima node, and the data vertices, as well as being the main developer interaction interface when querying the network.


## Quick Start

### Requirements
- npm/yarn
- node

### Installation

`npm install proxima-sdk-js`

### Testing
Testing individual data vertices. Tests can be autogenerated through the Proxima CLI, such that the queries and mutations of an individual data vertex can be tested.

`npm test`


## Design
The Proxima SDK is designed to handle requests and connections to data vertices with proofs, audits, and queries, as well as providing access to the Proxima node. Additional functionality can be added to the SDK by adding plug-ins.

### Data Vertex Plug-in
A data vertex plug-in enables rich interactions between that data vertex and the Proxima SDK. In order for these interactions a Data Vertex Plug-in needs:
- Connections/Config
- Query
- Audit Function
- Proof Function

The Proxima CLI automatically generates a Data Vertex plug-in for each new data vertex that is generated.

## Usage

### init SDK Client
- Importing
- Initializing
- Connecting

```javascript
//importing
//initializing
//connecting
//request data vertex
```

### Data Vertex Plug-ins

- Getting a data vertex
- Connecting to data vertex
- Mutations on data vertex
- Querying data vertex
- Proofs
- Audits  

```javascript
//getting data vertex?
//connecting to a data vertex
//requests to the data vertex  
//mutations on a data vertex
//queries
//proofs
//audits
```


## Developing 3rd Party Plug-ins
3rd Party Plug-ins for Proxima SDK can be developed and deployed to add functionality around payments, fraud proofs, routing, networking, authorization, as well as data manipulation.


## Contributing
<!--
This should include:
- Contributing Guidelines
- Code of Conduct
- Good first issues/Pull requests
-->
Read below to learn how you can take part in improving our project.

### Code of Conduct

We have adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text]() so that you can understand what actions will and will not be tolerated.

### Contributing Guide

Read our [contributing guide]() to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues]() that contain bugs which have a relatively limited scope. This is a great place to get started.

## Licensing

This project is licensed under MIT licensing guidelines.
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
