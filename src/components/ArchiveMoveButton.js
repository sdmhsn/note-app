import React from 'react';

function ArchiveMoveButton({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchiveMove,
}) {
  return (
    <React.Fragment>
      <button
        className="note-item__archive-button"
        onClick={() => onArchiveMove(id, title, body, createdAt, archived)}
      >
        {archived ? 'Move' : 'Archieve'}
      </button>
    </React.Fragment>
  );
}

export default ArchiveMoveButton;
