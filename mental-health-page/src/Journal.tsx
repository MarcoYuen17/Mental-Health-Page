import React, { useState } from 'react';
import { NoteData } from './Data';
import { Note } from './Note';

export const Journal: React.FC = () => {
  const [newEntryText, setNewEntryText] = useState('');
  const [notes, setNotes] = useState<NoteData[]>([]);

  const handleChangeEntryText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const modifiedEntryText = e.currentTarget.value;
    setNewEntryText(modifiedEntryText);
  };

  const handleAddClicked = () => {
    const newNote: NoteData = {
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

  return (
    <div className='journal'>
      {notes.map((noteData: NoteData, index: number) => {
        return (
          <Note 
            key={index}
            text={noteData.text} 
            timeStamp={noteData.timeStamp} 
            position={noteData.position}
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