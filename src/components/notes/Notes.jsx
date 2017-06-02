import React from 'react';
import './_notes.scss';

const CardNotes = require('../cardNotes/CardNotes');

let i = 0;

class Notes extends React.Component {
  render() {
    const { indexSelectedNotebook } = this.props.stateNotes;
    const { allMyNotes } = this.props.stateApp;
    let arr = allMyNotes;
    //Gets the notes that belong to the notebook with de id of indexSelectedNotebook
    if (indexSelectedNotebook != 0) {
      arr = arr.filter(e => {
        if (e.idNotebook == indexSelectedNotebook) {
          return true;
        } else {
          return false;
        }
      });
    }
    return (
      <section className='notes'>
        <div className='row' id='thumbnails'>
          {arr.map((show) => (
            <CardNotes
              show={ show }
              key={ show._id }
              editNote={ this.props.editNote }
              deleteNote={ this.props.deleteNote }
              setEditing={ this.props.setEditing }
            />
          ))}
        </div>
      </section>
    );
  }
};

module.exports = Notes;
