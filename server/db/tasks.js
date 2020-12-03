const connection = require('./connection')

function getTasks(db = connection) {
    return db('tasks').select('*').orderBy('id', 'desc')
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

function deleteCompleted(db = connection) {
    return db('tasks').delete().where('status', 1)
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    deleteCompleted
}
