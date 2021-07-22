import { useDrag, XYCoord } from 'react-dnd';
import { NoteData } from './Data';

type NoteProps = {
  _id: string;
  text: string;
  timeStamp: string;
  position: XYCoord;
  onDragNote: (note: NoteData, xCoord: number, yCoord: number) => void;
};

export const Note: React.FC<NoteProps> = (props) => {

  const [, dragRef] = useDrag(() => ({
    type: 'note',
    item: props,
  }));

  return (
    <div 
      ref={dragRef}
      onDrag={(e) => {
        if (e.clientX && e.clientY) {
          const note: NoteData = {...props};
          delete (note as any).onDragNote;
          props.onDragNote(note, e.clientX, e.clientY);
        }
      }}
      className='note-container'
      style={{
        position: 'absolute',
        left: `calc(100% + ${props.position.x}px)`,
        top: `calc(10% + ${props.position.y}px)`,
      }}
    >
      <p>Time: {props.timeStamp}</p>
      {props.text}
    </div>
  )
}