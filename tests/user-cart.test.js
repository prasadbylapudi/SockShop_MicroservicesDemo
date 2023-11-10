
function add(a, b) {
  return a + b;
}
// Test case 1: Adding two positive numbers
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

// Test case 2: Adding a positive and a negative number
test('adds 2 + (-3) to equal -1', () => {
  expect(add(2, -3)).toBe(-1);
});

// Test case 3: Adding two negative numbers
test('adds (-2) + (-3) to equal -5', () => {
  expect(add(-2, -3)).toBe(-5);
});

// Test case 4: Adding zero to a number
test('adds 0 + 7 to equal 7', () => {
  expect(add(0, 7)).toBe(7);
});

// Test case 5: Adding two zeros
test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

// Test case 6: Adding a positive number and zero
test('adds 4 + 0 to equal 4', () => {
  expect(add(4, 0)).toBe(4);
});
