import "./NotesListView.css";
import { FC } from "react";
import { NoteView } from "../NoteView";
import { NoteList } from "../../api/Note";

export interface NotesListViewProps {
  noteList: NoteList;
}

export const NotesListView: FC<NotesListViewProps> = ({noteList}) => {
  return (
    <ul className="note-list-view">
      {noteList.map((note) => (
        <li key={note.id}>
          <NoteView note={note} />
        </li>
      ))}
    </ul>
  );
};
