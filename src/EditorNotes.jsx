const React = require('react');
const MenuEditorNotes = require('./MenuEditorNotes');
const SubMenuEditorNotes = require('./MenuEditorNotes');
const TextEditorNotes = require('./TextEditorNotes');

const EditorNotes = React.createClass({
  render() {
    return (
        <section id='notesModal' className='notesModal'>
          <div className='row'>
            {/*<!--menu notas-->*/}
            <div className='col-md-12'>
              <MenuEditorNotes />
            </div>
            {/*<!--fin menu de notas-->*/}
            {/*<!--menu editor de notas-->*/}
            <div className='col-md-12'>
              <SubMenuEditorNotes />
            </div>
            {/*<!--fin menu editor de notas-->*/}
            {/*<!--text area-->*/}
            <div className='col-md-12'>
                <TextEditorNotes />
            </div>
          </div>
          {/*<!--fin textarea-->*/}
        </section>
    );
  },
});

module.exports = EditorNotes;
