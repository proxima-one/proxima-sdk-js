'use strict'



class EntityTestCase {
  constructor(entityStruct) {
    //entities
      //entity
      //entityInput
    //entityInputs
    //entityStructs
    //schema
    //name
    //operations
  }
  //parse

generate(num) {
    this.entities = {}
    var entity;
    // for (var i) { // generate inputs
    //   this.entities[entity.id] = entity

    //operations/functions
    //get
      //list
    //put
      //list
    //getAll
    //search
  }

  generateRandomEntity(entityStruct) {
    let newRandomEntity = {}
    let newRandomEntityInput = {}
    let id = ""
    for (const [name, var] of entityStruct) {
      let val = getRandom(var.type)
      if (name == "ID") {
        id = val
      }
      if (name != "Proof") {
        newRandomEntityInput[name] = val
      }
      newRandomEntity[name] = val
    }
    return {id: id, entity: newRandomEntity, entityInput: newRandomEntityInput}
}
    generateRandomFunction() {
      //what does app take in...
      //vertex.app[name]. (operation)
        //variables
      //expected/expected fields
      return true
    }

  runTests(number, args = {}) {
    this.generate(num, args)
    this.runMutationTests(num, args)
    this.runQueryTests(num, args)
  }
    runMutationTests(num, args) {
      //for loop
    }
    runMutationTest() {
      //generateRandomMutation
      //update
      //check
    }

    runQueryTests(num, args) {}
    runQueryTest() {
      //get
        //generateRandomGet
        //generateRandomGetAll
        //generateRandomSearch
      //getAll

      //search
    }

    runAuditTest() {
      return true
    }

    runProofTest() {
      return true
    }
}








//create type query test
//type mutation test
//test audit
//test proof


// it('should be able to make proofs and do audits from mocked entities', function() {
//   //audit
//   //proof
//   assert.equal(true, false);
// });

//test data get

function generateEntityTestData(entityStruct) {
  entities = {}
  entityInputs = []
  for name, varType in entityStruct: {
    entitys.append(generateRandom(varType))

  }
  return entities, entityInputs
}

function generateRandomEntity(entityStruct) {
  //entities
}

function entityTest(name, entityStruct) {
  entities, entityInputs = generateEntityTestData(name, entityStruct)
  //operations
  mutationTest(name, entity, entityInputs)
  getTest(name, entity, entityInputs)
  getAllTest(name, entity, entityInputs)
  queryTest(name, entity, entityInputs)
}

function queryTest(name, entities, entityInputs) {
  //

}

function mutationTest(name, entities, entityInputs) {

}

function getTest(name, entities, entityInputs) {

}

function getAllTest(name, entities, entityInputs) {

}
