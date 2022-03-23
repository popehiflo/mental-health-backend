const { Router } = require('express');
const { getUsers } = require('../controllers/user.controller');

const router = Router();

// api/users
router.get( '/', getUsers );



module.exports = router;