import React from 'react';
import './_nav-menu.scss';

const NavMenu = React.createClass({
  //Calls to show the modal editor of notes
  showNotes() {
    this.props.showEditorNotes();
  },
  //Calls to show the modal of notebooks
  showNotebooks() {
    this.props.showNotebooks();
  },
  //Calls to show the modal tags
  showTags() {
    this.props.showTags();
  },
  render() {
    return (
      <nav className='section sideNav'>
        <ul>
          <li>
            <button className='sideNav__button' id='user'>
              <img className='sideNav__image' src='../iconos/user-3.svg' title='User configurations' />
            </button>
          </li>
          <li>
            <button className='sideNav__button' id='buttonNote' onClick={ this.showNotes }>
              <img className='sideNav__image' src='../iconos/file.svg' title='New note' />
            </button>
          </li>
          <li>
            <button className='sideNav__button' id='buttonNotebook' onClick={ this.showNotebooks } >
              <img className='sideNav__image' src='../iconos/agenda.svg' title='Notebooks' />
            </button>
          </li>
          <li>
            <button className='sideNav__button' id='buttonTag' onClick={ this.showTags } >
              <img className='sideNav__image' src='../iconos/tag.svg' title='Tags' />
            </button>
          </li>
        </ul>
      </nav>
    );
  },
});

module.exports = NavMenu;
