import React from 'react';
import './_nav-menu.scss';

const reactRouter = require('react-router-dom');
// const Route = reactRouter.Route;
// const Switch = reactRouter.Switch;
const Link = reactRouter.Link;
// const About = <h1>hola</h1>;
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
              <img className='sideNav__image' src='../iconos/user-3.svg' title='User configurations' />
            </button>
            </Link>
          </li>
            <li>
              <Link to='/newNote'>
              <button className='sideNav__button' id='buttonNote' onClick={ this.showNotes }>
                <img className='sideNav__image' src='../iconos/file.svg' title='New note' />
              </button>
              </Link>
            </li>
          <li>
            <Link to='newNotebook'>
            <button className='sideNav__button' id='buttonNotebook' onClick={ this.showNotebooks } >
              <img className='sideNav__image' src='../iconos/agenda.svg' title='Notebooks' />
            </button>
            </Link>
          </li>
          <li>
            <Link to='/newTag'>
            <button className='sideNav__button' id='buttonTag' onClick={ this.showTags } >
              <img className='sideNav__image' src='../iconos/tag.svg' title='Tags' />
            </button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  },
});

module.exports = NavMenu;
