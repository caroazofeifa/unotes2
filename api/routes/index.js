const router = require('express').Router();
const notesController = require('../controllers/notesController');
const notebooksController = require('../controllers/notebooksController');
const tagsController = require('../controllers/tagsController');

router.get('/notes',notesController.getNotes);
router.get('/notebooks',notebooksController.getNotebooks);
router.get('/tags',tagsController.getTags);

router.post('/notes',notesController.createNotes);
router.post('/notebooks',notebooksController.createNotebooks);
router.post('/tags',tagsController.createTags);

router.delete('/notes/:id', notesController.deleteNote);
router.delete('/notebooks/:id', notebooksController.deleteNotebook);
router.delete('/tags/:id',tagsController.deleteTag);

router.put('/notes/:id',notesController.updateNote);
router.put('/notebooks/:id',notebooksController.updateNotebook);

router.get('/', (request, response) => {
  //console.log('HIIII');
  response.send('Hello World');
});

module.exports = router;
