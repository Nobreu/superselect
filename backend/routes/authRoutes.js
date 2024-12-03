const express = require('express');
const { register, login } = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acesso permitido!', user: req.user });
});

module.exports = router;
