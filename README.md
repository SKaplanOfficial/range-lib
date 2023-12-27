# range-lib

A Node library for creating number range objects and performing operations on them.

## Installation

```bash
npm install range-lib
```

## Usage

### Basic Usage

```typescript
import { range } from 'range-lib';

const r1 = range(1, 10);    // default step of 1
const r2 = range(1, 10, 2); // step of 2

console.log(r1.toArray()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(r2.toArray()); // [1, 3, 5, 7, 9]

console.log(r1.toString()); // [1, 10, 1] (start, end, step)
console.log(r2.toString()); // [1, 10, 2]
```

### Unions and Intersections

The union of two ranges is the smallest range fully containing both ranges, while the intersection is the largest range fully contained by both ranges. For example, the union of the ranges _[1, 10]_ and _[5, 15]_ is _[1, 15]_, while the intersection is _[5, 10]_. The union and intersection of two ranges can be computed using the `union` and `intersection` methods, respectively. If the ranges do not overlap, the union will be a range containing both ranges, while the intersection will be an empty range.

> Note: Ranges must share the same step size to be unionable.

```typescript
import { range } from 'range-lib';

const r1 = range(1, 10);
const r2 = range(5, 15);

console.log(r1.union(r2).toArray()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(r1.intersection(r2).toArray()); // [5, 6, 7, 8, 9, 10]
```

### Transformations

You can transform ranges using the `transform` method, which takes as parameters a function that transforms a number and an optional function that transforms the step size. For example, to multiply each number in a range by 2, you could do the following:

```typescript
import { range } from 'range-lib';

const r = range(1, 10);
console.log(r.transform(n => n * 2, step => step * 2).toArray()); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

If you do not provide a function to transform the step size, the step size will remain unchanged. For example, to shift a range by 5, you could do the following:

```typescript
import { range } from 'range-lib';

const r = range(1, 10);
console.log(r.transform(n => n + 5).toArray()); // [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

For convenience, the library provides a number of predefined transformations as methods on range objects. For example, to multiply each number in a range by 2, you could do the following:

```typescript
import { range, transformations } from 'range-lib';

const r = range(1, 10);
console.log(r.multiply(2).toArray()); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

The following transformations are currently available:

- `add(n: number)`: Adds `n` to each number in the range. May be used to shift the range. Keeps the same step size.
- `subtract(n: number)`: Subtracts `n` from each number in the range. May be used to shift the range. Keeps the same step size.
- `multiply(n: number)`: Multiplies each number in the range by `n`. May be used to scale the range. Also multiplies the step size by `n`.
- `divide(n: number)`: Divides each number in the range by `n`. May be used to scale the range. Also divides the step size by `n`.