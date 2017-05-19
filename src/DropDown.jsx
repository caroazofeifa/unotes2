import React from 'react';
import './scss/pages/_dropDown.scss';

const DropDown = React.createClass({
  render() {
    return (
      <section className='section notesDropDown'>
        <select className='notesDropDown__dropdown'>
          <option value=''>BrainStation</option>
          <option value=''>UCR</option>
          <option value=''>ULACIT</option>
        </select>
        <button className='notesDropDrown__button' id='buttonTag'>
          <img className='notesDropDrown__img' src='../iconos/icon.svg' title='UNotes' />
        </button>
      </section>
    );
  },
});

module.exports = DropDown;
