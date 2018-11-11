import { connect } from "react-redux";
import Note from "../components/Note";
import { editNote, removeNote, saveNote } from "../actions";

const mapDispatchToProps = dispatch => ({
  editNote: id => dispatch(editNote(id)),
  removeNote: id => dispatch(removeNote(id)),
  saveNote: (id, text) => dispatch(saveNote(id, text))
});

export default connect(
  null,
  mapDispatchToProps
)(Note);
