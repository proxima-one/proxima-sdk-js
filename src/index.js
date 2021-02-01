'use strict';
const { ApolloClient, InMemoryCache} = require('@apollo/client');
const Subgraph = require("./subgraph/index.js");

class VertexClient extends Subgraph {
  constructor(name, serverURI, queries, args = {}) {
    //
    this.name = name;
    this.serverURI = serverURI;
    this.args = args;
    //validate
    this.client = new ApolloClient({uri: this.serverURI, cache: new InMemoryCache()});
    this.app = initAppQueries(queries);
  }

  initAppQueries(app_queries) {
    let app = {}
    for (var tableName in app_queries) {
      let table = app_queries[tableName]
      let tableFns = {
        get: this.queryFn(table.get),
        getAll: this.queryFn(table.getAll),
        search: this.queryFn(table.search),
        put: this.mutationFn(table.put)
      }
      this.app[tableName] = tableFns;
    }
    return app
  }

  get app() {
    return app
  }

  queryFn(queryText) {
    return (async function (args) {this.client.query({query: queryText, variables: args})});
  }

  mutationFn(mutationText) {
    return (async function (args) {this.client.mutate({mutate: mutateText, variables: args})});
  }
}

module.exports = VertexClient;
