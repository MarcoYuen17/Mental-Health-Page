type NoteProps = {
  text: string;
  timeStamp: Date;
  position?: {
    x: number, 
    y: number
  };
}

export const Note: React.FC<NoteProps> = (props) => {
  return (
    <div className='note-container'>
      {props.text}
    </div>
  )
}