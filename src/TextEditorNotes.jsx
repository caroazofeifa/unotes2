import './scss/pages/_text-editorNotes.scss';

const React = require('react');

const TextEditorNotes = React.createClass({
  render() {
    return (
        <section className='textArea'>
            <textarea className='textArea__input' type='text' rows='15' id='contentNote' placeholder='Start your note here...' />
        </section>
    );
  },
});

module.exports = TextEditorNotes;
