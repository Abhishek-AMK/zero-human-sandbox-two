import React from 'react';

const NotesSection = ({ notes = [] }) => {
  return (
    <section className="notes-section">
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </section>
  );
};

export default NotesSection;