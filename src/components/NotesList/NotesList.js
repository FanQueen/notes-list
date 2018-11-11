import React from "react";
import "./NotesList.scss";
import PropTypes from "prop-types";
import NoteContainer from "../../containers/NoteContainer";

const NotesList = ({ notes }) => (
  <div>
    {notes.map(note => (
      <NoteContainer className="notes-list__note" key={note.id} {...note} />
    ))}
  </div>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      saved: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default NotesList;
