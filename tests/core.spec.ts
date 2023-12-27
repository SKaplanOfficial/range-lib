import { range } from "../lib";

describe("Core Range Tests", () => {
  it("should correctly create a range with a start, end, and step", () => {
    const range1 = range(0, 10);
    expect(range1.start).toBe(0);
    expect(range1.end).toBe(10);
    expect(range1.step).toBe(1);
  });

  it("should correctly return a string representation of the range", () => {
    const range1 = range(0, 10);
    expect(range1.toString()).toBe("[0, 10, 1]");

    const range2 = range(1, 10, 2);
    expect(range2.toString()).toBe("[1, 10, 2]");
  });

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

  it("should correctly identify equal ranges", () => {
    const range1 = range(0, 10);
    const range2 = range(0, 10);
    expect(range1.equals(range2)).toBe(true);
  });

  it("should correctly identify unequal ranges", () => {
    const range1 = range(0, 10);
    const range2 = range(0, 11);
    expect(range1.equals(range2)).toBe(false);
  });

  it("should correctly identify equal(?) ranges with different step sizes", () => {
    const range1 = range(0, 10);
    const range2 = range(0, 10, 2);
    expect(range1.equals(range2)).toBe(false);
  });

  it("should correctly return ranges as arrays when using toArray()", () => {
    const range1 = range(0, 10);
    expect(range1.toArray()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const range2 = range(0, 10, 2);
    expect(range2.toArray()).toEqual([0, 2, 4, 6, 8, 10]);
  });
});
