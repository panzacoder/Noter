var express = require('express');
var router = express.Router();
var noteController = require('../controllers/notes.js');

/*
 * GET
 */
router.get('/', noteController.list);

/*
 * GET
 */
router.get('/:id', noteController.show);

/*
 * POST
 */
router.post('/', noteController.create);

/*
 * PUT
 */
router.put('/:id', noteController.update);

/*
 * DELETE
 */
router.delete('/:id', noteController.remove);

module.exports = router;
