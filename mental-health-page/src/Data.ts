type Position = {
  x: number;
  y: number;
}

export type NoteData = {
  _id: string;
  text: string;
  timeStamp: string;
  position: Position;
}