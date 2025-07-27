const { sanitizeInput, sanitizeEmail } = require("../utils/sanitizeInput")

describe("sanitizeInput, utilites", () => {
  describe("sanitizeInput", () => {
    test("trims and escapes string", () => {
      expect(sanitizeInput("  <script>bad</script>  ')).toBe('&lt;script&gt;bad&lt;/script&gt;"))
    })

    test("returns null for non-string input", () => {
      expect(sanitizeInput(123)).toBeNull()
    })
  })

  describe("sanitizeEmail", () => {
    test("normalizes valid email", () => {
      expect(sanitizeEmail("TEST@EXAMPLE.com")).toBe("test@example.com")
    })

    test("returns null for invalid email", () => {
      expect(sanitizeEmail("not-an-email")).toBeNull()
    })
  })
})