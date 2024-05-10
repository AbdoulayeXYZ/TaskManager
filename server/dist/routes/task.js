"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controllers/task");
const router = (0, express_1.Router)();
router.get('/', task_1.getTasks);
router.get('/:id', task_1.getTask);
router.delete('/:id', task_1.deleteTask);
router.post('/', task_1.postTask);
router.put('/:id', task_1.updateTask);
exports.default = router;
//# sourceMappingURL=task.js.map