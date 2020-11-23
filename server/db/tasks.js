const connection = require('./connection')

function getTasks(db = connection) {
    return db('tasks').select('*')
}

function addTask(task, db = connection) {
    return db('tasks').insert(task)
}

function updateTask(task, id, db = connection) {
    return db('tasks').update(task).where('id', id)
}

function deleteTask(id, db = connection) {
    return db('tasks').delete().where('id', id)
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}
