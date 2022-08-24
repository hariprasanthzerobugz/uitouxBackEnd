const { validationResult } = require('express-validator');
const { response } = require('../response/reposne');
 
const parallelValidate = validations => {
    return async (req, res, next) => {
      await Promise.all(validations.map(validation => validation.run(req)));
 
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
 
      const erroryHandle = await [...errors.array().map(err => err.msg)]
      return response(res, 400, false, erroryHandle.toString(), errors.array() )
    };
  };
 
  const sequentialValidate = validations => {
    return async (req, res, next) => {
      for (let validation of validations) {
        const result = await validation.run(req);
        if (result.errors.length) break;
      }
 
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
 
      const erroryHandle = await [...errors.array().map(err => err.msg)]
      return response(res, 400, false, erroryHandle.toString(), errors.array() )
    };
  };
 
  module.exports = {
      parallelValidate,
      sequentialValidate
  }
