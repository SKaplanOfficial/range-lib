import { range } from "../lib";

describe("Range Intersection Tests", () => {
  it("should return a range with the same start and end when the ranges are the same", () => {
    const range1 = range(0, 10);
    const range2 = range(0, 10);
    expect(range1.intersection(range2)?.equals(range1)).toBe(true);
  });

  it("should return undefined when the ranges are disjoint", () => {
    const range1 = range(0, 10);
    const range2 = range(11, 20);
    expect(range1.intersection(range2)).toBe(undefined);
  });

  it("should return the correct intersection when the ranges overlap and have the same step size", () => {
    const range1 = range(0, 10);
    const range2 = range(5, 15);
    expect(range1.intersection(range2)?.equals(range(5, 10))).toBe(true);
  });

  it("should return the correct intersection when the ranges overlap and have different step sizes", () => {
    const range1 = range(0, 10);
    const range2 = range(5, 15, 2);
    expect(range1.intersection(range2)?.equals(range(5, 10, 2))).toBe(true);

    const range3 = range(0, 10, 2);
    const range4 = range(5, 15);
    expect(range3.intersection(range4)?.equals(range(5, 10, 2))).toBe(true);
  });

  it("should accurately determine whether ranges intersect when they have the same step size", () => {
    const range1 = range(0, 10);
    const range2 = range(5, 15);
    expect(range1.intersects(range2)).toBe(true);

    const range3 = range(0, 10);
    const range4 = range(11, 20);
    expect(range3.intersects(range4)).toBe(false);
  });

  it("should accurately determine whether ranges intersect when they have different step sizes", () => {
    const range5 = range(0, 10);
    const range6 = range(6, 20, 2);
    expect(range5.intersects(range6)).toBe(true);

    const range7 = range(0, 10, 3);
    const range8 = range(6, 20);
    expect(range7.intersects(range8)).toBe(true);

    const range9 = range(0, 10, 3);
    const range10 = range(7, 20, 10);
    expect(range9.intersects(range10)).toBe(false);
  });
});
