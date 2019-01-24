const router = express.Router()

router.use('/api/v1/admin', (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        res.status(401).json({ error: 'Unauthorized access' });
        return;
    }

    next();
})

export default router;