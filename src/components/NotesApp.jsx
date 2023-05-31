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
        this.setState((prevState) => {
            const { notes, allNotes } = prevState;
            return {
                notes: [newNoteData, ...notes],
                allNotes: [newNoteData, ...allNotes]
            };
        });
    };


    onDeleteHandler = (id) => {
        this.setState((prevState) => ({
            notes: prevState.notes.filter((note) => note.id !== id),
            allNotes: prevState.allNotes.filter((note) => note.id !== id)
        }));
    };

    onArchiveHandler = (id) => {
        const noteToModify = this.state.allNotes.find((note) => note.id === id);
        const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) => (note.id === id ? modifiedNote : note)),
            allNotes: prevState.allNotes.map((note) => (note.id === id ? modifiedNote : note))
        }));
    };


    onSearchHandler = (text) => {
        const { allNotes } = this.state;
        if (text.trim() !== '') {
            const filteredNotes = allNotes.filter((note) =>
                note.title.toLowerCase().includes(text.toLowerCase())
            );
            this.setState({
                notes: filteredNotes
            });
        } else {
            this.setState({
                notes: allNotes
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
