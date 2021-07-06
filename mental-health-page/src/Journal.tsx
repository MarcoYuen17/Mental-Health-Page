import React, { useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import { NoteData } from './Data';
import { Note } from './Note';
import ObjectID from 'bson-objectid';

export const Journal: React.FC = () => {
  const [newEntryText, setNewEntryText] = useState('');
  const [notes, setNotes] = useState<NoteData[]>([]);

  const [{}, dropRef] = useDrop(() => ({
    accept: 'note',
    hover: (item, monitor) => {
      updateNoteCoords(item, monitor.getClientOffset());
    },
  }));

  const updateNoteCoords = (item: any, positionDifference: XYCoord | null) => {
    const noteItem = item?.props;

    if (noteItem) {
      const modifiedItem = {
        ...noteItem,
        position: {
          x: positionDifference?.x,
          y: positionDifference?.y,
        }
      };
      setNotes([modifiedItem]);
    }
  }

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

  return (
    <div ref={dropRef} className='journal'>
      {notes.map((noteData: NoteData) => {
        console.log('notes map', noteData);
        return (
          <Note 
            key={noteData._id}
            _id={noteData._id}
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