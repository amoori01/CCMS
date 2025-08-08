const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from node5 API 👋' });
});

module.exports = router;
