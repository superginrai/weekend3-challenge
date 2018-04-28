const express = require('express');
const router = express.Router();
const Thing = require('../models/thing.schema');


// GET Thing objects from the database 
router.get('/', (req, res) => {
    console.log('GET: /thing)');
    Thing.find({})
    .then((databaseResults) => {
        res.send(databaseResults);
    })
    .catch((error) => {
        console.log('GET thing error:', error);
        res.sendStatus(500);
    })
});

//POST a new Thing to the database
router.post('/', (req, res) => {
    const newThing = req.body;
    console.log('POST: new Thing');
    Thing.create(newThing)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('POST Thing error:', error);
        res.sendStatus(500);
    })
});

//DELETE a Thing object from the database
router.delete('/:id', (req, res) => {
    const thingToDelete = req.params.id;
    console.log('DELETE: /thing/', thingToDelete);
    Thing.remove({_id: thingToDelete})
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('DELETE Thing error', error);
        res.sendStatus(500);
    })
});


module.exports = router;