const myIndex  = require('../src')

describe("a test", () => {
  it("should show when expectations and results don't match", () => {
    expect(true).toBe(true)
  })

  it("should test imported modules", () => {
    expect(myIndex.multiply(2, 3)).toBe(6)
  })
})
