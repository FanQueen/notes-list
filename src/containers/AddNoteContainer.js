import { connect } from "react-redux";
import AddNote from "../components/AddNote";
import { addNote } from "../actions";

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote())
});

const AddNoteContainer = connect(
  null,
  mapDispatchToProps
)(AddNote);

export default AddNoteContainer;
