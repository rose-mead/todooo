const express = require('express')
const router = express.Router()

const db = require('../db/tasks')


router.get('/', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('cannot get tasks')
        })
})

router.post('/', (req, res) => {
    const task = {
        name: req.body.id,
        priority: req.body.priority
    }

    db.addTask(task)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('cannot add task')
        })
})

router.patch('/:id', (req, res) => {
    const task = req.body

    db.updateTask(task, req.params.id)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('cannot update task')
        })
})

router.delete('/:id', (req, res) => {
    db.deleteTask(req.params.id)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err) 
            res.status(500).send('cannot delete task')
        })
})

module.exports = router