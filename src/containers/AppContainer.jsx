import React from 'react';

const NavMenu = require('../components/navMenu/NavMenu');
const EditorNotes = require('../components/editorNotes/EditorNotes');
const Notebooks = require('../components/notebooks/Notebooks');
const Tags = require('../components/tags/Tags');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      editorNotes: 'notesModal',
      showNotebook: false,
      notebook: 'sectionFile',
      showTag: false,
      tag: 'tagFile',
    };
  }
  showEditorNotes() {
    if (this.state.showEditor) {
      this.setState({ showEditor: false });
    } else {
      this.setState({ showEditor: true });
    }
  }
  showNotebooks() {
    if (this.state.showNotebook) {
      this.setState({ showNotebook: false });
    } else {
      this.setState({ showNotebook: true });
    }
  }
  showTags() {
    if (this.state.showTag) {
      this.setState({ showTag: false });
    } else {
      this.setState({ showTag: true });
    }
  }
  render() {
    if (this.state.showEditor) {
      this.state.editorNotes = 'notesModal--show';
    } else {
      this.state.editorNotes = 'notesModal';
    }
    if (this.state.showNotebook) {
      this.state.notebook = 'sectionFile--show';
    } else {
      this.state.notebook = 'sectionFile';
    }
    if (this.state.showTag) {
      this.state.tag = 'tagFile--show';
    } else {
      this.state.tag = 'tagFile';
    }
    return (
      <div>
        <div className='col-md-1 cols'>
          <NavMenu showEditorNotes={ this.showEditorNotes.bind(this) } showNotebooks={ this.showNotebooks.bind(this) } showTags={ this.showTags.bind(this) } />
        </div>
        <EditorNotes showEditorNotes={ this.state } />
        <Notebooks showNotebooks={ this.state } />
        <Tags showTags={ this.state } />
      </div>
    );
  }
}

module.exports = AppContainer;
