import React from 'react';
import './_text-editorNotes.scss';

const TextEditorNotes = React.createClass({
  render() {
    const { description } = this.props.stateApp;
    return (
        <section className='textArea'>
          <textarea className='textArea__input' type='text' rows='15' id='contentNote' placeholder='Start your note here...' value={ description } />
        </section>
    );
  },
});

module.exports = TextEditorNotes;
