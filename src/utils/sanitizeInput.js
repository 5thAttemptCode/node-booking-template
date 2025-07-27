const validator = require("validator")

function sanitizeInput(input){
  if(typeof input !== "string") return null
  let sanitized = validator.trim(input)
  sanitized = validator.escape(sanitized)
  return sanitized
}

function sanitizeEmail(email){
  if(!validator.isEmail(email)) return null
  return validator.normalizeEmail(email)
}

module.exports = {sanitizeInput, sanitizeEmail}