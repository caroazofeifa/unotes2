import React from 'react';
import './_dropDown.scss';
import preload from '../../../../public/data.json';

const Option = require('./Option');

const DropDown = React.createClass({
  handleChange(event) {
    const x = event.currentTarget.selectedIndex;
    //console.log(event.currentTarget[x].value);
    const folderIndex = event.currentTarget[x].value;
    this.props.selectFolder(folderIndex);
  },
  render() {
    return (
      <section className='section notesDropDown'>
        <select className='notesDropDown__dropdown' onChange={ this.handleChange } >
          {preload.notebooks.map((show) => {
            return (
              <Option key={ show.idNotebook } show={ show } />
            );
          })
          },
        </select>
        <button className='notesDropDrown__button' id='buttonTag'>
          <img className='notesDropDrown__img' src='../iconos/icon.svg' title='UNotes' />
        </button>
      </section>
    );
  },
});

module.exports = DropDown;
