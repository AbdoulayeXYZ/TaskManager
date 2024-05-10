import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Task = db.define('Task', {

    description: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Task;