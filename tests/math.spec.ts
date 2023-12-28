import { range } from "../lib";

describe("Range Math Tests", () => {
  it("should correct double the start, end, and step when multiplying by 2 using multiply()", () => {
    const range1 = range(0, 10);
    expect(range1.multiply(2).equals(range(0, 20, 2))).toBe(true);
  });

  it("should correctly double the start, end, and step when multiplying by 2 using transform()", () => {
    const range1 = range(0, 10);
    expect(
      range1
        .transform(
          (value) => value * 2,
          (step) => step * 2
        )
        .equals(range(0, 20, 2))
    ).toBe(true);
  });

  it("should correctly halve the start, end, and step when dividing by 2 using divide()", () => {
    const range1 = range(0, 10);
    expect(range1.divide(2).equals(range(0, 5, 0.5))).toBe(true);
  });

  it("should correctly halve the start, end, and step when dividing by 2 using transform()", () => {
    const range1 = range(0, 10);
    expect(
      range1
        .transform(
          (value) => value / 2,
          (step) => step / 2
        )
        .equals(range(0, 5, 0.5))
    ).toBe(true);
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

  it("should correctly clamp values using clamp() when the step size is 1", () => {
    const range1 = range(0, 10);
    expect(range1.clamp(5)).toBe(5);
    expect(range1.clamp(11)).toBe(10);
    expect(range1.clamp(-1)).toBe(0);

    const range2 = range(15, 32);
    expect(range2.clamp(13)).toBe(15);
    expect(range2.clamp(33)).toBe(32);
    expect(range2.clamp(16)).toBe(16);
  });

  it("should correctly clamp values using clamp() when the step size is 2", () => {
    const range1 = range(0, 10, 2);
    expect(range1.clamp(5)).toBe(6);
    expect(range1.clamp(11)).toBe(10);
    expect(range1.clamp(-1)).toBe(0);

    const range2 = range(15, 32, 2);
    expect(range2.clamp(13)).toBe(15);
    expect(range2.clamp(33)).toBe(31);
    expect(range2.clamp(16)).toBe(17);
  });

  it("should correctly clamp values using clamp() when the step size is 3", () => {
    const range1 = range(0, 10, 3);
    expect(range1.clamp(5)).toBe(6);
    expect(range1.clamp(11)).toBe(9);
    expect(range1.clamp(-1)).toBe(0);

    const range2 = range(15, 32, 3);
    expect(range2.clamp(13)).toBe(15);
    expect(range2.clamp(33)).toBe(30);
    expect(range2.clamp(16)).toBe(18);
  });

  it("should correctly clamp values using clamp() when the step size is 5", () => {
    const range1 = range(0, 10, 5);
    expect(range1.clamp(5)).toBe(5);
    expect(range1.clamp(11)).toBe(10);
    expect(range1.clamp(-1)).toBe(0);

    const range2 = range(15, 32, 5);
    expect(range2.clamp(13)).toBe(15);
    expect(range2.clamp(33)).toBe(30);
    expect(range2.clamp(16)).toBe(20);
  });

  it("should correctly clamp values using clamp() when the step size is 7", () => {
    const range1 = range(0, 10, 7);
    expect(range1.clamp(5)).toBe(7);
    expect(range1.clamp(11)).toBe(7);
    expect(range1.clamp(-1)).toBe(0);

    const range2 = range(15, 32, 7);
    expect(range2.clamp(13)).toBe(15);
    expect(range2.clamp(33)).toBe(29);
    expect(range2.clamp(16)).toBe(22);
  });

  it("should correctly wrap values using wrap() when the step size is 1", () => {
    const range1 = range(0, 10);
    expect(range1.wrap(5)).toBe(5);
    expect(range1.wrap(11)).toBe(0);
    expect(range1.wrap(-1)).toBe(10);

    const range2 = range(15, 32);
    expect(range2.wrap(14)).toBe(32);
    expect(range2.wrap(33)).toBe(15);
    expect(range2.wrap(16)).toBe(16);
  });

  it("should correctly wrap values using wrap() when the step size is 2", () => {
    const range1 = range(0, 10, 2);
    expect(range1.wrap(5)).toBe(6);
    expect(range1.wrap(11)).toBe(0);
    expect(range1.wrap(-1)).toBe(10);

    const range2 = range(15, 32, 2);
    expect(range2.wrap(14)).toBe(31);
    expect(range2.wrap(33)).toBe(15);
  });

  it("should correctly wrap values using wrap() when the step size is 3", () => {
    const range1 = range(0, 10, 3);
    expect(range1.wrap(5)).toBe(6);
    expect(range1.wrap(11)).toBe(0);
    expect(range1.wrap(-1)).toBe(9);

    const range2 = range(15, 32, 3);
    expect(range2.wrap(14)).toBe(30);
    expect(range2.wrap(33)).toBe(15);
    expect(range2.wrap(16)).toBe(18);
  });

  it("should correctly wrap values using wrap() when the step size is 5", () => {
    const range1 = range(0, 10, 5);
    expect(range1.wrap(5)).toBe(5);
    expect(range1.wrap(11)).toBe(0);
    expect(range1.wrap(-1)).toBe(10);

    const range2 = range(15, 32, 5);
    expect(range2.wrap(14)).toBe(30);
    expect(range2.wrap(33)).toBe(15);
    expect(range2.wrap(16)).toBe(20);
  });

  it("should correctly wrap values using wrap() when the step size is 7", () => {
    const range1 = range(0, 10, 7);
    expect(range1.wrap(5)).toBe(7);
    expect(range1.wrap(11)).toBe(0);
    expect(range1.wrap(-1)).toBe(7);

    const range2 = range(15, 32, 7);
    expect(range2.wrap(14)).toBe(29);
    expect(range2.wrap(33)).toBe(15);
    expect(range2.wrap(16)).toBe(22);
  });
});
