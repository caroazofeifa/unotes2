import React from 'react';

const DropDown = require('../components/dropDown/DropDown');
const Notes = require('../components/notes/Notes');

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderIndex: '1', //This id should be 0 or -1?
    };
  }
  //Set the index of the folder/notebook selected in the dropDown
  changeFolder(folderI) {
    this.setState({ folderIndex: folderI });
  }
  render() {
    return (
      <div className='col-md-11'>
        <DropDown showData={ this.props.showData } propFolder={ this.state } editNote={ this.props.editNote } selectFolder={ this.changeFolder.bind(this) } />
        <Notes showData={ this.props.showData } propFolder={ this.state } editNote={ this.props.editNote } />
      </div>
    );
  }
}

module.exports = NotesContainer;
