import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    this.setState(() => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title ">Add Note</h2>
        <p className="note-input__title__char-limit">Character remain: 50</p>
        <form
          method="get"
          className="note-input__body"
          onSubmit={this.onSubmitEventHandler}
        >
          <input
            type="text"
            placeholder="Note title..."
            name="title"
            onChange={this.onChangeEventHandler}
          />
          <textarea
            name="body"
            placeholder="Write your note..."
            cols="30"
            rows="10"
            onChange={this.onChangeEventHandler}
          ></textarea>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
