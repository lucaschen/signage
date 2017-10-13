# Signage

Convert your generic "numbers" to signed / unsigned shorts, as done by statically typed languages such as C#.

This module really helps if (like me) you find yourself converting code from said statically typed languages to JavaScript.

For example, `signage.short()` will turn:
- `1` to `1` :)
- `32768` to `-32768`
- `32769` to `-32767`

`signage.short.unsigned()` will turn:
- `1` to `1`
- `-1` to `1`
- `65536` to `0`
- `-65536` to `0`
- `65537` to `1`
- `-65537` to `1`

## Implementation

    npm install signage

    ...

    const signage = require('signage');

    signage.short(32769); // -32767

Happy coding!
