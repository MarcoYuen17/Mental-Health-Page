import { NoteData } from './Data';

export const Note: React.FC<NoteData> = (props) => {
  return (
    <div 
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