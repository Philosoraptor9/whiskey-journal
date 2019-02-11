const express = require('express');
const Whiskey = require('../models/Whiskey');
const User = require('../models/user');
const logger = require('../logs')

const router = express.Router()

router.use('/api/v1/admin', (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        res.status(401).json({ error: 'Unauthorized access' });
        return;
    }

    next();
})

router.get('/api/v1/admin/whiskeys', (req, res, next) => {
    try {
        const whiskeys = await Whiskey.list();
        res.json(whiskeys);
    } catch(err) {
        res.json({ err: err.message || err.toString() });
    }
});

router.post('/whiskeys/add', (req, res, next) => {
    try {
        const whiskey = await whiskey.add(Object.assign({ userId: req.user.id}, req.body));
        res.json(whiskey);
    }
    catch (err){
        logger.error(err);
        res.json({ error: err.message || err.toString() });
    }
})

router.post('/whiskeys/edit', async (req, res) => {
    try {
        const editedWhiskey = await Whiskey.edit(req.body);
        res.json(editedWhiskey);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
})

router.get('whiskeys/detail/:slug', async (req, res) => {
    try{
        const whiskey = await Whiskey.getBySlug({ slug: req.params.slug });
        res.json(whiskey);
    }
    catch (err) {
        res.json({ error: err.message || err.toString() });
    }
})

// May need a syncContent route here for updated whiskeys

export default router;