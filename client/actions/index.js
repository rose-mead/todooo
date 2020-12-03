export const SET_TASKS = 'SET_TASKS'
import { getTasks, addTask, updateTask, deleteTask } from '../apis'

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        tasks: tasks
    }
}

export function createTask(task) {
    return (dispatch) => {
        return addTask(task)
            .then(() => {
                dispatch(fetchTasks())
                return null
            })
    }
}

export function fetchTasks() {
    return (dispatch) => {
        return getTasks()
            .then(tasks => {
                dispatch(setTasks(tasks))
            })
            .catch(err => {
                console.log('error in getTasks action');
            })
    }
}

export function modifyTask(id, task) {
    return (dispatch) => {
        return updateTask(id, task)
            .then(() => {
                dispatch(fetchTasks())
                return null
            })
    }
}

export function removeTask(id) {
    return (dispatch) => {
        return deleteTask(id)
            .then(() => {
                console.log('jhmvn');
                dispatch(fetchTasks())
                return null
            })
    }
}




