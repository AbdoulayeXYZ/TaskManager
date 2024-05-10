import { Request, Response } from 'express';
import Task from '../models/task';

export const getTasks = async (req: Request, res: Response) => {
    const taskList = await Task.findAll()

    res.json(taskList)
}

export const getTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (task) {
        res.json(task)
    } else {
        res.status(404).json({
            msg: `No task exists with the id ${id}`
        })
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (!task) {
        res.status(404).json({
            msg: `No task exists with the id ${id}`
        })
    } else {
        await task.destroy();
        res.json({
            msg: 'The task was successfully removed!'
        })
    }

}

export const postTask = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Taskcreate(body);

        res.json({
            msg: `The task was successfully added!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps an error occurred, please contact support`
        })
    }
}

export const updateTask = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const task = await Task.findByPk(id);

    if(task) {
        await task.update(body);
        res.json({
            msg: 'Task was successfully upgraded'
        })

    } else {
        res.status(404).json({
            msg: `There is no product with the id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ooops an error occurred, please contact support`
        })
    }

    
}

function Taskcreate(body: any) {
    throw new Error('Function not implemented.');
}
