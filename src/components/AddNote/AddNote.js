import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./AddNote.scss";

const AddNote = ({ addNote, className }) => (
  <Button
    className={`add-note-button ${className}`}
    onClick={addNote}
    type="button"
  >
    Add
  </Button>
);

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  className: PropTypes.string
};

AddNote.defaultProps = {
  className: ""
};

export default AddNote;
