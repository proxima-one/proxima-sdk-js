'use strict';

const DataVertex = require('../data-vertex/index.js');

class Proxima {
  constructor() {
    this._vertexMap = {}

  }
  //default audit fn

  //default verify fn

  addDataVertex(name, vertex) {
    if (vertex instanceof DataVertex) {
      this._vertexMap[name] = vertex
    } else {
      throw new Error("Incorrect type for subgraph")
    }
  }

  get vertexMap() {
    return this._vertexMap
  }
}

module.exports = Proxima
