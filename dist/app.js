"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const todos_1 = __importDefault(require("./routes/todos"));
const todosnew_1 = __importDefault(require("./routes/todosnew"));
const body_parser_1 = require("body-parser");
const http_errors_1 = __importDefault(require("http-errors"));
const app = (0, express_1.default)();
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/todos", todos_1.default);
app.use('/todosnew', todosnew_1.default);
app.get('/', (req, res, next) => {
    res.send("Hello typescript");
});
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
};
app.use(errorHandler);
mongoose_1.default.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_KEY}@cluster0.cvtbcrw.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log("Database connected");
});
const PORT = Number(process.env.PORT) || 5000;
const server = app.listen(PORT, () => {
    console.log(`Port is run ${PORT}`);
});
