'use strict';
const Proof = require('../proof/index.js');
const gql = require('graphql-tag');
const { ApolloClient } =  require('apollo-client');
const {InMemoryCache } =  require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const fetch = require("node-fetch");
const assert = require('bsert')
const {ApolloFetch} = require("apollo-fetch");

/*
const customFetch = (uri, options) => {
  const { operationName } = JSON.parse(options.body);
  return fetch(`${uri}/graph/graphql?opname=${operationName}`, options);
};

const link = createHttpLink({ fetch: customFetch });
*/

class DataVertex {
  constructor(name, client_uri, query_map, audit_fn, args={}) {
    this.validate(client_uri, query_map, audit_fn)
    this.name = name
    this._client = this.constructClient(client_uri)
    this._query = query_map
    this.audit_fn = audit_fn
    this.verify = Proof.verify
    this._app = this.initAppQueries(query_map)
  }

  validate(client_uri, query, audit) {
    if (!(audit instanceof Function)) {
      throw new Error("Audit must be a function: ", audit)
    }
    if (!(client_uri) || !(query) || !(audit)) {
       throw new Error("Missing an argument")
    }
    return true
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
      app[tableName] = tableFns;
    }
    return app
  }

  set app(query_fns) {
    this._app = query_fns
  }

  get app() {
    return this._app
  }

  queryFn(queryText) {
    return (async function (args) {this.client.query({query: queryText, variables: args})});
  }

  mutationFn(mutationText) {
    return (async function (args) {this.client.mutate({mutate: mutateText, variables: args})});
  }

  constructClient(client_uri) {
    const cache = new InMemoryCache();
    const link = createHttpLink({
      uri: client_uri,
      fetch: fetch,
    });
    return new ApolloClient({uri: client_uri, cache:cache, link: link,});
  }

  get client() {
    return this._client
  }

  set client(client) {
    assert(client instanceof ApolloClient || typeof client == ApolloFetch)
    this._client = client

  }

  get query() {
    return this._query
  }

  set query(query) {
    this._query = query
  }

  async audit(value) {
    let resp = await this.audit_fn(value)
    return resp
  }

  verify(value, proof) {
    return this._verify(value, proof)
  }
}

module.exports = DataVertex
