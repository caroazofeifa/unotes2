import React from 'react';
import './_subMenu-editorNotes.scss';

const Option = require('../dropDown/Option');

const preload = '../src/images/';

const SubMenuEditorNotes = React.createClass({
  handleChange(event) {
    const i = event.currentTarget.selectedIndex;
    const notebookIndex = event.currentTarget[i].value;
    //console.log(indexDropDown);
    //console.log('INDEX SELECCIONADO:');
    //console.log(notebookIndex);
    this.props.updateIdNotebookNote(notebookIndex);
  },
  render() {
    const { allMyNotebooks } = this.props.stateApp;
    const { idNotebookNote } = this.props.infoEditorNote;
    return (
       <nav className='navEditor'>
            <ul className='navEditor__ul section'>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src={ `${preload}agenda.svg` } title='Notebook' />
                </button>
                </li>
                <li>
                <select className='navEditor__dropdown' value={ idNotebookNote } onChange={ this.handleChange } >
                  <option value={ 0 } >Select</option>
                  {allMyNotebooks.map((show) => {
                    return (
                      <Option key={ show._id } show={ show } />
                    );
                  })
                  },
                </select>
                </li>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src={ `${preload}tag.svg` } title='Tags' />
                </button>
                </li>
                <li>
                <input className='navEditor__input' type='text' placeholder='Tag' />
                </li>
            </ul>
        </nav>
    );
  },
});

module.exports = SubMenuEditorNotes;
