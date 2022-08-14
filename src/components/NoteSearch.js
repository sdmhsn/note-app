import React from 'react';

function NoteSearch({ onKeyUp }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Find note..." onKeyUp={onKeyUp} />
      </div>
    </div>
  );
} 

export default NoteSearch;
