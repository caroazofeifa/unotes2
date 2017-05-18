import React from 'react';
import './scss/pages/_notes.scss';
import preload from '../public/data.json';

const CardNotes = require('./CardNotes');

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
