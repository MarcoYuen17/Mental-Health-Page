import { XYCoord } from 'react-dnd';

export type NoteData = {
  _id: string;
  text: string;
  timeStamp: string;
  position: XYCoord;
}