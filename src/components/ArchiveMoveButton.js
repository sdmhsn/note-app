import React from 'react';

function ArchiveMoveButton({
  title,
  createdAt,
  body,
  id,
  archived,
  onArchiveMove,
}) {
  return (
    <React.Fragment>
      <button
        className="note-item__archive-button"
        onClick={() => onArchiveMove(title, createdAt, body, id, archived)}
      >
        {archived ? 'Move' : 'Archieve'}
      </button>
    </React.Fragment>
  );
}

export default ArchiveMoveButton;
