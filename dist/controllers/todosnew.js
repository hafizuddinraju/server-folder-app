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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDoNew = exports.updateToDoNew = exports.getToDoNew = exports.createToDoNew = void 0;
const todosnew_1 = __importDefault(require("../models/todosnew"));
const createToDoNew = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log("Data", data);
        var todos = yield todosnew_1.default.create(data);
        return res
            .status(200)
            .json({ message: "TodoNew created successfully", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createToDoNew = createToDoNew;
const getToDoNew = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { id } = req.params;
        const filter = { folderId: id };
        yield todosnew_1.default.countDocuments(filter);
        var todos = yield todosnew_1.default.find(filter);
        return res.status(200).json({ message: "Single todos!", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getToDoNew = getToDoNew;
const updateToDoNew = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        var todos = yield todosnew_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return res
            .status(200)
            .json({ message: "Todo updated successfully!", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateToDoNew = updateToDoNew;
const deleteToDoNew = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        var isDeleted = yield todosnew_1.default.findByIdAndDelete(id);
        if (!isDeleted)
            throw new Error("Failed to delete todo");
        return res.status(200).json({ message: "Todo deleted successfully!" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteToDoNew = deleteToDoNew;
