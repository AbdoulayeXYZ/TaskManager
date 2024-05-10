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
exports.updateTask = exports.postTask = exports.deleteTask = exports.getTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../models/task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskList = yield task_1.default.findAll();
    res.json(taskList);
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findByPk(id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({
            msg: `No task exists with the id ${id}`
        });
    }
});
exports.getTask = getTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findByPk(id);
    if (!task) {
        res.status(404).json({
            msg: `No task exists with the id ${id}`
        });
    }
    else {
        yield task.destroy();
        res.json({
            msg: 'The task was successfully removed!'
        });
    }
});
exports.deleteTask = deleteTask;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Taskcreate(body);
        res.json({
            msg: `The task was successfully added!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps an error occurred, please contact support`
        });
    }
});
exports.postTask = postTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const task = yield task_1.default.findByPk(id);
        if (task) {
            yield task.update(body);
            res.json({
                msg: 'Task was successfully upgraded'
            });
        }
        else {
            res.status(404).json({
                msg: `There is no product with the id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ooops an error occurred, please contact support`
        });
    }
});
exports.updateTask = updateTask;
function Taskcreate(body) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=task.js.map