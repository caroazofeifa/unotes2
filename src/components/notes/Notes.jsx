import React from 'react';
import './_notes.scss';

const CardNotes = require('../cardNotes/CardNotes');

let i = 0;

const Notes = React.createClass({
  render() {
    const { indexSelectedNotebook } = this.props.stateNotes;
    const { allMyNotes } = this.props.stateApp;
    const arr = [];
    //Gets the notes that belong to the notebook with de id of indexSelectedNotebook
    //TO DO: change to filter
    for (i = 0; i < allMyNotes.length; i++) {
      if (allMyNotes[i].idNotebook === indexSelectedNotebook) {
        arr.push(allMyNotes[i]);
      }
    }
    return (
      <section className='notes'>
        <div className='row' id='thumbnails'>
          {arr.map((show) => (
              <CardNotes show={ show } key={ show.idNote } editNote={ this.props.editNote } />
            ))}
        </div>
      </section>
    );
  },
});

module.exports = Notes;
