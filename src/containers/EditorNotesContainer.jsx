import React from 'react';
import axios from 'axios';

const EditorNotes = require('../components/editorNotes/EditorNotes');

class EditorNotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Actual information of the note
      titleNote: '',
      descriptionNote: '',
      idNotebookNote: -1,
      idNote: -1,
      idTagsNote:[],
      //Object tags of the actual note
      arrTagsInNote:[],
      
    };
  }
  //Before component is mounted sets the state from props, used when a note is going to be edited
  componentWillMount() {
    this.setState({ titleNote: this.props.stateApp.title });
    this.setState({ descriptionNote: this.props.stateApp.description });
    this.setState({ idNotebookNote: this.props.stateApp.idNotebook });
    this.setState({ idNote: this.props.stateApp.idNote });
    this.state.idTagsNote=this.props.stateApp.idTags;
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
  //Updates the id tags of the note
  updateIdTagsNote(idTagsNoteI) {
    this.setState({ idTagsNote: idTagsNoteI });
  }
  //Calls to add note
  saveNote() {
    //console.log(this.state.idTagsNote);
    this.props.addNote(this.state.titleNote, this.state.descriptionNote, this.state.idNotebookNote,this.state.idTagsNote);
  }
  //Gets the objects to show (of the actual note) tags from the array of tags 
  //TO DO REFACTOR METHOD 
  fillTagsToshow() {
    //console.log(this.props.stateApp.idTags);
    //console.log(`ID TAGS IN NOTE: ${this.state.idTagsNote}`);
    //console.log(`ALL MY TAGS (PROP): ${this.props.stateApp.allMyTags}`);
    //console.log(`ARR TAGS IN NOTE: ${this.state.arrTagsInNote}`);
    if(this.state.idTagsNote !=[]) {
      //console.log('mistate');
      let array = [];
      this.state.idTagsNote.map((element) => {
        if(this.state.arrTagsInNote != ''){
          //console.log('estoy en undefined de arrtagsinnote')
          const objectTag = this.state.arrTagsInNote.find(e => e._id == element);
          //console.log(objectTag);
          array.push(objectTag) ;
        }
        else {
          //console.log('NO estoy en undefined de arrtagsinnote')
          const objectTag = this.props.stateApp.allMyTags.find(e => e._id == element);
          //console.log(objectTag);
          array.push(objectTag) ;
      }
      });
      this.state.arrTagsInNote=array;
      this.setState({ arrTagsInNote: array });
    } else {
      //console.log('stateapp');
      let array = [];
      this.props.stateApp.idTags.map((element) => {
        const objectTag = this.props.stateApp.allMyTags.find(e => e._id === element);
        array.push(objectTag) ;
      });
      this.state.arrTagsInNote=array;
      this.setState({ arrTagsInNote: array });
    }
  }
  //If the tag is new (first saves the tag in the db) or is already in the db, it saves the id ot he tag 
  //in the idTags ot the actual note, and when save or update is called the idtags can be send
  //TO DO REFACTOR METHOD 
  insertTaginArray(nameTag, color) {
    let createArray=this.state.arrTagsInNote;
    let idTagCreated=-1;
    if(!this.tagAlreadyExists(nameTag)) {
      const newTag = { 'name': nameTag, 'color':color };
      Promise.all([
        axios.post('http://localhost:3000/api/tags', newTag)      
      ]).then((values) => {
        idTagCreated=values[0].data._id;
        const objC = {'name':nameTag,'color':color,'_id':idTagCreated}
        createArray.push(objC);
        //console.log(createArray);
        this.setState({ arrTagsInNote: createArray });
        //updateIds
        let arrayIds=[];
        createArray.map((element) => { 
          if(element!=undefined){
            //console.log(element._id);
            arrayIds.push(element._id)
          }
        });
        //ids
        this.updateIdTagsNote(arrayIds);
      });
    } else {
      const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag); 
      //console.log(objectTag);
      createArray.push(objectTag);
    }
    //console.log(createArray);
    this.setState({arrTagsInNote:createArray});
    //updateIds
    let arrayIds=[];
    createArray.map((element) => { 
      if(element!=undefined){
        //console.log(element._id);
        arrayIds.push(element._id)
      }
    });
    //ids
    this.updateIdTagsNote(arrayIds);
  }
  //Gets the id of the tag by the name of the tag
  getTagIdByName(nameTag) {
    let idTag =-1;
    const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag);
    if(objectTag!=undefined){
      idTag=objectTag._id;
    }
    return idTag;
  }
  //Checks if the tag already exists
  tagAlreadyExists(nameTag) {
    const objectTag = this.props.stateApp.allMyTags.find(e => e.name === nameTag);
    if(objectTag!=undefined){
      return true;
    } else {
      return false;
    }
  }
  //Delete the tag from the idTags of the actual note
  deleteTagFromNote(idTag) {
    let array = this.state.idTagsNote;
    const index = array.findIndex(a => a==idTag);
    array.splice(index,1);
    this.state.idTagsNote=array;
    this.setState({ idTagsNote: array });
    this.fillTagsToshow();
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
        deleteTagFromNote={ this.deleteTagFromNote.bind(this) }
      />
    );
  }
}

module.exports = EditorNotesContainer;
