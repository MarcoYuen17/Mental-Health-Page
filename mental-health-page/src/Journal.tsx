import React, { useState } from 'react';
import { NoteData } from './Data';
import { Note } from './Note';

export const Journal: React.FC = () => {
  const [newEntryText, setNewEntryText] = useState('');
  const [notes, setNotes] = useState<NoteData[]>([]);

  const handleChangeEntryText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const modifiedEntryText = e.currentTarget.value;
    setNewEntryText(modifiedEntryText);
    console.log('modified', modifiedEntryText);
  };

  const handleAddClicked = () => {
    console.log('add', newEntryText);
    const newNote: NoteData = {
      text: newEntryText,
      timeStamp: new Date().toLocaleString(),
      // position: 
    }
    setNotes([...notes, newNote]);
    setNewEntryText('');
  };

  return (
    <div className='journal'>
      {notes.map((noteData: NoteData) => {
        return (
          <Note 
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