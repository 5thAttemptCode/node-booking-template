const bcrypt = require("bcrypt")


async function hashPassword(password){

  const saltRounds = 10

  try{
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch(error){
    console.error("Error hashing password: ", error)
    throw error
  }
}

module.exports = hashPassword 