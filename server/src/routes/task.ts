import { Router } from 'express';
import { deleteTask, getTasks, getTask, postTask, updateTask } from '../controllers/task';

const router = Router();

router.get('/', getTasks);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);
router.post('/', postTask);
router.put('/:id', updateTask);

export default router;