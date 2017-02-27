const express = require('express');
const router = express.Router();
const low = require('lowdb');
const path  = require('path')
const fileAsync = require('lowdb/lib/storages/file-async');
const db = low('db/db.json', {
  storage: fileAsync
});
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/assets/home.html'))
})
router.get('/edit/:id', function(req, res){
  res.sendFile(path.join(__dirname + '/assets/edit.html'))
})
router.get('/show/:id', function(req, res){
  res.sendFile(path.join(__dirname + '/assets/show.html'))
})
router.get('/movies', function (req, res) {
  const movies = db.get('movies');
  res.send(movies);
})

router.get('/movies/:id', function (req, res) {
  const id = parseInt(req.params.id);
  const movie = db.get('movies').find({"id": id});
  res.send(movie);
});

router.post('/newmovie', function (req, res) {
  console.log(req.body)

  db.get('movies')
    .push(req.body)
    .last()
    .assign({id: Date.now()})
    .write()
    .then(function (post) {
      res.status(201).send(post);

    }).catch(function (err) {
      console.log(err);
    });
});

router.delete('/movies/:id', function (req, res) {
  const id = parseInt(req.params.id);
  db.get('movies')
    .remove({'id': id})
    .write()
    .then(function () {
      console.log(id)
      res.status(204).send();
    })
    .catch(function (err) {
      console.log(err);
    });
});

router.put('/movies/:id', function (req, res) {
  const id = parseInt(req.params.id);
  db.get('movies')
    .find({'id': id})
    .assign(req.body)
    .write()
    .then(function (update) {
      res.send(update);
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
