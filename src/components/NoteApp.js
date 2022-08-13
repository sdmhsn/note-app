import React from 'react';
import { getInitialData } from '../utils/initialData';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    
    this.setState(() => {
        return {
            notes,
        };
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Active Note</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteEventHandler} />
      </div>
    );
  }
}

export default NoteApp;
