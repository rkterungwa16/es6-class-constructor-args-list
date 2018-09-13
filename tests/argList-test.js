const chai = require('chai')
const expect = chai.expect
const { extractArgsList } = require('../src')

const classObj = ''
describe('Es6 class Arg list', () => {
  it('Should return string', () => {
    expect(extractArgsList(typeof classObj) === 'string')
  })
})
