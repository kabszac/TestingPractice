import analyzeArray from "./analyzearray";

test("What an object returns", () => {
    expect(analyzeArray([1,2,3,4])).toEqual({'average':2.5, 'length':4, 'min':1, 'max':4})
} )