import { useDrag } from 'react-dnd';
import { NoteData } from './Data';

export const Note: React.FC<NoteData> = (props) => {

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'note',
    item: {props},
    collect: (monitor) => {
      const isDragging = monitor.isDragging();
      console.log('drag props', props);
      return {isDragging}
    },
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
      // onMouseDown={() => console.log(props.position)}
    >
      <p>Time: {props.timeStamp}</p>
      {props.text}
    </div>
  )
}