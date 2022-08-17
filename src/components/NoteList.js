import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchiveMove }) {
  const archived = notes.filter((note) => note.archived);
  const actived = notes.filter((note) => note.archived === false);

  return (
    <React.Fragment>
      <h2>Actived Note</h2>
      {actived.length !== 0 ? (
        <div className="notes-list">
          {actived.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchiveMove={onArchiveMove}
              {...note}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className="notes-list__empty-message">Actived Note Empty</p>
        </div>
      )}

      <h2>Archived Note</h2>
      {archived.length !== 0 ? (
        <div className="notes-list">
          {archived.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchiveMove={onArchiveMove}
              {...note}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className="notes-list__empty-message">Archived Note Empty</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default NoteList;
