import React from 'react';
import { getInitialData } from '../utils/index';

import Header from './Header';
import NoteBody from './NoteBody';
import Footer from './Footer';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            allNotes: getInitialData()
        };
    }

    componentDidMount() {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            this.setState({
                notes: JSON.parse(storedNotes),
                allNotes: JSON.parse(storedNotes)
            });
        }
    }

    componentDidUpdate() {
        const { notes } = this.state;
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    addNewNoteHandler = (newNoteData) => {
        this.setState((prevState) => ({
            notes: [newNoteData, ...prevState.notes],
            allNotes: [newNoteData, ...prevState.allNotes]
        }));
    };

    onDeleteHandler = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
            allNotes: prevState.allNotes.filter((note) => note.id !== id)
        }));
    };

    onArchiveHandler = (id) => {
        const noteToModify = this.state.allNotes.filter((note) => note.id === id)[0];
        const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
        this.setState((prevState) => ({
            notes: [
                ...prevState.notes.filter((note) => note.id !== id),
                modifiedNote
            ],
            allNotes: [
                ...prevState.allNotes.filter((note) => note.id !== id),
                modifiedNote
            ]
        }));
    };

    onSearchHandler = (text) => {
        if (text.length !== 0 && text.trim() !== '') {
            this.setState({
                notes: this.state.allNotes.filter((note) => note.title.toLowerCase().includes(text.toLowerCase()))
            });
        } else {
            this.setState({
                notes: this.state.allNotes
            });
        }
    };

    render() {
        return (
            <div>
                <Header onSearch={this.onSearchHandler} />
                <NoteBody
                    notes={this.state.notes}
                    addNewNote={this.addNewNoteHandler}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <Footer />
            </div>
        );
    }
}

export default NotesApp;
