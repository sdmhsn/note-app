import React from 'react';

function NoteSearch({ search, onSearchChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Find note..." value={search} onChange={onSearchChange} />
      </div>
    </div>
  );
} 

export default NoteSearch;
