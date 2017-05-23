import React from 'react';
import './_editorNotes.scss';

const MenuEditorNotes = require('../menuEditorNotes/MenuEditorNotes');
const SubMenuEditorNotes = require('../subMenuEditor/SubMenuEditorNotes');
const TextEditorNotes = require('../textEditor/TextEditorNotes');

const EditorNotes = React.createClass({
  render() {
    return (
      <section id='notesModal' className={ this.props.showEditorNotes.editorNotes } >
        <div className='row'>
          <div className='col-md-12'>
            <MenuEditorNotes />
          </div>
          <div className='col-md-12'>
            <SubMenuEditorNotes />
          </div>
          <div className='col-md-12'>
            <TextEditorNotes />
          </div>
        </div>
      </section>
    );
  },
});

module.exports = EditorNotes;
