import React from "react";
import "./App.scss";
import NotesListContainer from "../../containers/NotesListContainer";
import AddNoteContainer from "../../containers/AddNoteContainer";

const App = () => (
  <div className="app">
    <h1 className="app__header">Notes list</h1>
    <AddNoteContainer className="app__add-note-button" />
    <NotesListContainer />
  </div>
);

export default App;
