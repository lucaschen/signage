const signage = require("../src");

test("short boundary values are correct", () => {
  expect(signage.short.castValue).toBe(65536);
  expect(signage.short.maxValue).toBe(32767);
  expect(signage.short.minValue).toBe(-32768);
});

test("short signed casting is correct", () => {
  const { short } = signage;

  console.log(short(1));

  expect(short(1)).toBe(1);
  expect(short(-32767)).toBe(-32767);
  expect(short(-32768)).toBe(-32768);
  expect(short(32767)).toBe(32767);
  expect(short(32768)).toBe(-32768); // wraps
  expect(short(32769)).toBe(-32767); // wraps
});

test("short unsigned casting is correct", () => {
  const { unsigned } = signage.short;

  expect(unsigned(1)).toBe(1);
  expect(unsigned(-1)).toBe(1);
  expect(unsigned(-32768)).toBe(32768);
  expect(unsigned(65535)).toBe(65535);
  expect(unsigned(65536)).toBe(0); // wraps
  expect(unsigned(65537)).toBe(1); // wraps
});
