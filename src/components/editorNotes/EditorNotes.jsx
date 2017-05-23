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
          <div className='col-md-12' >
            <MenuEditorNotes editNote={ this.props.showEditorNotes } />
          </div>
          <div className='col-md-12'>
            <SubMenuEditorNotes editNote={ this.props.showEditorNotes } />
          </div>
          <div className='col-md-12'>
            <TextEditorNotes editNote={ this.props.showEditorNotes } />
          </div>
        </div>
      </section>
    );
  },
});

module.exports = EditorNotes;
