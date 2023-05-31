import React from 'react';
import { showFormattedDate } from "../utils/index";

const NoteItem = ({ note, onDelete, onArchive }) => {
    const onDeleteEvent = () => onDelete(note.id);
    const onArchiveEvent = () => onArchive(note.id);

    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                {
                    note.archived === false ?
                        <button className="note-item__archive-button" onClick={onArchiveEvent}>Archive</button> :
                        <button className="note-item__archive-button" onClick={onArchiveEvent}>Unarchive</button>
                }
                <button className="note-item__delete-button" onClick={onDeleteEvent}>Delete</button>
            </div>
        </div>

    )

}

export default NoteItem;