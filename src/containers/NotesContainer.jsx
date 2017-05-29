import React from 'react';

const DropDown = require('../components/dropDown/DropDown');
const Notes = require('../components/notes/Notes');

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSelectedNotebook: 0, //This id should be 0 or -1?
    };
  }
  //Before component is mounted
  componentWillMount() {
    console.log(`ALL MY NOTEBOOKS: ${this.props.stateApp.allMyNotebooks}`);
    //this.setState({ indexSelectedNotebook: this.props.stateApp.allMyNotebooks[0]._id });
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
        {/*1.State app: all data from appContainer
        2.StateDropDown: index of the selected notebook
        3.editNote: function in appContainer to select a notebook
        4.changeNotebook: change its own id of notebook (state)*/}
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
