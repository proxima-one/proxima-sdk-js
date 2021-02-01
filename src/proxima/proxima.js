'use strict';

const Subgraph = require('../subgraph/index.js');

class Proxima {
  constructor() {
    this._vertexMap = {}

  }
  //default audit fn
  
  //default verify fn

  addVertex(name, vertex) {
    if (subgraph instanceof VertexClient) {
      this._vertexMap[name] = subgraph
    } else {
      throw new Error("Incorrect type for subgraph")
    }
  }

  get vertexMap() {
    return this._vertexMap
  }
}

module.exports = Proxima
