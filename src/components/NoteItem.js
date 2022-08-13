import React from 'react';
import { showFormattedDate } from '../utils/initialData';
import DeleteButton from './DeleteButton';

function NoteItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <button className="note-item__archive-button">Archive</button>
      </div>
    </div>
  );
}

export default NoteItem;
