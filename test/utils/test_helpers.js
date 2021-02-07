'use strict'
const Any = require('random-values-generator');


class EntityTestCase {
  constructor(vertex, entityStruct) {
    this.vertex = vertex // (get schema)
    this.entity = entity
    this.entityInput = entityStruct.entityInput
    this.operations = entityStruct.operations
    this.name = entityStruct.name
    this.entities = {}
    this.tests = {}
  }

  runTests(num = 100, args = {}) {
    //describe
  }

  generateTests(num = 100, args = {}) {
    this.entities = {}
    var entity;
    for (var i = 0; i < num; i++) { // generate inputs
      entity = this.generateRandomEntity()
      this.entities[entity.id] = entity
      this.generatePutTest(this.operations["put"], entity)
      this.generateGetTest(this.operations["get"], entity)
    }

    //set of ids
    //ranges

    //takes in all of the entities, gets the range of ids, calculates the range of the ids
    //gets the range of all of the values (tracks this)
    for (var i = 0; i < num; i++) {
      //need, entityDict, ranges, set of ids
      //generateRandom TestValue Inputs
      //getOutputs

      //store the tests
      this.generateGetAllTest(this.operations["getAll"], entityDict)
      this.generateSearchTest(this.operations["search"], entityDict)
    }
  }

  generateSearchTest(name, entities, entityInputs) {
    //type
  }

  generatePutTest(name, entities, entityInputs) {}

  generateGetTest(name, entities, entityInputs) {

  }

  generateGetAllTest(name, entities, entityInputs) {}

  generateRandomFunction() {
    //
    //what does app take in...
    //vertex.app[name]. (operation)
    //variables
    // it('should be able to make proofs and do audits from mocked entities', function() {
    //   //audit
    //   //proof
    //   assert.equal(true, false);
    // });
    //expected/expected fields
    return true
  }

  generateRandomEntity(args = {}) {
    let newRandomEntity = {}
    let newRandomEntityInput = {}
    let id = ""
    for (const [name,
        var
      ] of this.entity) {
      let val = generateRandomOfType(var.type)
      if (name == "ID") {
        id = val
      }
      if (name != "Proof") {
        newRandomEntityInput[name] = val
      }
      newRandomEntity[name] = val
    }
    return {
      id: id,
      entity: newRandomEntity,
      entityInput: newRandomEntityInput
    }
  }

  generateRandomOfType(varType, args = {}) {
    var randomVar;
    switch (varType) {
      case "String":
        randomVar = Any.string(32)
        break
      case "Float":
        randomVar = Any.positiveNumber()
        break
      case "ID":
        randomVar = Any.string(32)
        break
      case "Int":
        randomVar = Any.positiveInteger()
        break
      case "Bool":
        randomVar = false
        break
      default:
        randomVar = Any.string(32)
        break
    }
    return randomVar
  }
}




module.exports = EntityTestCase;
