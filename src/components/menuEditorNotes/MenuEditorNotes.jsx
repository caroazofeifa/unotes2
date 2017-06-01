import React from 'react';
import './_menu-editorNotes.scss';

const preload = '../src/images/';

class MenuEditorNotes extends React.Component{
  //gets the event when the title is changed (input)
  handleChange(event) {
    const title = event.currentTarget.value;
    this.props.updateTitleNote(title);
  }
  //calls to save the method note
  saveNote() {
    this.props.saveNote();
  }
  //calls to delete note, sends the id of the note 
  deleteNote() {
    this.props.deleteNote( this.props.infoEditorNote.idNote );
  }
  render() {
    const { titleNote } = this.props.infoEditorNote;
    return (
        <nav className='section navNote'>
            <ul className='navNote__ul'>
                <li>
                <input className='navNote__input' id='nameNote' type='text' placeholder='Title' value={ titleNote } onChange={ this.handleChange } />
                </li>
                <li>
                <button className='navNote__button' href='#' onClick={ this.saveNote } >
                    <img className='navNote__image' src={ `${preload}diskette.svg` } title='Information' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src={ `${preload}user-2.svg` } title='Add contribuitor' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src={ `${preload}send.svg` } title='Send' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#' onClick={ this.deleteNote } >
                    <img className='navNote__image' src={ `${preload}delete.svg` } title='Delete' />
                </button>
                </li>
            </ul>
        </nav>
    );
  }
};

module.exports = MenuEditorNotes;
