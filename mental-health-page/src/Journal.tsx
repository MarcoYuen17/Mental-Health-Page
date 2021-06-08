import React, { useState } from 'react';

export const Journal: React.FC = () => {
  const [newEntryText, setNewEntryText] = useState('');

  const handleChangeEntryText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const modifiedEntryText = e.currentTarget.value;
    setNewEntryText(modifiedEntryText);
    console.log('modified', modifiedEntryText);
  };

  const handleAddClicked = () => {
    console.log('add');
  };

  return (
    <div className='journal'>
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