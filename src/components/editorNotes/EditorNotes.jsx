import React from 'react';
import './_editorNotes.scss';

const MenuEditorNotes = require('../menuEditorNotes/MenuEditorNotes');
const SubMenuEditorNotes = require('../subMenuEditor/SubMenuEditorNotes');
const TextEditorNotes = require('../textEditor/TextEditorNotes');

class EditorNotes extends React.Component{
  render() {
    const { editorNotes } = this.props.stateApp;
    return (
      <section id='notesModal' className={ editorNotes } >
        <div className='row'>
          <div className='col-md-12' >
            <MenuEditorNotes
              infoEditorNote={ this.props.infoEditorNote }
              stateApp={ this.props.stateApp }
              updateTitleNote={ this.props.updateTitleNote }
              saveNote={ this.props.saveNote }
              deleteNote={ this.props.deleteNote }
            />
          </div>
          <div className='col-md-12'>
            <SubMenuEditorNotes
              infoEditorNote={ this.props.infoEditorNote }
              stateApp={ this.props.stateApp }
              updateIdNotebookNote={ this.props.updateIdNotebookNote }
              insertTaginArray = { this.props.insertTaginArray }
              deleteTagFromNote ={ this.props.deleteTagFromNote }
            />
          </div>
          <div className='col-md-12'>
            <TextEditorNotes infoEditorNote={ this.props.infoEditorNote } stateApp={ this.props.stateApp } updateDescriptionNote={ this.props.updateDescriptionNote } />
          </div>
        </div>
      </section>
    );
  }
};

module.exports = EditorNotes;
