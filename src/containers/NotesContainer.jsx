import React from 'react';
import axios from 'axios';

const DropDown = require('../components/dropDown/DropDown');
const Notes = require('../components/notes/Notes');

const serverNotes = 'http://localhost:3000/notes';
const serverNotebooks = 'http://localhost:3000/notebooks';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderIndex: '1', //This id should be 0 or -1?
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
  //Set the index of the folder/notebook selected in the dropDown
  changeFolder(folderI) {
    this.setState({ folderIndex: folderI });
  }
  render() {
    return (
      <div className='col-md-11'>
        <DropDown propFolder={ this.state } selectFolder={ this.changeFolder.bind(this) } />
        <Notes propFolder={ this.state } />
      </div>
    );
  }
}

module.exports = NotesContainer;
