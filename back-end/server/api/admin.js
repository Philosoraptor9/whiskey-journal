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

export default router;