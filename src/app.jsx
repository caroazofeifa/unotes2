import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const NavMenu = require('./NavMenu');
const DropDown = require('./DropDown');
const Notes = require('./Notes');
const EditorNotes = require('./EditorNotes');
const Notebooks = require('./Notebooks');
const Tags = require('./Tags');

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
