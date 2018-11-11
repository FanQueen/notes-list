import { connect } from "react-redux";
import NotesList from "../components/NotesList";

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NotesList);
