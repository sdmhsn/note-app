import React from 'react';
import { getInitialData } from '../utils/initialData';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveMoveEventHandler = this.onArchiveMoveEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onSearchNoteHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  // Add Note
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

  // Delete Note
  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState(() => {
      return {
        notes,
      };
    });
  }

  // Archive and Move Note
  onArchiveMoveEventHandler(id, title, body, createdAt, archived) {
    if (archived) {
      const moves = this.state.notes.filter((note) =>
        note.id === id ? (note.archived = false) : note.archived
      );

      this.setState(() => {
        return {
          ...moves,
        };
      });
    } else {
      const archieve = this.state.notes.filter((note) =>
        note.id === id ? (note.archived = true) : note.archived
      );

      this.setState(() => {
        return {
          ...archieve,
        };
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <NoteSearch
          search={this.state.search}
          onSearchChange={this.onSearchNoteHandler}
        />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteEventHandler}
            onArchiveMove={this.onArchiveMoveEventHandler}
            searchKeyword={this.state.search}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NoteApp;
