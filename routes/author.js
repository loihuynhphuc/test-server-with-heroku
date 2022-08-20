const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

        // [GET]/v1/author
router.post('/',authorController.addAuthor);
// router.get('/',authorController.getAuthor);


module.exports = router;