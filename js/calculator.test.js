import { add, subtract, multiply, divide } from "./calculator";


test('add two positive numbers ', () => {
    expect(add(1,2)).toBe(3)
})

test('Add a positive and negative number', () => {
    expect(add(1, -2)).toBe(-1)
})

test('Add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4)
})

test('Subtract two positive numbers', () => {
    expect(subtract(4, 2)).toBe(2)
})

test('Subtract two negative numbers', () => {
    expect(subtract(-4, -2)).toBe(-2)
})

test('Subtract  positive numbers and negative number', () => {
    expect(subtract(4, -2)).toBe(6)
})

test('multiply two numbers', () => {
    expect(multiply(5,6)).toBe(30)
})

test('Divide a number with a zero', () => {
    expect(() => divide(4, 0)).toThrow("Cannot divide by zero chose another number")
})

test('Divide two numbers', () => {
    expect(divide(4,2)).toBe(2)
})





