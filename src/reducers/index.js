const noteApp = (state = { notes: [] }, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        notes: [
          ...state.notes,
          {
            id: action.id,
            text: "",
            saved: false
          }
        ]
      };
    }
    case "REMOVE_NOTE": {
      return {
        notes: state.notes.filter(note => note.id !== action.id)
      };
    }
    case "EDIT_NOTE": {
      return {
        notes: state.notes.map(note =>
          note.id === action.id
            ? {
                ...note,
                saved: false
              }
            : note
        )
      };
    }
    case "SAVE_NODE": {
      return {
        notes: state.notes.map(note =>
          note.id === action.id
            ? {
                ...note,
                text: action.text,
                saved: true
              }
            : note
        )
      };
    }
    default: {
      return state;
    }
  }
};

export default noteApp;
