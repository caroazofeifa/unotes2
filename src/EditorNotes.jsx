const React = require('react');

const EditorNotes = React.createClass({
  render() {
    return (
        <section id='notesModal' className='notesModal'>
          <div className='row'>
            {/*<!--menu notas-->*/}
            <div className='col-md-12'>
              <nav className='section navNote'>
                <ul className='navNote__ul'>
                  <li>
                    <input className='form-control navNote__input' id='nameNote' type='text' placeholder='Title' />
                  </li>
                  <li>
                    <button className='navNote__button' href='#'>
                      <img className='navNote__image' src='../iconos/user-2.svg' title='Add contribuitor' />
                    </button>
                  </li>
                  <li>
                    <button className='navNote__button' a href='#'>
                      <img className='navNote__image' src='../iconos/send.svg' title='Send' />
                    </button>
                  </li>
                  <li>
                    <button className='navNote__button' href='#'>
                      <img className='navNote__image' src='../iconos/delete.svg' title='Delete' />
                    </button>
                  </li>
                  <li>
                    <button className='navNote__button' href='#'>
                      <img className='navNote__image' src='../iconos/info-button.svg' title='Information' />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            {/*<!--fin menu de notas-->*/}
            {/*<!--menu editor de notas-->*/}
            <div className='col-md-12'>
              <nav className='navEditor'>
                <ul className='navEditor__ul section'>
                  <li>
                    <button className='navEditor__button' href='#'>
                      <img className='navEditor__image' src='../iconos/agenda.svg' title='Notebook' />
                    </button>
                  </li>
                  <li>
                    <select className='navEditor__dropdown'>
                      <option value=''>BrainStation</option>
                      <option value=''>UCR</option>
                      <option value=''>ULACIT</option>
                    </select>
                  </li>
                  <li>
                    <button className='navEditor__button' href='#'>
                      <img className='navEditor__image' src='../iconos/tag.svg' title='Tags' />
                    </button>
                  </li>
                  <li>
                    <input className='navEditor__input form-control' type='text' placeholder='Tag' />
                  </li>
                </ul>
              </nav>
            </div>
            {/*<!--fin menu editor de notas-->*/}
            {/*<!--text area-->*/}
            <div className='row'>
              <div className='col-md-12'>
                <section className='textArea'>
                  <textarea className='textArea__input' type='text' rows='15' id='contentNote' placeholder='Start your note here...' />
                </section>
              </div>
            </div>
          </div>
          {/*<!--fin textarea-->*/}
        </section>
    );
  },
});

module.exports = EditorNotes;
