/**
 * Sisinglecondition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    operand: {

      type : 'string'

    },

    operatorFunction: {

      type : 'string'

    },

    constant: {

      type : 'integer'

    },

    rules: {
      model : 'rule'
    }
  }
};

