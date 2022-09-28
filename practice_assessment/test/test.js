const average = require("/home/rexqu/aA_classwork/practice_assessment/1_average.js");
const tripler = require("/home/rexqu/aA_classwork/practice_assessment/2_tripler.js");
const oddrange = require("/home/rexqu/aA_classwork/practice_assessment/3_odd_range.js");

describe("practice Assesment 1", () => {
  test("average", () => {
    expect(average(10, 20)).toEqual(15);
    expect(average(5, 7)).toEqual(6);
    expect(average(24, 32)).toEqual(28);
  });
  test("tripler", () => {
    expect(tripler([1, 2, 3])).toEqual([3, 6, 9]);
    expect(tripler([4, 1, 7])).toEqual([12, 3, 21]);
  });
  test("oddrange", () => {
    expect(oddrange(13)).toEqual([1, 3, 5, 7, 9, 11, 13]);
    expect(oddrange(6)).toEqual([1, 3, 5]);
  });
});
