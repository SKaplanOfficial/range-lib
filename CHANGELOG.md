# RangeObj Changelog

## [0.0.2] - 2023-12-28

- Added `Range.at(index)`, which returns the number at the given index in the range.
- Added `Range.indexOf(n)`, which returns the index of the given number in the range.
- Added `Range.clamp(n)`, which returns the number in the range closest to the given number.
- Added `Range.wrap(n)`, which returns the number in the range closest to the given number, wrapping around the range at the endpoints.
- Added `Range.enumerate()`, which returns an iterator over the numbers in the range.
- Added `Range.count`, which provides the number of numbers in the range. This is equivalent to `Range.toArray().length`.
- Fixed bug where the intersection of two ranges with different step sizes would not be computed correctly.

## [0.0.1] - 2023-12-27

- Initial release.
