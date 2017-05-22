import React from 'react';
//import preload from '../../../public/data.json';

const DropDown = require('../components/dropDown/DropDown');
const Notes = require('../components/notes/Notes');

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folder: 'Ulacit',
    };
  }
  changeFolder(folderI) {
    this.setState({ folder: folderI });
  }
  render() {
    return (
      <div className='col-md-11'>
        <DropDown selectFolder={ this.changeFolder.bind(this) } />
        { /*preload.notes.map((show) => {
          return (
            <Notes propFolder={ this.state } key={ show.idNote } myNote={ show } />
          );
        })
        */ },
        <Notes propFolder={ this.state } />
      </div>
    );
  }
}

module.exports = NotesContainer;
