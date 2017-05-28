const router = require('express').Router();
const notesController = require('../controllers/notesController');
const notebooksController = require('../controllers/notebooksController');

router.get('/notes',notesController.getNotes);
router.get('/notebooks',notebooksController.getNotebooks);

router.post('/notes',notesController.createNotes);
router.post('/notebooks',notebooksController.createNotebooks);

router.get('/', (request, response) => {
  //console.log('HIIII');
  response.send('Hello World');
});



module.exports = router;