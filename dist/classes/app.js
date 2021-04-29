"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs = require('fs').promises;
var cors_1 = __importDefault(require("cors"));
var Logger_1 = __importDefault(require("../util/Logger"));
var dogesvg = "<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='512' height='512'><path d='M217.5 396.1c-2.7-.5-8.1-2.1-12-3.6-23.1-8.9-36.4-12.3-66-16.8-10.5-1.6-21.9-5.5-32-11-5.5-2.9-6-3.5-6.3-6.8-.4-4.7.4-4.9 17.4-5.6 15.5-.7 23.9.6 33.9 4.9 3.9 1.6 13.5 5.7 21.5 8.9 8 3.3 19 8.3 24.4 11 14.8 7.5 13.3 7.5 54.9-1.5 9.2-2.1 14.5-2.6 24.8-2.6h13l-.3 4.2-.3 4.1-14 4.9c-20.4 7.2-31.3 9.8-43.5 10.3-5.8.2-12.7 0-15.5-.4zM128.8 329c-12-2-25.6-12-30.2-22-3-6.6-5-21.1-4.5-33.3.3-7.2.8-8.9 3.1-12.3 5.2-7.5 20.7-14.9 35-16.6 17.1-2.1 32.3 1.5 49.5 11.8 12.9 7.7 15.3 11 15.3 21.2 0 5.8-1.7 9.4-10 21.6-16.6 24.5-34.5 33.6-58.2 29.6zm175.7-97.7c-4.4-.8-9.1-2.1-10.3-2.9-7.3-4.8-6.8-22.8.9-35.5 4.1-6.6 13-14.3 20.9-18.2 6.5-3.2 6.6-3.2 22-3.2 14.7 0 15.8.1 21.2 2.7 6.7 3.1 13.5 9.1 19.5 17.2 4.7 6.4 5.4 10.4 3.2 19.2-1.1 4.2-1.3 4.4-5 4.4-2.1 0-4.1-.5-4.4-1-.3-.6-3.6 2.1-7.3 5.9-8.7 8.9-13.1 10.4-29.7 9.9-10.4-.3-11.5-.1-11.5 1.5 0 1.4-.9 1.7-5.7 1.6-3.2-.1-9.4-.8-13.8-1.6zm17.6-10.5c.1-10.6 1.9-25 3.7-30 1.1-3.2 1.7-5.8 1.3-5.8-2.1 0-10.5 6.7-13.5 10.8-5.4 7.4-6 9.3-4.3 13.3 1.6 3.9 10.3 14.9 11.8 14.9.5 0 .9-1.5 1-3.2zm-178.6-25.2c-.5-.3-2.6-.7-4.6-1-2-.4-4.9-1.8-6.3-3.3-2.4-2.4-2.6-3.2-2.6-11.7.1-20.8 5.3-32.1 18-38.7 3.8-2 6-2.4 14.5-2.4 8.3 0 10.7.4 14 2.2 5.1 2.7 9 6.8 10.9 11.5 1.8 4.2 2.1 16.4.6 21.8-2.5 9-10.9 17.4-20 20-3.6 1.1-22.7 2.3-24.5 1.6zm.3-25.3-.4-2.8-.8 2.8c-.5 1.5-.5 3.9 0 5.5l.8 2.7.4-2.7c.2-1.6.2-4 0-5.5z'/><g fill='#efe7dc'><path d='M136.3 472c-51-6.8-90.8-46.9-96.4-97-.6-5.3-.9-54.6-.7-125.6l.4-116.9 3-10.5c5.8-19.6 14.2-34.6 26.8-47.9 14.7-15.4 31.7-25.4 52-30.7C138.1 39 141 38.9 261 39.2l114.5.3 11.5 2.9c11.5 2.9 25.1 8.2 30.2 11.7 1.4 1.1 2.9 1.9 3.3 1.9.3 0 3.8 2.4 7.8 5.3 24.3 18.1 40.7 47 43.8 77.2.6 6.4.9 52.1.7 125.5l-.4 115.5-3.2 11.1c-5.9 20.6-13.9 34.4-28.3 49.1-14.4 14.6-30.7 23.9-51.9 29.6l-11.5 3.2-117.5.1c-64.6.1-120.3-.2-123.7-.6zm114.2-81.5c12.4-3.2 36.8-11.9 37.3-13.3.7-2.3-18.6-1.5-31.5 1.4-32.6 7.1-35.7 7.6-43.3 7.1-6.6-.3-8.7-1-17.5-5.5-5.5-2.8-16.5-7.8-24.5-11.1-8-3.2-17.6-7.3-21.5-8.9-9.6-4.2-18.7-5.6-30.9-4.9-11 .7-14.9 1.4-14 2.8.9 1.6 15.4 8.5 23.4 11.2 4.1 1.4 12.7 3.3 19 4.1 23.8 3.3 38.2 7.1 61.5 16.1 3.9 1.5 9.3 3.1 12 3.5 7.2 1.2 19.6.2 30-2.5zm-97.7-66.6c12-4.1 21.6-12.9 33-30.2 7.8-11.8 8.8-14.7 7.3-20.4-1.3-4.8-4.3-7.7-14.4-13.7-25.7-15.4-47.7-16.1-70.5-2.3-10.3 6.2-12.5 12.7-10.3 31.4 1.5 12.3 4.5 19.2 11.3 25.6 5.7 5.3 15.7 10.5 22.6 11.7 6.1 1 14.4.2 21-2.1zM315.1 224c-11.2-11.3-12.7-18.8-6.1-28.8 5.7-8.5 13.9-14.2 20.5-14.2 3.6 0 3.9 1.8 1.2 8.1-3.4 7.7-4.6 14-4.9 25.2-.4 12.7-.1 13 13.3 12.5 13.1-.5 16.9-2.5 27.4-14.7l8-9.3.5 4.3c.7 6.2 2.6 6 4.1-.6l1.2-5.5-3.7-5.4c-5.3-7.7-13.7-15.3-20.3-18.4-5.3-2.5-6.8-2.7-18.3-2.7-12.2 0-12.7.1-19.4 3.4-8.1 3.9-19 14.3-22.4 21.3-3.7 7.7-4.9 15.1-3.2 20 2 5.6 5 7.5 14.5 9.2 14.4 2.5 14.4 2.5 7.6-4.4zM165 191c18.8-5.1 27.5-29.4 15.2-42.3-4.7-5-9.9-7.1-17.7-7.1-7.9 0-13.5 2.3-19.3 7.8-6.3 5.9-10.1 17.3-10.2 30.2 0 5.3.4 6.5 2.6 8.7 1.4 1.5 4.3 2.9 6.3 3.3 2 .3 4.1.7 4.6 1 1.5.6 14.5-.5 18.5-1.6z'/><path d='M147 187.2c-7.3-3.6-10.4-14.5-6.4-22.5 2.3-4.5 8.2-10.5 12.6-12.8 5.2-2.7 5.4-2.4 1.2 1.3-7.4 6.5-9.2 15.9-5.3 28.3 1.1 3.7 1.9 6.9 1.7 7.1-.2.2-1.9-.4-3.8-1.4z'/></g></svg>";
var premidsvg = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1025.000000pt" height="1024.000000pt" viewBox="0 0 1025.000000 1024.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> </g> </svg>';
var package_json_1 = __importDefault(require("../../package.json"));
require('dotenv').config();
var app = new Client();
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.server = require('http').createServer(this.app);
        this.app.use(cors_1.default({
            origin: "*"
        }));
        this.app.use(express_1.default.json());
        this.app.use(logger(':remote-addr >> :method :url :status :res[content-length] - :response-time ms'));
    }
    /**
     *
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {function()} next
     */
    /**
    *
    * @param {string} template
    * @param {express.Request} req
    * @param {express.Response} res
    * @param {{...}} data
    */
    App.prototype.registerRoutes = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            function deprecated(call) {
                Logger_1.default.error(call + ' is deprecated. Please update.');
            }
            var filePath, files, files_1, files_1_1, file, router, instance, e_1_1, server2, io;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filePath = path_1.default.join(__dirname, '..', 'routes');
                        return [4 /*yield*/, fs.readdir(filePath)];
                    case 1:
                        files = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 13]);
                        files_1 = __asyncValues(files);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, files_1.next()];
                    case 4:
                        if (!(files_1_1 = _b.sent(), !files_1_1.done)) return [3 /*break*/, 6];
                        file = files_1_1.value;
                        if (file.endsWith('.js')) {
                            router = require(path_1.default.join(filePath, file));
                            if (router.prototype instanceof Router) {
                                instance = new router(this);
                                Logger_1.default.route("Route File " + instance.path + " running.");
                                if (instance.auth) {
                                    this.app.use(instance.path, this.Authentication, instance.createRoute());
                                }
                                else {
                                    this.app.use(instance.path, instance.createRoute());
                                }
                            }
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(files_1_1 && !files_1_1.done && (_a = files_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(files_1)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        app.connect(process.env.DOGEHOUSE_TOKEN, process.env.DOGEHOUSE_REFRESH_TOKEN).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                Logger_1.default.info('Socket connected to DogeHouse.');
                                return [2 /*return*/];
                            });
                        }); });
                        server2 = require('http').createServer();
                        io = require('socket.io')(server2, { transports: ['websocket'], serveClient: false, path: '/socket' });
                        server2.listen(7080);
                        io.on('connection', function (socket) {
                            Logger_1.default.info('Socket Client Connected', io.sockets.sockets.size);
                            socket.on('disconnect', function (data) {
                                Calls.deleteBot(socket.id);
                                Logger_1.default.info('Socket Client Disconnected', io.sockets.sockets.size);
                            });
                            socket.on('init', function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        Logger_1.default.info('Socket Client Init', io.sockets.sockets.size);
                                        return [2 /*return*/];
                                    });
                                });
                            });
                            socket.on('transmit', function (received) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var new_data;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!received.bot)
                                                    return [2 /*return*/];
                                                if (!received.bot.uuid)
                                                    return [2 /*return*/];
                                                if (!received.bot.username)
                                                    return [2 /*return*/];
                                                new_data = {
                                                    socket_id: socket.id,
                                                    bot: { uuid: received.bot.uuid, username: received.bot.username || 'A Default Doge', avatar: received.bot.avatarURL || 'https://cdn.discordapp.com/attachments/824724836936187974/824936185734234132/orangeDiscordIcon.png' },
                                                    room: { uuid: received.room.uuid, name: received.room.name || 'No Room', listening: received.room.listening || 0, users: received.room.users || [] }
                                                };
                                                return [4 /*yield*/, Calls.transmitBot(received.bot.uuid, new_data)];
                                            case 1:
                                                _a.sent();
                                                Logger_1.default.info('Socket Client Transmit', socket.id, received.bot.uuid, received.bot.username);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            socket.on('error', function (err) {
                                Logger_1.default.error('Socket Error', socket.id, err);
                            });
                        });
                        this.app.get('/v1', function (req, res) {
                            return res.json({
                                name: package_json_1.default.name,
                                support: package_json_1.default.support,
                                version: package_json_1.default.version
                            });
                        });
                        this.app.get('/', function (req, res) {
                            return res.json({ name: package_json_1.default.name, description: package_json_1.default.description, version: package_json_1.default.version });
                        });
                        this.app.use(function (req, res) {
                            return res.sendStatus(404);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.listen = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Calls.formatBots()]; // Format bots on start.
                    case 1:
                        _a.sent(); // Format bots on start.
                        if (!process.env.PORT)
                            return [2 /*return*/, Logger_1.default.error('Please add PORT= to your .env')];
                        this.server.listen(process.env.PORT, fn);
                        return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
module.exports = App;
