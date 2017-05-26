import React from 'react';
import './_text-editorNotes.scss';

const TextEditorNotes = React.createClass({
  handleChange(event) {
    const desc = event.currentTarget.value;
    console.log(desc);
    this.props.updateDescriptionNote(desc);
  },
  render() {
    const { descriptionNote } = this.props.infoEditorNote;
    return (
        <section className='textArea'>
          <textarea className='textArea__input' type='text' rows='15' id='contentNote' placeholder='Start your note here...' value={ descriptionNote } onChange={ this.handleChange } />
        </section>
    );
  },
});

module.exports = TextEditorNotes;
