import { useDrag } from 'react-dnd';
import { NoteData } from './Data';

export const Note: React.FC<NoteData> = (props) => {

  const [, dragRef] = useDrag(() => ({
    type: 'note',
    item: {props},
  }));

  return (
    <div 
      ref={dragRef}
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