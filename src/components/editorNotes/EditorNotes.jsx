import React from 'react';
import './_editorNotes.scss';

const MenuEditorNotes = require('../menuEditorNotes/MenuEditorNotes');
const SubMenuEditorNotes = require('../subMenuEditor/SubMenuEditorNotes');
const TextEditorNotes = require('../textEditor/TextEditorNotes');

const EditorNotes = React.createClass({
  render() {
    const { editorNotes } = this.props.stateApp;
    return (
      <section id='notesModal' className={ editorNotes } >
        <div className='row'>
          <div className='col-md-12' >
            <MenuEditorNotes stateApp={ this.props.stateApp } />
          </div>
          <div className='col-md-12'>
            <SubMenuEditorNotes stateApp={ this.props.stateApp } />
          </div>
          <div className='col-md-12'>
            <TextEditorNotes stateApp={ this.props.stateApp } />
          </div>
        </div>
      </section>
    );
  },
});

module.exports = EditorNotes;
