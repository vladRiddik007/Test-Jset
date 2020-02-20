const Lodash = require("./sync");
let _ = new Lodash();

describe("Lodash: compact", () => {
  let array;

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hello"];
  });

  // afterAll(() => {
  //   _ = new Lodash();
  // });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).toEqual(result);
  });

  test("should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
  });
});

describe("Lodash: groupBy", () => {
  // test('should be defined', () => {
  //   expect(_.groupBy).toBeDefined()
  //   expect(_.groupBy).not.toBeUndefined()
  // })

  test("should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      3: [3.1],
      4: [4.2]
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      3: ["one", "two"],
      5: ["three"]
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("should NOT return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});

// describe("Lodash: sortBy", () => {
//   const array = [
//     { name: "b", age: 2 },
//     { name: "a", age: 1 },
//     { name: "c", age: 3 }
//   ];

//   test("should sort arr by age", () => {
//     const result = [
//       { name: "c", age: 1 },
//       { name: "b", age: 2 },
//       { name: "a", age: 3 }
//     ];
//     console.log( function sortBy(arr, key) {
//       return arr.sort((a,b) => a[key] - b[key])
//     });
//     expect(_.sortBy(array, "age")).toEqual(result);
//   });

//   test("should sort arr by name", () => {
//     const result = [
//       { name: "c", age: 1 },
//       { name: "b", age: 2 },
//       { name: "a", age: 3 }
//     ];
//     console.log(_.sortBy(array, "name"));
//     expect(_.sortBy(array, "name")).toEqual(result);
//   });
// });
