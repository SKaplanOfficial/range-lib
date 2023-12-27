import { range } from "../lib";

describe("Range Union Tests", () => {
  it("should return a range with the same start and end when the ranges are the same", () => {
    const range1 = range(0, 10);
    const range2 = range(0, 10);
    expect(range1.union(range2).equals(range1)).toBe(true);
  });

  it("should return a range with the same start and end when the ranges are adjacent", () => {
    const range1 = range(0, 10);
    const range2 = range(11, 20);
    expect(range1.union(range2).equals(range(0, 20))).toBe(true);
  });

  it("should raise an error when the ranges have different step sizes", () => {
    const range1 = range(0, 10);
    const range2 = range(0, 10, 2);
    expect(() => range1.union(range2)).toThrow("Cannot union ranges with different step sizes.");
  });
});