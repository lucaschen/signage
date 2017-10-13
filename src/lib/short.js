const { castSigned, castUnsigned } = require("../_helpers/cast");

const numBits = 16;

const short = (function() {
  const _short = {};
  _short.castValue = Math.pow(2, numBits);
  _short.maxValue = Math.pow(2, numBits - 1) - 1;
  _short.minValue = 0 - Math.pow(2, numBits - 1);
  _short.unsigned = castUnsigned.bind(_short);

  const obj = num => castSigned.call(_short, num);

  return Object.assign(obj, _short);
})();

module.exports = short;
