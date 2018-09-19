"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractArgsList = extractArgsList;

function extractArgsList(classObj) {
  var classConstructorElts = extractConstructorElt(classObj);
  var constructorArgs = classConstructorElts.filter(function (arg) {
    return arg !== 'constructor' ? arg : null;
  });
  return constructorArgs;
}

function extractConstructorElt(classObj) {
  var classEltsString = classObj.toString().split('\n').filter(function (classElements) {
    return classElements.match(/([()])/g);
  });
  return classEltsString[0].replace(/[^\w]/g, ' ').split(' ');
}