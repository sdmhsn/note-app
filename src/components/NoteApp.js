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
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveMoveEventHandler = this.onArchiveMoveEventHandler.bind(this);
  }

  // Search Note
  onSearchNoteHandler(event) {
    const text = event.target.value.toLowerCase();
    const noteData = getInitialData();
    const tempStorage = [];

    noteData.forEach((item) => {
      if (item.title.toLowerCase().includes(text)) {
        tempStorage.push(item);

        this.setState(() => {
          return {
            notes: tempStorage,
          };
        });
      } else {
        this.setState(() => {
          return {
            notes: tempStorage,
          };
        });
      }
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
  onArchiveMoveEventHandler(title, createdAt, body, id, archived) {
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
        <NoteSearch onKeyUp={this.onSearchNoteHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteEventHandler}
            onArchiveMove={this.onArchiveMoveEventHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NoteApp;
