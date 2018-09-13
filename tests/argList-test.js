import chai from 'chai'
import ClassObj from './sampleClass'

const expect = chai.expect
const { extractArgsList } = require('../src')

describe('Es6 class Arg list', () => {
  it('Should return an array of string', () => {
    expect(extractArgsList(ClassObj).length).to.equal(2)
  })
})
