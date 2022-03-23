const { Router } = require('express');

const router = Router();

// api/users
router.get( '/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Hola mundo!'
  });
});



module.exports = router;