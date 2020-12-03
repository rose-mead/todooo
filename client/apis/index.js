import request from 'superagent'

export function getTasks() {
    return request.get('/tasks')
    .then(res => {
       return res.body
    })
}

export function addTask(task) {
    return request.post('/tasks')
    .send(task)
    .then(res => {
        return res.body
    })
}

export function deleteTask(id) {
    return request.delete(`/tasks/${id}`)
    .then(res => {
        console.log('adf');
        return res.body
    })
}

export function updateTask(id, task) {
    return request.patch(`/tasks/${id}`)
    .send(task)
    .then(res => {
        return res.body
    })
}

