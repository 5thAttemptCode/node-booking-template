const hashPassword = require("../utils/hashPassword")
const bcrypt = require("bcrypt")

describe("hashPassword utility", () => {
  test("returns a hashed string different from the input", async () => {
    const password = "MySecretPassword"
    const hash = await hashPassword(password)
    expect(typeof hash).toBe("string")
    expect(hash).not.toBe(password)
  })

  test("hash can be valildated by bcrypt", async () => {
    const password = "MyOtherSecretPassword"
    const hash = await hashPassword(password)
    const isMatch = await bcrypt.compare(password, hash)
    expect(isMatch).toBe(true)
  })

  test("throws on invalid input", async () => {
    await expect(hashPassword(null)).rejects.toThrow()
  })
})