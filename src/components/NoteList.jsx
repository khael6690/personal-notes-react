import React from "react";
import NoteItems from "./NoteItems";

const NoteList = ({ notesList, onDelete, onArchive }) => {
    return (
        <>
            {notesList.length !== 0 ? (
                <div className="notes-list">
                    {notesList.map((item) => (
                        <NoteItems
                            key={item.id}
                            note={item}
                            onDelete={onDelete}
                            onArchive={onArchive}
                        />
                    ))}
                </div>
            ) : (
                <p className="notes-list__empty-message">Tidak ada Notes...</p>
            )}
        </>
    );
};

export default NoteList;
