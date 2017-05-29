import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const queryString = require('query-string');
const NotesContainer = require('./NotesContainer');
const NotebooksContainer = require('./NotebooksContainer');
const EditorNotesContainer = require('./EditorNotesContainer');
const TagsContainer = require('./TagsContainer');

const NavMenu = require('../components/navMenu/NavMenu');
const Tags = require('../components/tags/Tags');

const serverNotes = 'http://localhost:3000/api/notes';
const serverNotebooks = 'http://localhost:3000/api/notebooks';
const serverTags = 'http://localhost:3000/api/tags';

let stateEditorNotes = '';

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
      idNotebook: -1,
      idNote: -1,
      //Data
      allMyNotes: [],
      allMyNotebooks: [],
      allMyTags: [],
      //Edit
      editing:false,
    };
  }
  //will be executed when the component “mounts” (is added to the DOM) for the first time.
  //This method is only executed once during the component’s life.
  componentDidMount() {   
    //Get notes with axios from the api
    this.getAllNotes();
    //Get notebooks with axios from the api
    this.getAllNotebooks();
    //Get tags with axios from json server
    this.getAllTags();
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
    //console.log(this.state);
  }
  getAllNotes() {
    axios
      .get(serverNotes)
      .then(res => {
        this.setState({ allMyNotes: res.data});
      });
  }
  getAllNotebooks() {
    axios
      .get(serverNotebooks)
      .then(res => {
        this.setState({ allMyNotebooks: res.data });
      });
  }
  getAllTags() {
    axios
      .get(serverTags)
      .then(res => {
        const allMyTags = res.data;
        this.setState({ allMyTags });
      });
  }
  //ADD NOTE
  addNote(titleI, descriptionI, idNotebookI) {
    if (titleI =='' || idNotebookI ==0) {
      window.alert('Make sure you selected the notbook and the title for your note! ');
    } else {
      if(this.state.editing){
        const updateNote = { '_id': this.state.idNote, 'title': titleI, 'description': descriptionI, 'idNotebook': idNotebookI };
        //UPDATE NOTE
        axios
          .put(serverNotes+'/'+this.state.idNote, updateNote)
          .then(function (response) {
            this.getAllNotes()
          }.bind(this));
          this.showEditorNotes();
          this.state.editing=false;
        } else {
          //ADD NEW NOTE
        const newNote = { 'title': titleI, 'description': descriptionI, 'idNotebook': idNotebookI };
        axios
          .post(serverNotes, newNote)
          .then(function (response) {
            this.getAllNotes()
          }.bind(this));
          this.showEditorNotes();
      }
    }
  }
  //ADD NOTEBOOK
  addNotebook(nameNotebookI) {
    const newNotebook = { 'name': nameNotebookI };
    axios
      .post(serverNotebooks, newNotebook)
      .then(function (response) {
        this.getAllNotebooks()
      }.bind(this));
  }
  //ADD TAG
  addTag(nameTagI) {
    const newTag = { 'name': nameTagI };
    // console.log(nameTagI);
    axios
      .post(serverTags, newTag)
      .then(function (response) {
        this.getAllTags()
      }.bind(this));
  }
  //DELETE NOTE
  deleteNote(noteId) {
    const deleteNote = { 'id': noteId };
    axios
      .delete(serverNotes+'/'+noteId, deleteNote)
      .then(function (response) {
        this.getAllNotes()
      }.bind(this));
  }
  //DELETE NOTEBOOK
  deleteNotebook(notebookId) {
    console.log(notebookId);
    const deleteNotebook = { 'id': notebookId };
    axios
      .delete(serverNotebooks+'/'+notebookId, deleteNotebook)
      .then(function (response) {
        this.getAllNotebooks()
      }.bind(this));
  }
  //DELETE TAG
  deleteTag(tagId) {
    console.log(tagId);
    const deleteTag = { 'id': tagId };
    axios
      .delete(serverTags+'/'+tagId, deleteTag)
      .then(function (response) {
        this.getAllTags()
      }.bind(this));
  } 
  //EDIT NOTE
  setEditing() {
    this.state.editing=true;
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
          <NavMenu
            showEditorNotes={ this.showEditorNotes.bind(this) }
            showNotebooks={ this.showNotebooks.bind(this) }
            showTags={ this.showTags.bind(this) }
          />
        </div>
        <Route
          path='/Tags' render={ () => (
            this.state.showTag ? (
              <TagsContainer
                stateApp={ this.state }
                addTag={this.addTag.bind(this) }
                deleteTag={ this.deleteTag.bind(this) }
              />
            ) : (
              <Redirect to='/' />
            )
          ) }
        />
        <Route
          path='/Notebooks' render={ () => (
          this.state.showNotebook ? (
            <NotebooksContainer
              stateApp={ this.state }
              addNotebook={ this.addNotebook.bind(this) }
              deleteNotebook={ this.deleteNotebook.bind(this) }
            />
          ) : (
            <Redirect to='/' />
          )
          ) }
        />
        <Route
          path='/NoteEditor' render={ () => (
          this.state.showEditor ? (
            <EditorNotesContainer
              stateApp={ this.state }
              addNote={ this.addNote.bind(this) }
              deleteNote={ this.deleteNote.bind(this) }
            />
          ) : (
            <Redirect to='/' />
          )
         ) }
        />
        <Route
          path='/' render={ () => (
            <NotesContainer
              stateApp={ this.state }
              editNote={ this.editNote.bind(this) }
              deleteNote={ this.deleteNote.bind(this) }
              setEditing={ this.setEditing.bind(this) }
            />
          ) }
        />
      </div>
    );
  }
}

module.exports = AppContainer;
