import React from 'react';

const EditorNotes = require('../components/editorNotes/EditorNotes');

class EditorNotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNote: '123',
      descriptionNote: '',
      idNotebookNote:-1,
    };

  }
  componentWillMount(){
    this.setState({ titleNote: this.props.stateApp.title });
    this.setState({ descriptionNote: this.props.stateApp.description });
    this.setState({ notebookNote: this.props.stateApp.idNotebooks });
  }
  updateTitleNote(titleNoteI) {
    this.setState({ titleNote: titleNoteI });
  }
  updateDescriptionNote(descriptionNoteI) {
    this.setState({ descriptionNote: descriptionNoteI });
  }
  updateIdNotebookNote(IdNotebookNoteI) {
    this.setState({ idNotebookNote: IdNotebookNoteI });
  }
  render() {
    return (
      <EditorNotes 
      infoEditorNote={ this.state } 
      stateApp={ this.props.stateApp } 
      updateTitleNote={ this.updateTitleNote.bind(this) }
      updateDescriptionNote={ this.updateDescriptionNote.bind(this) }
      updateIdNotebookNote={ this.updateIdNotebookNote.bind(this) }
      />
    );
  }
}

module.exports = EditorNotesContainer;
