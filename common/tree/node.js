'using strict';

const _ = require('lodash');

// resolver ?!

function getUniqueVariables(fields, resolver) {
  return _.transform(fields, (result, value) => {
    result.intersect = _.concat(result.intersect, _.union(result.intersect, resolver(value).all));
  }, { intersect: [] }).intersect;
}

function _constructNode(parents, name) {
  return {
    name,
    parents,
    childs: []
  }
}

function _array(environment, resolver) {
  return _.transform(environment, (result, value, key) => {
    let fields = value.fieldsToResolve;
    result.push(_constructNode(getUniqueVariables(value.fieldsToResolve, resolver), environment.name));
  }, []);
}


module.exports = {
  make: {
    one: _constructNode,
    all: _array
  }
};

/*
 'using strict';

 const _ = require('lodash');

 // resolver ?!

 class Node {
 constructor(variableName, fieldName, parents) {
 this._variableName = variableName;
 this._fieldName = fieldName;
 this._parents = parents;
 }

 get path() {
 return this._variableName.concat('.');
 }
 }

 function _constructNode(parents, name) {
 return {
 name,
 //    field,
 parents,
 childs: []
 }
 }

 function _array(environment, resolver) {
 return _.transform(environment, (result, value, key) => {
 let fields = value.fieldsToResolve;
 _.forEach(fields, (value) => {
 result.push(_constructNode(resolver(value).all, environment.name));
 });
 }, []);
 }


 module.exports = {
 make: {
 one: _constructNode,
 all: _array
 }
 };

 */
