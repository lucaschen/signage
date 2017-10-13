const cast = _isSigned =>
  function(num) {
    const isSigned = typeof _isSigned === "undefined" ? true : _isSigned;

    if (!isSigned) {
      // -65537
      // becomes 65537
      // becomes 1 (after modulusing by 65536)
      return Math.abs(num) % this.castValue;
    }

    const withinRange = num => num >= this.minValue && num <= this.maxValue;

    if (withinRange(num)) {
      // number is within range; directly return
      return num;
    }

    if (num < this.minValue) {
      // short: if less than -32768
      const _mod = num % this.castValue;
      // if within range, we return this cast value
      // otherwise, we need to cast to a positive num
      return withinRange(_mod) ? _mod : _mod + this.castValue;
    } else if (num > this.maxValue) {
      // short: if greater than 32767
      const _mod = num % this.castValue;
      // if within range, we return this cast value
      // otherwise, we need to cast to a positive num
      return withinRange(_mod) ? _mod : _mod - this.castValue;
    }
  };

const castSigned = cast(true);
const castUnsigned = cast(false);

module.exports = {
  castSigned,
  castUnsigned
};
