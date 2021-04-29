"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var chalk_1 = __importDefault(require("chalk"));
var dateformat_1 = __importDefault(require("dateformat"));
var util_1 = __importDefault(require("util"));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "prefix", {
        get: function () {
            return chalk_1.default.gray(dateformat_1.default(Date.now(), 'ddd HH:MM:ss:l'));
        },
        enumerable: false,
        configurable: true
    });
    Logger.formatInput = function (args) {
        return args.map(function (arg) { return arg instanceof Object ? util_1.default.inspect(arg) : arg; });
    };
    Logger.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args = this.formatInput(args);
        console.log(this.prefix + ' ' + chalk_1.default.green('[INFO]') + ' ' + args.join(' '));
    };
    Logger.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args = this.formatInput(args);
        console.log(this.prefix + ' ' + chalk_1.default.red('[ERROR]') + ' ' + args.join(' '));
    };
    Logger.route = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args = this.formatInput(args);
        console.log(this.prefix + ' ' + chalk_1.default.blue('[ROUTE]') + ' ' + args.join(' '));
    };
    Logger.API = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args = this.formatInput(args);
        console.log(this.prefix + ' ' + chalk_1.default.cyan('[API]') + ' ' + args.join(' '));
    };
    return Logger;
}());
exports.Logger = Logger;
