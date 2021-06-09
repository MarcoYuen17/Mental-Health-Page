import React, { useState } from 'react';
import { Note } from './Note';

export const Journal: React.FC = () => {
  const [newEntryText, setNewEntryText] = useState('');
  // const [notes, setNotes] = useState<NoteData[]>([]);

  const handleChangeEntryText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const modifiedEntryText = e.currentTarget.value;
    setNewEntryText(modifiedEntryText);
    console.log('modified', modifiedEntryText);
  };

  const handleAddClicked = () => {
    console.log('add', newEntryText);
    setNewEntryText('');
  };

  return (
    <div className='journal'>
      <Note text='test' timeStamp={new Date()} />
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