import React from 'react';
import axios from 'axios';

const NotesContainer = require('./NotesContainer');
const NavMenu = require('../components/navMenu/NavMenu');
const EditorNotes = require('../components/editorNotes/EditorNotes');
const Notebooks = require('../components/notebooks/Notebooks');
const Tags = require('../components/tags/Tags');

const serverNotes = 'http://localhost:3000/notes';
const serverNotebooks = 'http://localhost:3000/notebooks';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Show modals from buttons of the principal menu
      showEditor: false,
      editorNotes: 'notesModal',
      showNotebook: false,
      notebook: 'sectionFile',
      showTag: false,
      tag: 'tagFile',
      //information of the consulted note
      title: '',
      description: '',
      idNotebook: '',
      idNote: '',
      //Data
      allMyNotes: [],
      allMyNotebooks: [],
    };
  }
  //will be executed when the component “mounts” (is added to the DOM) for the first time.
  //This method is only executed once during the component’s life.
  componentDidMount() {
    //Get notes with axios from json server
    axios
      .get(serverNotes)
      .then(res => {
        const allMyNotes = res.data;
        this.setState({ allMyNotes });
      });
    //Get notes with axios from json server
    axios
      .get(serverNotebooks)
      .then(res => {
        const allMyNotebooks = res.data;
        this.setState({ allMyNotebooks });
      });
  }
  showEditorNotes() {
    if (this.state.showEditor) {
      this.setState({ showEditor: false });
    } else {
      this.setState({ showEditor: true });
    }
  }
  showNotebooks() {
    if (this.state.showNotebook) {
      this.setState({ showNotebook: false });
    } else {
      this.setState({ showNotebook: true });
    }
  }
  showTags() {
    if (this.state.showTag) {
      this.setState({ showTag: false });
    } else {
      this.setState({ showTag: true });
    }
  }
  editNote(titleI, descriptionI, idNoteI, idNotebookI) {
    this.setState({ title: titleI });
    this.setState({ description: descriptionI });
    this.setState({ idNote: idNoteI });
    this.setState({ idNotebook: idNotebookI });
    this.setState({ showEditor: true });
  }
  render() {
    if (this.state.showEditor) {
      this.state.editorNotes = 'notesModal--show';
    } else {
      this.state.editorNotes = 'notesModal';
    }
    if (this.state.showNotebook) {
      this.state.notebook = 'sectionFile--show';
    } else {
      this.state.notebook = 'sectionFile';
    }
    if (this.state.showTag) {
      this.state.tag = 'tagFile--show';
    } else {
      this.state.tag = 'tagFile';
    }
    return (
      <div>
        <div className='col-md-1 cols'>
          <NavMenu showEditorNotes={ this.showEditorNotes.bind(this) } showNotebooks={ this.showNotebooks.bind(this) } showTags={ this.showTags.bind(this) } />
        </div>
        <EditorNotes showEditorNotes={ this.state } />
        <Notebooks showNotebooks={ this.state } />
        <Tags showTags={ this.state } />
        <NotesContainer showData={ this.state } editNote={ this.editNote.bind(this) } />
      </div>
    );
  }
}

module.exports = AppContainer;
