const { Router } = require('express');
const { getAllUsers, createUser } = require('../controllers/user.controller');

const router = Router();

// GET api/users
router.get( '/', getAllUsers );
// POST api/users
router.post( '/', createUser );



module.exports = router;