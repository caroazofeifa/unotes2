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
          {preload.shows.map((show) => {
            return (
              <CardNotes key={ show.imdbID } show={ show } />
            );
          })},
        </div>
      </section>
    );
  },
});

module.exports = Notes;


/*import React from 'react';
import './_notes.scss';
import preload from '../../../../public/unotes.json';

const CardNotes = require('../cardNotes/CardNotes');

const Notes = React.createClass({
  render() {
    return (
      <section className='section notes'>
        <div className='row' id='thumbnails'>
          {preload.notebooks.note.map((note) => {
            return (
              <CardNotes key={ note.idNote } note={ note } />
            );
          })
          }
        </div>
      </section>
    );
  },
});

module.exports = Notes;*/


/*import React from 'react';
import './_notes.scss';
import preload from '../../../../public/unotes.json';

const CardNotes = require('../cardNotes/CardNotes');

const Notes = React.createClass({
  render() {
    return (
      <div>
      {preload.notebooksmap((notes) => {
        return (
          render () {
            return {
              <div>
              preload.notes.map ((nota) => {
                <CardNotes key={ nota.idNote } nota={ nota } />
              })
              </div>
            }
          }
        );
      })
      </div>
    }
    );
  },
});

module.exports = Notes;*/
