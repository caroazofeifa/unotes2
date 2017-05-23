import React from 'react';
import './_dropDown.scss';

const Option = require('./Option');

const DropDown = React.createClass({
  //Gets the index/value selected from the dropDrown and sends it to the parrent
  handleChange(event) {
    const x = event.currentTarget.selectedIndex;
    const folderIndex = event.currentTarget[x].value;
    this.props.selectFolder(folderIndex);
  },
  render() {
    const { allMyNotebooks } = this.props.showData;
    return (
      <section className='section notesDropDown'>
        <select className='notesDropDown__dropdown' onChange={ this.handleChange } >
          {allMyNotebooks.map((show) => {
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
