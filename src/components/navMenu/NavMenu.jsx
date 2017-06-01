import React from 'react';
import './_nav-menu.scss';

const reactRouter = require('react-router-dom');

const Link = reactRouter.Link;
const preload = '../src/images/';

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
            <Link to='/'>
            <button className='sideNav__button' id='user'>
              <img className='sideNav__image' src={ `${preload}user-3.svg` } title='User configurations' />
            </button>
            </Link>
          </li>
            <li>
              <Link to='/NoteEditor'>
              <button className='sideNav__button' id='buttonNote' onClick={ this.showNotes } >
                <img className='sideNav__image' src={ `${preload}file.svg` } title='New note' />
              </button>
              </Link>
            </li>
          <li>
            <Link to='/Notebooks'>
            <button className='sideNav__button' id='buttonNotebook' onClick={ this.showNotebooks } >
              <img className='sideNav__image' src={ `${preload}agenda.svg` } title='Notebooks' />
            </button>
            </Link>
          </li>
          <li>
            <Link to='/Tags'>
            <button className='sideNav__button' id='buttonTag' onClick={ this.showTags } >
              <img className='sideNav__image' src={ `${preload}tag.svg` } title='Tags' />
            </button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  },
});

module.exports = NavMenu;
