import chai from 'chai'
import ClassObj from './sampleClass'
import AuthController from './sampleClass1'

const expect = chai.expect
const { extractArgsList } = require('../src')

describe('Es6 class Arg list', () => {
  it('Should return an array of string', () => {
    expect(extractArgsList(ClassObj).length).to.equal(2)
  })

  it('Should return the correct name of parameter ["authService"]', () => {
    expect(extractArgsList(AuthController)[0]).to.equal('authService')
  })
})
