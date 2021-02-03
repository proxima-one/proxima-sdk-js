var test =  require("./utils/proof_mocks.js");
const assert = require('bsert');
const proof = require("../src/proof/index.js")

var {
  PROOF_FALSE_ERROR,
  PROOF_FALSE_INCORRECT,
  PROOF_FOR_VALUE_1,
  PROOF_1,
  PROOF_TRUE_CORRECT,
  PROOF_TRUE_EMPTY,
  VALUE_1,
  VALUE_2,
  VALUE_EMPTY,
} = test;

var proofsCorrect = [PROOF_1, ];



// function proofParseValueTest() {
//   let emptyValue = function() {
//     return proof.parseValue(EMPTY)
//   }
//
//   let badValue = function() {
//     return proof.parseValue(VALUE_2)
//   }
//   //assert.throws(badValue, SyntaxError, "Should throw error")   //incorrect value (incorrect value) throws an error
//   proof.parseValue(VALUE_2)
//   proof.parseValue(VALUE_1)
//   assert.throws(emptyValue, Error, "Should throw error")
// }

function proofEnsureProofValueTest() {
  let p = proof.parseProof(PROOF_1)
  let proof_value = p.proof_value
  let value = VALUE_1
  assert(proof.checkValue(proof_value, value))
}

function proofParseProofTest() {
  for (var p in proofsCorrect) {
    let pr = proof.parseProof(PROOF_1)
    assert(pr.root && pr.proof && pr.proof_value && pr.key)
  }
  }

function proofVerifyTest() {
  assert(proof.verify(VALUE_1, PROOF_1))
}




describe('Proof', function() {

    it('Should parse a proofs from input.', function(){
      proofParseProofTest()
    });

    it('Should ensure that proof value and given value are the same.', function(){
      proofEnsureProofValueTest();
    });

    it('Should effectively solve proofs from a variety of contexts.', function(){
      proofVerifyTest();
    });
});
