import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      limitChar: 50,
    };

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onChangeEventHandler(event) {
    if (event.target.name === 'title') {
      this.setState(() => {
        return {
          title: event.target.value.substring(0, 49),
          limitChar: Math.max(0, 50) - event.target.value.length,
        };
      });
    }

    if (event.target.name === 'body') {
      this.setState(() => {
        return {
          body: event.target.value,
        };
      });
    }
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title ">Add Note</h2>
        <p
          className="note-input__title__char-limit"
          onChange={this.onChangeEventHandler}
        >
          Remaining Characters: {this.state.limitChar}
        </p>
        <form
          method="get"
          className="note-input__body"
          onSubmit={this.onSubmitEventHandler}
        >
          <input
            type="text"
            placeholder="Note title..."
            name="title"
            value={this.state.title}
            onChange={this.onChangeEventHandler}
            required
            className="note-input__title"
          />
          <textarea
            name="body"
            placeholder="Write your note..."
            cols="30"
            rows="10"
            onChange={this.onChangeEventHandler}
            required
            className="note-input__body"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
