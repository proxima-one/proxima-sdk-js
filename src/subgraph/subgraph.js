'use strict';
const Proof = require('../proof/index.js');
const gql = require('graphql-tag');
const { ApolloClient } =  require('apollo-client');
const {InMemoryCache } =  require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const fetch = require("node-fetch");
const {ApolloFetch} = require("apollo-fetch");

/*
const customFetch = (uri, options) => {
  const { operationName } = JSON.parse(options.body);
  return fetch(`${uri}/graph/graphql?opname=${operationName}`, options);
};

const link = createHttpLink({ fetch: customFetch });
*/

class Subgraph {
  constructor(client_uri, query_map, audit_fn, args={}) {
    this.validate(client_uri, query_map, audit_fn)
    this._client = this.constructClient(client_uri)
    this._query = query_map
    this.audit_fn = audit_fn
    this.verify = Proof.verify
  }

  validate(client_uri, query, audit) {
    if (!(audit instanceof Function)) {
      throw new Error("Audit must be a function")
    }
    if (!(client_uri) || !(query) || !(audit)) {
       throw new Error("Missing an argument")
    }
    return true
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

module.exports = Subgraph
