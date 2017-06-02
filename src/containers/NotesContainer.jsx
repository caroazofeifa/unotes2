import React from 'react';

const DropDown = require('../components/dropDown/DropDown');
const Notes = require('../components/notes/Notes');

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSelectedNotebook: 0, 
    };
    this.changeNotebook=this.changeNotebook;
  }
  //Set the index of the folder/notebook selected in the dropDown
  changeNotebook(notebookI) {
    this.setState({ indexSelectedNotebook: notebookI });
    //console.log(`Id notebook: ${notebookI}`);
  }
  render() {
    const { allMyNotebooks } = this.props.stateApp;
    return (
      <div className='col-md-11'>
        <DropDown
          stateApp={ this.props.stateApp }
          changeNotebook={ this.changeNotebook.bind(this) }
          stateNotes={ this.state }
        />
        <Notes
          stateApp={ this.props.stateApp }
          stateNotes={ this.state }
          editNote={ this.props.editNote }
          deleteNote={ this.props.deleteNote }
          setEditing={ this.props.setEditing }
        />
      </div>
    );
  }
}

module.exports = NotesContainer;
