import React from 'react';
import './_text-editorNotes.scss';

class TextEditorNotes extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  //gets the event when the description is changed (text area)
  handleChange(event) {
    const desc = event.currentTarget.value;
    this.props.updateDescriptionNote(desc);
  }
  render() {
    const { descriptionNote } = this.props.infoEditorNote;
    return (
        <section className='textArea'>
          <textarea className='textArea__input' type='text' rows='15' id='contentNote' placeholder='Start your note here...' value={ descriptionNote } onChange={ this.handleChange } />
        </section>
    );
  }
};

module.exports = TextEditorNotes;
