import React from 'react';

const EditorNotes = require('../components/editorNotes/EditorNotes');

class EditorNotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNote: '123',
      descriptionNote: '',
      idNotebookNote:-1,
      idNote:-1,
    };

  }
  componentWillMount(){
    this.setState({ titleNote: this.props.stateApp.title });
    this.setState({ descriptionNote: this.props.stateApp.description });
    this.setState({ notebookNote: this.props.stateApp.idNotebooks });
    this.setState({ idNote: this.props.stateApp.id });

  }
  updateTitleNote(titleNoteI) {
    this.setState({ titleNote: titleNoteI });
  }
  updateIdNotebookNote(IdNotebookNoteI) {
    this.setState({ idNotebookNote: IdNotebookNoteI });
  }
  updateDescriptionNote(descriptionNoteI) {
    this.setState({ descriptionNote: descriptionNoteI });
  }
  saveNote(){
    console.log('Save note');
    console.log(this.state.titleNote);
    console.log(this.state.descriptionNote);
    console.log(this.state.idNotebookNote);
    console.log(this.state.idNote);
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
      />
    );
  }
}

module.exports = EditorNotesContainer;
