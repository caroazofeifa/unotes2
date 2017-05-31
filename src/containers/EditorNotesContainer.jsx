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
      idTagsNote:[],
      //
      arrTagsInNote:[],
      arrNewTagsInNote:[],
    };
  }
  //Before component is mounted sets the state from props, used when a note is going to be edited
  componentWillMount() {
    this.setState({ titleNote: this.props.stateApp.title });
    this.setState({ descriptionNote: this.props.stateApp.description });
    this.setState({ idNotebookNote: this.props.stateApp.idNotebook });
    this.setState({ idNote: this.props.stateApp.idNote });
    this.state.idTagsNote=this.props.stateApp.idNote;
    this.setState({ idTagsNote: this.props.stateApp.idTags });
    this.fillTagsToshow();
    //console.log(this.props.stateApp.idNotebooks);
  }
  //Updates the title of the note
  updateTitleNote(titleNoteI) {
    this.setState({ titleNote: titleNoteI });
  }
  //Uodates the id of the notebook wich the note belongs
  updateIdNotebookNote(idNotebookNoteI) {
    this.setState({ idNotebookNote: idNotebookNoteI });
  }
  //Updates the description of the note
  updateDescriptionNote(descriptionNoteI) {
    this.setState({ descriptionNote: descriptionNoteI });
  }
  updateIdTagsNote(idTagsNoteI) {
    this.setState({ idTagsNote: idTagsNoteI });
  }
  //Calls to add note
  saveNote() {
    //console.log(this.state.idTagsNote);
    this.props.addNote(this.state.titleNote, this.state.descriptionNote, this.state.idNotebookNote,this.state.idTagsNote);
  }
  fillTagsToshow() {
    let array =[];
    //this.state.arrTagsInNote.map((element) => { arrayIds.push(element._id)});
    //console.log(this.props.stateApp.idTags);
    console.log('pa ensenar');
    this.props.stateApp.idTags.map((element) => {
      const objectTag = this.props.stateApp.allMyTags.find(e => e._id === element);
      //console.log(objectTag);
      array.push(objectTag) ;
    });
    this.state.arrTagsInNote = array;
  }
  insertTaginArray(nameTag, color) {
    let createArray=this.state.arrTagsInNote;
    if(!this.tagAlreadyExists(nameTag)) {
      this.createTag(nameTag,color);
      //WE NEED THE ID OF THE TAG.
      const tag = {'name':nameTag, 'color':color};
      //WAITING ASYNC???
      //const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag);
      
      createArray.push(tag);
    } else{
      //const idTag = this.getTagIdByName(nameTag);
      //console.log(idTag);
      const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag);
      createArray.push(objectTag);
    }

    this.setState({arrTagsInNote:createArray});
    //updateIds
    console.log(this.state.arrTagsInNote);
    let arrayIds=[];
    this.state.arrTagsInNote.map((element) => { arrayIds.push(element._id)});
    //ids
    this.updateIdTagsNote(arrayIds);
  }
  getTagIdByName(nameTag) {
    let idTag =-1;
    const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag);
    if(objectTag!=undefined){
      idTag=objectTag._id;
    }
    return idTag;
  }
  tagAlreadyExists(nameTag) {
    const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag);
    if(objectTag!=undefined){
      return true;
    } else {
      return false;
    }
  }
  createTag(nameTag,color) {
    this.props.addTag(nameTag,color);
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
        insertTaginArray= {this.insertTaginArray.bind(this) }
        addNote={ this.props.addNote }
        deleteNote={ this.props.deleteNote }
      />
    );
  }
}

module.exports = EditorNotesContainer;
