import React from 'react';

const EditorNotes = require('../components/editorNotes/EditorNotes');

class EditorNotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNote: '123',
      descriptionNote: '',
      idNotebookNote: 0,
      idNote: -1,
    };
  }
  //Before component is mounted sets the state from props, used when a note is going to be edited
  componentWillMount() {
    this.setState({ titleNote: this.props.stateApp.title });
    this.setState({ descriptionNote: this.props.stateApp.description });
    this.setState({ idNotebookNote: this.props.stateApp.idNotebook });
    this.setState({ idNote: this.props.stateApp.idNote });
    //console.log(this.props.stateApp.idNotebooks);
  }
  //Updates the title of the note
  updateTitleNote(titleNoteI) {
    this.setState({ titleNote: titleNoteI });
  }
  //Uodates the id of the notebook wich the note belongs
  updateIdNotebookNote(IdNotebookNoteI) {
    this.setState({ idNotebookNote: IdNotebookNoteI });
  }
  //Updates the description of the note
  updateDescriptionNote(descriptionNoteI) {
    this.setState({ descriptionNote: descriptionNoteI });
  }
  //Calls to add note
  saveNote() {
    this.props.addNote(this.state.titleNote, this.state.descriptionNote, this.state.idNotebookNote);
  }
  render() {
    return (
      <EditorNotes
        infoEditorNote={ this.state }
        stateApp={ this.props.stateApp }
        updateTitleNote={ this.updateTitleNote.bind(this) }
        updateDescriptionNote={ this.updateDescriptionNote.bind(this) }
        updateIdNotebookNote={ this.updateIdNotebookNote.bind(this) }
        saveNote={ this.saveNote.bind(this) }
        addNote={ this.props.addNote }
        deleteNote={ this.props.deleteNote }
      />
    );
  }
}

module.exports = EditorNotesContainer;
