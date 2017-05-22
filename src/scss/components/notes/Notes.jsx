import React from 'react';
import './_notes.scss';

const CardNotes = require('../cardNotes/CardNotes');

let i = 0;

const Notes = React.createClass({
  render() {
    //console.log('Folder: ' + this.props.propFolder.folderIndex);
    //console.log('Nota: ' + this.props.show[i].idNotebook);
    const arr = [];
    for (i = 0; i < this.props.show.length; i++) {
      if (this.props.show[i].idNotebook === this.props.propFolder.folderIndex) {
        arr.push(this.props.show[i]);
        //console.log(this.props.show[i]);
      }
    }
    return (
      <section className='section notes'>
        <div className='row' id='thumbnails'>
          {arr.map((show) => (
              <CardNotes show={ show } key={ show.idNote } />
            ))}
        </div>
      </section>
    );
  },
});

module.exports = Notes;
