const {
  QUERIES,
  GOOD_SUBGRAPH_CONSTRUCTION_VALUES,
  BAD_SUBGRAPH_CONSTRUCTION_VALUES
} = require("./utils/subgraph_mocks.js")

const assert = require("bsert")
const DataVertex = require("../src/data-vertex/index.js");
const {
  ApolloClient
} = require('apollo-client');
const {
  createApolloFetch
} = require("apollo-fetch");


function createDataVertex(args) {
  return new DataVertex(args.name, args.client_uri, args.query, args.audit)
}

function dataVertexCreationTest() {
  let vertex = createDataVertex(GOOD_SUBGRAPH_CONSTRUCTION_VALUES)
  assert((vertex.client_uri == GOOD_SUBGRAPH_CONSTRUCTION_VALUES.client), "Data Vertex client must be set correctly")
  assert((vertex.query == GOOD_SUBGRAPH_CONSTRUCTION_VALUES.query), "Data Vertex query must be set correctly")
  assert((vertex.audit_fn.toString() == GOOD_SUBGRAPH_CONSTRUCTION_VALUES.audit.toString()), "Data Vertex audit must be set correctly")
  assert((vertex.verify instanceof Function), "Data Vertex verify must be a function.")

  //vertex.client = createApolloFetch({uri: GOOD_SUBGRAPH_CONSTRUCTION_VALUES.client_uri});

  assert.throws(function() {
    createDataVertex(BAD_SUBGRAPH_CONSTRUCTION_VALUES)
  }, Error, "Error should be thrown for bad subgrpah") //assert error
}

function dataVertexQueryTest() {
  let vertex = createDataVertex(GOOD_SUBGRAPH_CONSTRUCTION_VALUES)
  assert((vertex.query.VALIDATORS == QUERIES.VALIDATORS), "Validators are not equal")
  assert((vertex.query.FEES == QUERIES.FEES), "Fees are not equal")
}

// it('should be able to make proofs and do audits from mocked entities', function() {
//   //audit
//   //proof
//   assert.equal(true, false);
// });

function generateEntities(fileName, vertex) {
  let fileString = fs.readFileSync(fileName).toString() //read file
  let jsonDict = JSON.parse(fileString) //parse JSON
  let entities = {}
  for (const [name, entity] of jsonDict) {
    //here
    entities[name] = new EntityTestCase(vertex, entityStruct)
  }
  return entities
}

describe('proxima vertex client', function() {

  describe('Proxima Vertex Resolvers Test', function() {
    it('should be able to initialize without error', function() {
      //init from config/queries
      // name = ""
      // serverURI = ""
      // queries = ""
      // vertex = new VertexClient(name, serverURI, queries)
    });
    it('Should validate the creation of data vertex', function() {
      dataVertexCreationTest();
    });

    it('Should enable access of queries from the data vertex.', function() {
      dataVertexQueryTest();
    });
  });

  describe('Proxima Vertex Resolvers Test', function() {
    let testFile = ""
    //vertexConfig
    let vertex = "" //create vertex
    let entityTestCases = getEntities(testFile, vertex)

    for (const [name, entityTestCase] of entityTestCases) {
      entityTestCase.runTests()
    }
  });
});
