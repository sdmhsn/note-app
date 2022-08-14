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
  }

  onSearchNoteHandler(event) {
    const text = event.target.value.toLowerCase();
    const data = getInitialData();
    const tempStorage = []

    data.forEach((item) => {
      if (item.title.toLowerCase().includes(text)) {
        tempStorage.push(item)

        this.setState(() => {
            return {
              notes: tempStorage
            };
        });
      } else {
        this.setState(() => {
          return {
            notes: tempStorage
          };
      });
      }
    });
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

    console.log(notes)

    this.setState(() => {
      return {
        notes,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <NoteSearch onKeyUp={this.onSearchNoteHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Active Note</h2>
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteEventHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NoteApp;
