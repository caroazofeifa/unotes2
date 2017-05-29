import React from 'react';
import './_dropDown.scss';

const Option = require('./Option');

const preload = '../src/images/';

const DropDown = React.createClass({
  //Gets the index/value selected from the dropDrown and sends it to the parrent
  handleChange(event) {
    //gets the the selected value from the dropdown
    const i = event.currentTarget.selectedIndex;
    const notebookIndex = event.currentTarget[i].value;
    //console.log(`Index seleccionado: ${i}`);
    //console.log(`Nombre seleccionado: ${notebookIndex}`);
    this.props.changeNotebook(notebookIndex);
  },
  render() {
    const { allMyNotebooks } = this.props.stateApp;
    return (
      <section className='section notesDropDown'>
        <select className='notesDropDown__dropdown' onChange={ this.handleChange } >
          <option value={ 0 } >All</option>
          {
            allMyNotebooks.map((show) => {
              return (
                <Option key={ show._id } show={ show } />
              );
            })
          },
        </select>
        <button className='notesDropDrown__button' id='buttonTag'>
          <img className='notesDropDrown__img' src={ `${preload}icon.svg` } title='UNotes' />
        </button>
      </section>
    );
  },
});

module.exports = DropDown;
