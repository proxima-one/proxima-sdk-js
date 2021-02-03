
const {
  QUERIES,
  GOOD_SUBGRAPH_CONSTRUCTION_VALUES,
  BAD_SUBGRAPH_CONSTRUCTION_VALUES
} = require("./utils/subgraph_mocks.js")

const assert = require("bsert")
const DataVertex = require("../src/data-vertex/index.js")
const Proxima = require("../src/proxima/index.js")

function createDataVertex(args) {
  return new DataVertex(args.name, args.client_uri, args.query, args.audit)
}

function proximaAddDataVertexTest() {
  let proxima = new Proxima()
  let good_subgraph = createDataVertex(GOOD_SUBGRAPH_CONSTRUCTION_VALUES)
  proxima.addDataVertex("good_subgraph", good_subgraph)
  assert(proxima.vertexMap.good_subgraph)

  let bad_subgraph = "not a subgraph"
  assert.throws(function () {proxima.addDataVertex("bad_subgraph", bad_subgraph)}, Error, "Should throw error for bad subgraphs")
}

function proximaAccessDataVertexTest() {
  let proxima = new Proxima()
  let good_subgraph = createDataVertex(GOOD_SUBGRAPH_CONSTRUCTION_VALUES)
  proxima.addDataVertex("good_subgraph", good_subgraph)
  let vertex = proxima.vertexMap.good_subgraph;

  assert((vertex.query == GOOD_SUBGRAPH_CONSTRUCTION_VALUES.query), "Subgraph query must be set correctly" )
  assert((vertex.audit_fn == GOOD_SUBGRAPH_CONSTRUCTION_VALUES.audit), "Subgraph audit must be set correctly" )
  assert((vertex.verify instanceof Function), "Subgraph verify must be a function." )
}

describe('Proxima', function() {
    it('Should only allow for the addition of valid subgraphs', function(){
      proximaAddDataVertexTest();
    });

    it('Should allow for the access of subgraphs, and their variables.', function(){
      proximaAccessDataVertexTest();
    });

});
