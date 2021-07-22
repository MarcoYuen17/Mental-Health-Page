import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { NoteData } from './Data';
import { Note } from './Note';
import ObjectID from 'bson-objectid';

export const Journal: React.FC = () => {
  const [newEntryText, setNewEntryText] = useState('');
  const [notes, setNotes] = useState<NoteData[]>([]);

  const [{}, dropRef] = useDrop(() => ({
    accept: 'note',
  }));

  const handleChangeEntryText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const modifiedEntryText = e.currentTarget.value;
    setNewEntryText(modifiedEntryText);
  };

  const handleAddClicked = () => {
    const newNote: NoteData = {
      _id: String(new ObjectID()),
      text: newEntryText,
      timeStamp: new Date().toLocaleString(),
      position: findSpaceForNewNote(0, 0),
    }
    setNotes([...notes, newNote]);
    setNewEntryText('');
  };

  const findSpaceForNewNote = (xToTry: number, yToTry: number) => {
    let addAtCoords = {
      x: xToTry,
      y: yToTry,
    };

    if (notes.some((existingNote: NoteData) => {
      return (existingNote.position.x === xToTry &&
        existingNote.position.y === yToTry);
    })) {
      addAtCoords = findSpaceForNewNote(xToTry + 20, yToTry + 20);
    } 
    
    return addAtCoords;
  }

  const handleDragNote = (note: NoteData, xCoord: number, yCoord: number) => {
    const movedNote = {
      ...note,
      position: {
        x: xCoord,
        y: yCoord, 
      },
    };
    // console.log('moved note', movedNote);
    // console.log('new pos', xCoord, yCoord);
    
    const modifiedNotes = [...notes];
    const index = modifiedNotes.findIndex((note: NoteData) => {
      return note._id === movedNote._id;
    });
    modifiedNotes[index] = movedNote;
    setNotes(modifiedNotes);
  };

  return (
    <div ref={dropRef} className='journal'>
      {notes.map((noteData: NoteData) => {
        return (
          <Note 
            key={noteData._id}
            _id={noteData._id}
            text={noteData.text} 
            timeStamp={noteData.timeStamp} 
            position={noteData.position}
            onDragNote={handleDragNote}
          />
        );
      })}
      <textarea 
        className='journal-field'
        value={newEntryText}
        placeholder='Jot down your thoughts here'
        onChange={handleChangeEntryText}
      />
      <button 
        className='button'
        onClick={handleAddClicked}
      >
        Add note
      </button>
    </div>
  );
}