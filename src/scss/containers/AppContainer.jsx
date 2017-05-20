import React from 'react';

const NavMenu = require('../components/navMenu/NavMenu');
const EditorNotes = require('../components/editorNotes/EditorNotes');
const Notebooks = require('../components/notebooks/Notebooks');
const Tags = require('../components/tags/Tags');

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-1 cols'>
          <NavMenu />
        </div>
        <EditorNotes />
        <Notebooks />
        <Tags />
      </div>
    );
  }
}

module.exports = AppContainer;
