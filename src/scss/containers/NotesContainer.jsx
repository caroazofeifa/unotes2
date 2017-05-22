import React from 'react';
import preload from '../../../public/data.json';

const DropDown = require('../components/dropDown/DropDown');
const Notes = require('../components/notes/Notes');

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: '-',
      folderIndex: '-1',
    };
  }
  changeFolder(folderI) {
    this.setState({ folderIndex: folderI });
  }
  render() {
    return (
      <div className='col-md-11'>
        <DropDown selectFolder={ this.changeFolder.bind(this) } />
        <Notes show={ preload.notes } propFolder={ this.state } />
      </div>
    );
  }
}

module.exports = NotesContainer;
