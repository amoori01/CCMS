const router = require('express').Router();
const exampleRoutes = require('./example');

// API routes
router.use('/example', exampleRoutes);

module.exports = router;
