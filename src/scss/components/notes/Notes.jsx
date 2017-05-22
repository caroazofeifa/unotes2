import React from 'react';
import './_notes.scss';
import preload from '../../../../public/data.json';
// import preload from '/Users/isaiassalas/Documents/BrainStation/unotes2/public/data.json';
const CardNotes = require('../cardNotes/CardNotes');

const Notes = React.createClass({
  render() {
    return (
      <section className='section notes'>
        <div className='row' id='thumbnails'>
          {preload.notes.map((show) => {
            return (
              <CardNotes key={ show.idNote } show={ show } />
            );
          })
          },
        </div>
      </section>
    );
  },
});

module.exports = Notes;
