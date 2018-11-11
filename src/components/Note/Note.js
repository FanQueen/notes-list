import React from "react";
import PropTypes from "prop-types";
import "./Note.scss";
import Button from "../Button";

class Note extends React.Component {
  state = {
    value: this.props.text
  };

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { id, saved, editNote, saveNote, removeNote, className } = this.props;
    const { value } = this.state;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          saveNote(id, value);
        }}
        className={`note ${className}`}
      >
        <div
          className={`note__text-wrapper ${
            saved ? "" : "note__text-wrapper--unsaved"
          }`}
        >
          <input
            value={value}
            type="text"
            disabled={saved}
            onChange={this.handleChange}
            className="note__text"
          />
        </div>
        {!saved && (
          <Button type="submit" className="note__button note__button--save">
            Save
          </Button>
        )}
        {saved && (
          <Button
            type="button"
            className="note__button note__button--edit"
            onClick={() => editNote(id)}
          >
            Edit
          </Button>
        )}
        <Button
          type="button"
          className="note__button note__button--remove"
          onClick={() => removeNote(id)}
        >
          Remove
        </Button>
      </form>
    );
  }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  saved: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  className: PropTypes.string
};

Note.defaultProps = {
  className: ""
};

export default Note;
