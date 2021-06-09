import { NoteData } from "./Data"

export const Note: React.FC<NoteData> = (props) => {
  return (
    <div className='note-container'>
      <p>Time: {props.timeStamp}</p>
      {props.text}
    </div>
  )
}