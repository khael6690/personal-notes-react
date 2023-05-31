import React from 'react';
import { showFormattedDate } from "../utils/index";

class NoteItem extends React.Component {
    onDeleteEvent = () => {
        const { onDelete, note } = this.props;
        onDelete(note.id);
    };

    onArchiveEvent = () => {
        const { onArchive, note } = this.props;
        onArchive(note.id);
    };

    render() {
        const { note } = this.props;

        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">{note.title}</h3>
                    <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                    <p className="note-item__body">{note.body}</p>
                </div>
                <div className="note-item__action">
                    {note.archived === false ? (
                        <button className="note-item__archive-button" onClick={this.onArchiveEvent}>
                            Archive
                        </button>
                    ) : (
                        <button className="note-item__archive-button" onClick={this.onArchiveEvent}>
                            Unarchive
                        </button>
                    )}
                    <button className="note-item__delete-button" onClick={this.onDeleteEvent}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteItem;
