const signage = require("../src");

test("short boundary values are correct", () => {
  expect(signage.short.castValue).toBe(65536);
  expect(signage.short.maxValue).toBe(32767);
  expect(signage.short.minValue).toBe(-32768);
});

test("short signed casting is correct", () => {
  const { cast } = signage.short;

  expect(cast(1)).toBe(1);
  expect(cast(-32767)).toBe(-32767);
  expect(cast(-32768)).toBe(-32768);
  expect(cast(32767)).toBe(32767);
  expect(cast(32768)).toBe(-32768); // wraps
  expect(cast(32769)).toBe(-32767); // wraps
});

test("short unsigned casting is correct", () => {
  const { cast } = signage.short.unsigned;

  expect(cast(1)).toBe(1);
  expect(cast(-1)).toBe(1);
  expect(cast(-32768)).toBe(32768);
  expect(cast(65535)).toBe(65535);
  expect(cast(65536)).toBe(0); // wraps
  expect(cast(65537)).toBe(1); // wraps
});
