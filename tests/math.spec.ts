import { range } from "../lib";

describe("Range Math Tests", () => {
  it("should correct double the start, end, and step when multiplying by 2 using multiply()", () => {
    const range1 = range(0, 10);
    expect(range1.multiply(2).equals(range(0, 20, 2))).toBe(true);
  });

  it("should correctly double the start, end, and step when multiplying by 2 using transform()", () => {
    const range1 = range(0, 10);
    expect(range1.transform((value) => value * 2, (step) => step * 2).equals(range(0, 20, 2))).toBe(true);
  });

  it("should correctly halve the start, end, and step when dividing by 2 using divide()", () => {
    const range1 = range(0, 10);
    expect(range1.divide(2).equals(range(0, 5, 0.5))).toBe(true);
  });

  it("should correctly halve the start, end, and step when dividing by 2 using transform()", () => {
    const range1 = range(0, 10);
    expect(range1.transform((value) => value / 2, (step) => step / 2).equals(range(0, 5, 0.5))).toBe(true);
  });

  it("should correctly add 5 to the start, end, and step when adding 5 using add()", () => {
    const range1 = range(0, 10);
    expect(range1.add(5).equals(range(5, 15, 1))).toBe(true);
  });

  it("should correctly add 5 to the start, end, and step when adding 5 using transform()", () => {
    const range1 = range(0, 10);
    expect(range1.transform((value) => value + 5).equals(range(5, 15, 1))).toBe(true);
  });

  it("should correctly subtract 5 from the start, end, and step when subtracting 5 using subtract()", () => {
    const range1 = range(0, 10);
    expect(range1.subtract(5).equals(range(-5, 5, 1))).toBe(true);
  });

  it("should correctly subtract 5 from the start, end, and step when subtracting 5 using transform()", () => {
    const range1 = range(0, 10);
    expect(range1.transform((value) => value - 5).equals(range(-5, 5, 1))).toBe(true);
  });

  it("should correctly calculate the range sum using sum()", () => {
    const range1 = range(0, 10);
    expect(range1.sum()).toBe(55);

    const range2 = range(0, 10, 2);
    expect(range2.sum()).toBe(30);
  });

  it("should correctly calculate the range average using average()", () => {
    const range1 = range(0, 10);
    expect(range1.average()).toBe(5);

    const range2 = range(0, 10, 2);
    expect(range2.average()).toBe(5);
  });

  it("should correctly map values using map()", () => {
    const range1 = range(5, 10);
    const range2 = range(0, 100);
    expect(range1.mapValue(6, range2)).toBe(20);
  });
});