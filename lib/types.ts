/**
 * A type for anything that can be converted to a JSON representation.
 */
export type JSONEncodable = {
  toJSON: () => { [key: string]: string | number | boolean | null | undefined | JSONEncodable | JSONEncodable[] };
};

/**
 * A range of numbers represented by an object with a start, end, and step, as well as methods for performing operations on the range.
 */
export type Range = JSONEncodable & {
  /**
   * The unique ID of the range.
   */
  id: string;

  /**
   * An identifier for the object type.
   */
  itemType: "range";

  /**
   * The start value of the range.
   */
  start: number;

  /**
   * The end value of the range.
   */
  end: number;

  /**
   * The step between values in the range. Defaults to 1.
   */
  step: number;

  /**
   * Gets the value at the specified index in the range.
   * @param index The index of the value to get.
   * @returns The value at the specified index.
   */
  at: (index: number) => number;

  /**
   * Gets the index of a value in the range.
   * @param value The value to get the index of.
   * @returns The index of the value or `-1` if the value is not in the range.
   */
  indexOf: (value: number) => number;

  /**
   * The number of values in the range.
   */
  count: number;

  /**
   * The difference between the start and end values.
   */
  length: number;

  /**
   * Gets the average of the values in the range.
   */
  average: () => number;

  /**
   * Gets the sum of all values in the range.
   */
  sum: () => number;

  /**
   * Maps a value from the range to a value in another range.
   * @param n The value to map.
   * @param to The range to map to.
   * @returns The mapped value.
   *
   * @example
   * ```typescript
   * const range1 = range(5, 10);
   * const range2 = range(0, 100);
   * expect(range1.mapValue(6, range2)).toBe(20);
   */
  mapValue: (n: number, to: Range) => number;

  /**
   * Gets the intersection of the range with another range.
   * @param range The range to intersect with.
   * @returns The intersection of the ranges or `undefined` if the ranges do not intersect.
   */
  intersection: (range: Range) => Range | undefined;

  /**
   * Checks whether the range intersects with another range.
   * @param range The range to check for intersection with.
   * @returns `true` if the ranges intersect and `false` otherwise.
   */
  intersects: (range: Range) => boolean;

  /**
   * Gets the union of the range with another range. The union is the smallest range that contains both ranges. The step size of the ranges must be the same.
   * @param range The range to union with.
   * @returns The union of the ranges.
   * @throws An error if the ranges have different step sizes.
   */
  union: (range: Range) => Range;

  /**
   * Checks whether the range contains a value or another range.
   * @param value The value or range to check for containment.
   * @returns `true` if the range contains the value or range and `false` otherwise.
   */
  contains: (value: number | Range) => boolean;

  /**
   * Gets the range as a JSON-encodable object.
   * @returns The range as a JSON object.
   */
  toJSON: () => {
    start: number;
    end: number;
    step: number;
  };

  /**
   * Gets the range's values as an array.
   * @returns The range as an array.
   */
  toArray: () => number[];

  /**
   * Gets the range as a string in the format `[start, end, step]`.
   * @returns The range as a string.
   */
  toString: () => string;

  /**
   * Checks whether the range is equal to another range.
   * @param range The range to compare to.
   * @returns `true` if the ranges are equal and `false` otherwise.
   */
  equals: (range: Range) => boolean;

  /**
   * Applies a transform function to the range.
   * @param value_transformer The function to apply to the start and end values.
   * @param step_transformer The function to apply to the step. Optional. If not provided, the step will not be transformed.
   * @returns The transformed range.
   *
   * @example
   * ```typescript
   * const range1 = range(0, 10);
   * expect(range1.transform((value) => value * 2, (step) => step * 2).equals(range(0, 20, 2))).toBe(true);
   * ```
   */
  transform: (value_transformer: (value: number) => number, step_transformer?: (step: number) => number) => Range;

  /**
   * Multiplies the range by a value, returning a new range with an adjusted start, end, and step.
   * @param value The value to multiply by.
   * @returns The multiplied range.
   */
  multiply: (value: number) => Range;

  /**
   * Divides the range by a value, returning a new range with an adjusted start, end, and step.
   * @param value The value to divide by.
   * @returns The divided range.
   */
  divide: (value: number) => Range;

  /**
   * Adds a value to the start and end of the range, returning a new range with an adjusted start and end while keeping the same step.
   * @param value The value to add.
   * @returns The added range.
   */
  add: (value: number) => Range;

  /**
   * Subtracts a value from the start and end of the range, returning a new range with an adjusted start and end while keeping the same step.
   * @param value The value to subtract.
   * @returns The subtracted range.
   */
  subtract: (value: number) => Range;

  /**
   * Clamps a value to the range. If the value is less than the start of the range, the start of the range is returned. If the value is greater than the end of the range, the end of the range is returned. Otherwise, the value is returned.
   * @param value The value to clamp.
   * @returns The clamped value.
   */
  clamp: (value: number) => number;

  /**
   * Wraps a value to the range. The result is the value modulo the length of the range.
   * @param value The value to wrap.
   * @returns The wrapped value.
   */
  wrap: (value: number) => number;

  /**
   * Gets an iterator over the values in the range.
   * @returns An iterator over the values in the range.
   */
  enumerate: () => IterableIterator<number>;
};
