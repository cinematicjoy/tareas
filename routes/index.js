"use strict"
const express = require('express')
const router = express.Router()

const Task = require('../models/task')

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    //res.end(tasks)
    //console.log(res)
    res.render('index', {
        tasks
    })
})


//module.exports = router
router.post('/add', async (req, res) => {
    const task = new Task(req.body)
    await task.save();
    res.redirect('/');
})

router.get('/delete/:id', async(req, res)=>{
    let { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
})

router.get('/turn/:id', async(req, res)=>{
    let { id } = req.params;
    const task = await Task.findById(id)
    task.status = !task.status
    await task.save()
    res.redirect('/')
});

router.post('/edit/:id', async(req, res)=>{
    let { id } = req.params;
    const task = await Task.update({_id: id}, req.body)
    res.redirect('/')
});

router.get('/edit/:id', async(req, res)=>{
    let { id } = req.params;
    const task = await Task.findById(id)
    res.render('edit',{task})
});

module.exports = router;