const express = require('express')
const router = express.Router()
const Whiskey = require('../models/whiskey')

// GET index
router.get('/', async (req, res, next) => {
    console.log(req.body, ' getting all of the Whiskeys');
    try {
        const allWhiskeys = await Whiskey.find();
        res.json({
            status: 200,
            data: allWhiskeys
          })
        } catch (err){
          console.log('Error ' + err);
    }
})


// POST create a Whiskey
router.post('/', async(req, res) =>{
    try{
        console.log(req.body, ' this is req.body');
        const createdWhiskey = await Whiskey.create(req.body);
        res.json({
            status: 200,
            data: createdWhiskey
        })
    } catch(err){
        console.log('Error ' + err);
    }
})


// GET a Whiskey at /:id
router.get('/:id', async(req, res, next) =>{
    try{
        console.log(req.params.id, ' this is req.params');
        const foundWhiskey = await Whiskey.findById(req.params.id);
        res.json({
            status: 200,
            data: foundWhiskey
        })
    } catch(err){
        console.log('Error ' + err);
    }
})

// PUT update Whiskey /:id
router.put('/:id', async(req, res) => {
    try{
        const updatedWhiskey = await Whiskey.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedWhiskey
        })
    } catch(err){
        console.log('Error ' + err);
    }
})

// DELETE destroy Whiskey at /:id
router.delete('/:id', async(req, res) => {
    try{
        const deletedWhiskey = await Whiskey.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedWhiskey
        })
    } catch(err){
        console.log('Error ' + err);
    }
})


module.exports = router;