import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router'

const queryString = require('query-string');
const NotesContainer = require('./NotesContainer');
const NotebooksContainer = require('./NotebooksContainer');
const EditorNotesContainer = require('./EditorNotesContainer');

const NavMenu = require('../components/navMenu/NavMenu');
const Tags = require('../components/tags/Tags');

const serverNotes = 'http://localhost:3000/notes';
const serverNotebooks = 'http://localhost:3000/notebooks';
const serverTags = 'http://localhost:3000/tags';

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
      allMyTags: [],
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
    axios
      .get(serverTags)
      .then(res => {
        const allMyTags = res.data;
        this.setState({ allMyTags });
      });
  }
  //Sets true/salse variables to show Modal editor of notes
  showEditorNotes() {
    if (this.state.showEditor) {
      this.setState({ showEditor: false });
    } else {
      this.setState({ showEditor: true });
    }
  }
  //Sets true/false variables to show Menu of Notebooks
  showNotebooks() {
    if (this.state.showNotebook) {
      this.setState({ showNotebook: false });
    } else {
      this.setState({ showNotebook: true });
    }
  }
  //Sets true/false variables to show Menu of Tags
  showTags() {
    if (this.state.showTag) {
      this.setState({ showTag: false });
    } else {
      this.setState({ showTag: true });
    }
  }
  //Sets vars in the STATE from selected note
  //Shows Modal editor of notes
  editNote(titleI, descriptionI, idNoteI, idNotebookI) {
    this.setState({ title: titleI });
    this.setState({ description: descriptionI });
    this.setState({ idNote: idNoteI });
    this.setState({ idNotebook: idNotebookI });
    this.setState({ showEditor: true });
  }
  addNotebook(nameNotebookI) {
    console.log(nameNotebookI);
    const newNotebook = { name: nameNotebookI };
    axios
      .post(serverNotebooks, queryString.stringify(newNotebook))
      .then(function (response) {
        console.log('saved successfully');
      });
  }
  addTag(nameTagI) {
    console.log(nameTagI);
    const newTag = { name: nameTagI };
    axios
      .post(serverTags, queryString.stringify(newTag))
      .then(function (response) {
        console.log('saved successfully');
      });
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
        <Route path="/Tags" render={() => (
            this.state.showTag ? (
              <Tags stateApp={ this.state } />
            ) : (
              <Redirect to="/"/>
            )
          )}/>
        <Route path="/Notebooks" render={() => (
          this.state.showNotebook ? (
            <NotebooksContainer stateApp={ this.state } addNotebook={ this.addNotebook.bind(this) } />
          ) : (
            <Redirect to="/"/>
          )
        )}/>

        <Route path="/NoteEditor" render={() => (
          this.state.showEditor ? (
            <EditorNotesContainer stateApp={ this.state } />
          ) : (
            <Redirect to="/"/>
          )
        )}/>
        <Route
          path='/' render={ () => (
            <NotesContainer stateApp={ this.state } editNote={ this.editNote.bind(this) } />
          ) }
        />
      </div>
    );
  }
}

module.exports = AppContainer;
