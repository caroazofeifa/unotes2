import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const NavMenu = require('./scss/components/navMenu/NavMenu');
const DropDown = require('./scss/components/dropDown/DropDown');
const Notes = require('./scss/components/notes/Notes');
const EditorNotes = require('./scss/components/editorNotes/EditorNotes');
const Notebooks = require('./scss/components/notebooks/Notebooks');
const Tags = require('./scss/components/tags/Tags');

const App = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' id='mainView'>
          <div className='col-md-1 cols'>
            <NavMenu />
          </div>
          <div className='col-md-11'>
              <DropDown />
              <Notes />
          </div>
        </div>
        <EditorNotes />
        <Notebooks />
        <Tags />
      </div>
    );
  },
});
render(<App />, document.getElementById('app'));
