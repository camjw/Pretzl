"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FgWhite = exports.FgCyan = exports.FgMagenta = exports.FgBlue = exports.FgYellow = exports.FgGreen = exports.FgRed = exports.Reset = void 0;
const Reset = '\x1b[0m';
exports.Reset = Reset;
const Bright = '\x1b[1m';
const Dim = '\x1b[2m';
const Underscore = '\x1b[4m';
const Blink = '\x1b[5m';
const Reverse = '\x1b[7m';
const Hidden = '\x1b[8m';
const FgBlack = '\x1b[30m';
const FgRed = '\x1b[31m';
exports.FgRed = FgRed;
const FgGreen = '\x1b[32m';
exports.FgGreen = FgGreen;
const FgYellow = '\x1b[33m';
exports.FgYellow = FgYellow;
const FgBlue = '\x1b[34m';
exports.FgBlue = FgBlue;
const FgMagenta = '\x1b[35m';
exports.FgMagenta = FgMagenta;
const FgCyan = '\x1b[36m';
exports.FgCyan = FgCyan;
const FgWhite = '\x1b[37m';
exports.FgWhite = FgWhite;
const BgBlack = '\x1b[40m';
const BgRed = '\x1b[41m';
const BgGreen = '\x1b[42m';
const BgYellow = '\x1b[43m';
const BgBlue = '\x1b[44m';
const BgMagenta = '\x1b[45m';
const BgCyan = '\x1b[46m';
const BgWhite = '\x1b[47m'; // export * from './colour';