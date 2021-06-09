export type NoteData = {
  text: string;
  timeStamp: string;
  position?: {
    x: number, 
    y: number
  };
}