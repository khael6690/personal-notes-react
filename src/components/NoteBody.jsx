import React from "react";
import NotesList from "./NoteList";
import NotesInput from "./NotesInput";

const NoteBody = ({ notes, addNewNote, onDelete, onArchive }) => {
    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);

    return (
        <div className="note-app__body">
            <NotesInput addNewNote={addNewNote} />
            <h2>All Notes</h2>
            <NotesList notesList={activeNotes} onDelete={onDelete} onArchive={onArchive} />
            <h2>Archived Notes</h2>
            <NotesList notesList={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
};

export default NoteBody;
