const moment = require('moment');
const noteRouter = require('express').Router();
const Note = require('../models/note');

noteRouter.get('/fetch', (req, res) => { //TODO: Auth
  const date = req.body.date;
  
  getNotesOnDay(date)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

noteRouter.post('/update', async (req, res) => {
  const { date, notes } = req.body;

  getNotesOnDay(date)
    .then((existingNotes) => {
      const updatedNotesPromise = [];

      existingNotes?.forEach((existingNote) => {
        const updatedNote = notes?.find((note) => {
          return String(existingNote._id) === note._id;
        });
        if (updatedNote) {
          updatedNotesPromise.push(Note.findByIdAndUpdate(existingNote._id, updatedNote));
        } else {
          updatedNotesPromise.push(Note.findByIdAndDelete(existingNote._id));
        }
      });

      const newNotes = notes?.filter((note) => {
        return !existingNotes?.some((existingNote) => {
          return String(existingNote._id) === note._id;
        });
      });
      newNotes?.forEach((note) => {
        const updatedNote = new Note({
          ...note,
          user: '60fdbd59c682892014e12c35' // Temporarily hard-coded
        });
    
        updatedNotesPromise.push(updatedNote.save());
      });

      Promise.all(updatedNotesPromise)
        .then(() => res.json('Updates complete'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    });
});

const getNotesOnDay = async (date) => {
  const dateStart = moment(date).startOf('day');
  const dateEnd = moment(date).endOf('day');

  const notesOnDay = await Note.find({
    $and: [
      { user: '60fdbd59c682892014e12c35' }, // Temporarily hard-coded
      { timeStamp: { $gte: dateStart } },
      { timeStamp: { $lte: dateEnd } }
    ]
  })
  
  return notesOnDay;
};

module.exports = noteRouter;