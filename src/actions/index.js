let nextNote = 0;

export const addNote = () => ({
  type: "ADD_NOTE",
  id: nextNote++
});

export const removeNote = id => ({
  type: "REMOVE_NOTE",
  id
});

export const editNote = id => ({
  type: "EDIT_NOTE",
  id
});

export const saveNote = (id, text) => ({
  type: "SAVE_NODE",
  id,
  text
});
