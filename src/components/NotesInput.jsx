import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            noteBody: '',
            titleLength: 0
        };

        this.initialState = this.state;
    }

    onTitleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        if (value.length <= 50) {
            this.setState((prevState) => ({
                ...prevState,
                [name]: value,
                titleLength: value.length
            }));
        } 
        // else {
        //     alert('Max length for title is 50!');
        // }
    };

    onBodyChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { title, noteBody } = this.state;
        const { addNewNote } = this.props;

        if (title === '') {
            alert('Title tidak boleh kosong!');
        } else if (noteBody === '') {
            alert('Note tidak boleh kosong!');
        } else {
            const newData = {
                id: +new Date(),
                title: title,
                body: noteBody,
                archived: false,
                createdAt: new Date()
            };

            addNewNote(newData);
            this.setState(this.initialState);
        }
    };

    render() {
        const { title, noteBody, titleLength } = this.state;

        return (
            <div className="note-input">
                <h2>New Note 📓</h2>
                <form>
                    <p className="note-input__title__char-limit">Character left: {50 - titleLength}</p>
                    <input
                        className="note-input__title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                        value={title}
                        onChange={this.onTitleChange}
                    />
                    <textarea
                        className="note-input__body"
                        type="text"
                        name="noteBody"
                        placeholder="Your notes here ..."
                        required
                        value={noteBody}
                        onChange={this.onBodyChange}
                    ></textarea>
                    <button type="submit" onClick={this.onSubmit}>
                        Add note
                    </button>
                </form>
            </div>
        );
    }
}

export default NotesInput;