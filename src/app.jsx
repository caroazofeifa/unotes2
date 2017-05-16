import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' id='mainView'>
          {/*<!--MENU AZUL-->*/}
          <div className='col-md-1 cols'>
            <nav className='section sideNav'>
              <ul>
                <li>
                  <button className='sideNav__button' id='user'>
                    <img className='sideNav__image' src='../iconos/user-3.svg' title='User configurations' />
                  </button>
                </li>
                <li>
                  <button className='sideNav__button' id='buttonNote'>
                    <img className='sideNav__image' src='../iconos/file.svg' title='New note' />
                  </button>
                </li>
                <li>
                  <button className='sideNav__button' id='buttonNotebook'>
                    <img className='sideNav__image' src='../iconos/agenda.svg' title='Notebooks' />
                  </button>
                </li>
                <li>
                  <button className='sideNav__button' id='buttonTag'>
                    <img className='sideNav__image' src='../iconos/tag.svg' title='Tags' />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/*<!--TERMINA MENU AZUL-->*/}
<div className='col-md-11'>
          {/*<!--NOTAS-->*/}

          <section className='section notesDropDown'>
            <div className='col-md-12 cols'>
              <div className='row'>
                <div className='col-md-12'>
                  <select className='notesDropDown__dropdown'>
                    <option value=''>BrainStation</option>
                    <option value=''>UCR</option>
                    <option value=''>ULACIT</option>
                  </select>
                  <button className='notesDropDrown__button' id='buttonTag'>
                    <img className='notesDropDrown__img' src='../iconos/icon.svg' title='UNotes' />
                  </button>
                </div>
              </div>
            </div>
          </section>


          <section className='section notes'>
            <div className='row' id='thumbnails'>
              <div className='col-md-3'>
                <div className='thumbnail'>
                  <div className='caption'>
                    <h3>Nota 1</h3>
                    <p className='p--shorter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum obcaecati, hic commodi modi, consequuntur,
                    sequi et incidunt necessitatibus, id ipsum reprehenderit inventore odio. Consequatur incidunt ipsam,
                    esse recusandae iste sunt.</p>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/send.svg' title='Send' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/pencil.svg' title='Edit' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/delete.svg' title='Delete' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='thumbnail'>
                  <div className='caption'>
                    <h3>Nota 2</h3>
                    <p className='p--shorter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum obcaecati, hic commodi modi, consequuntur,
                    sequi et incidunt necessitatibus, id ipsum reprehenderit inventore odio. Consequatur incidunt ipsam,
                    esse recusandae iste sunt.</p>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/send.svg' title='Send' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/pencil.svg' title='Edit' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/delete.svg' title='Delete' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='thumbnail'>
                  <div className='caption'>
                    <h3>Nota 3</h3>
                    <p className='p--shorter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum obcaecati, hic commodi modi, consequuntur,
                    sequi et incidunt necessitatibus, id ipsum reprehenderit inventore odio. Consequatur incidunt ipsam,
                    esse recusandae iste sunt.</p>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/send.svg' title='Send' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/pencil.svg' title='Edit' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/delete.svg' title='Delete' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='thumbnail'>
                  <div className='caption'>
                    <h3>Nota 4</h3>
                    <p className='p--shorter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum obcaecati, hic commodi modi, consequuntur,
                    sequi et incidunt necessitatibus, id ipsum reprehenderit inventore odio. Consequatur incidunt ipsam,
                    esse recusandae iste sunt.</p>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/send.svg' title='Send' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/pencil.svg' title='Edit' />
                    </button>
                    <button className='note__button' href='#' id='buttonLib'>
                      <img className='note__image' src='../iconos/delete.svg' title='Delete' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
        {/*<!--TERMINA NOTAS-->*/}

        {/*<!--CODIGO VIEJO-->*/}
        {/*<!--NOTA-->*/}
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
        {/*<!--TERMINA NOTA-->*/}

        {/*<!--MENU NOTEBOOKS-->*/}
        <section className='sectionFile' id='sectionFile'>
          <div className='row'>
            <div className='col-md-11'>
              <h2>Notebooks</h2>
            </div>
          </div>
          <div className='row section'>
            <input className='form-control' type='search' placeholder='Search' />
            <button className='sectionFile__button sectionFile__button--margin' href='#' id='buttonEditar'>
              <img id='imgEditar' className='sectionFile__image' src='../iconos/search.svg' title='Search' />
            </button>
          </div>
          <ul id='notebooksList' className='notebooksList'>
            <li className='sectionFile__list'>
              <div className='row sectionFile__li'>
                <div className='col-md-6'>
                  <h6 contenteditable='true' id='inputName'>BrainStation</h6>
                </div>
                <div className='col-md-7'>
                  <button className='sectionFile__button' href='#' id='buttonEditar'>
                    <img id='imgEditar' className='sectionFile__image' src='../iconos/pencil.svg' title='Edit' />
                  </button>
                  <button className='sectionFile__button' href='#'>
                    <img className='sectionFile__image' src='../iconos/file.svg' title='New note' />
                  </button>
                  <button className='sectionFile__button' href='#'>
                    <img className='sectionFile__image' src='../iconos/delete.svg' title='Delete' />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className='row section'>
            <input className='form-control' type='text' id='inputNoteBook' placeholder='New notebook' />
            <button className='sectionFile__button sectionFile__button--margin' href='#' id='addNoteBook'>
              <img className='sectionFile__image' src='../iconos/add.svg' title='Add' />
            </button>
          </div>
        </section>
        {/*<!--TERMINA MENU NOTEBOOK-->*/}

        {/*<!--TERMINA TAGS-->*/}
        {/*<!--AQUI DEBERIA EL DE TAGS-->*/}
        <section className='tagFile' id='tagFile'>
          <div className='row'>
            <div className='col-md-11'>
              <h2>Tags</h2>
            </div>
          </div>
          <div className='row section'>
            <input className='form-control' type='search' placeholder='Search' />
            <button className='tagFile__button tagFile__button--margin' href='#' id='buttonEditar'>
              <img id='imgEditar' className='tagFile__image' src='../iconos/search.svg' title='Search' />
            </button>
          </div>
          <ul id='tagList' className='tagsList'>
            <li className='tagFile__list'>
              <div className='row tagFile__li'>
                <div className='col-md-6'>
                  <h6 contenteditable='true' id='inputTag'>HTML</h6>
                </div>
                <div className='col-md-7'>
                  <button className='tagFile__button' href='#' id='buttonEditar'>
                    <img id='imgEditar' className='tagFile__image' src='../iconos/pencil.svg' title='Edit' />
                  </button>
                  <button className='tagFile__button' href='#'>
                    <img className='tagFile__image' src='../iconos/delete.svg' alt='Delete' />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className='row section'>
            <input className='form-control' type='text' id='inputNewTag' placeholder='New tags' />
            <button className='tagFile__button tagFile__button--margin' href='#' id='addTag'>
              <img className='tagFile__image' src='../iconos/add.svg' title='Add' />
            </button>
          </div>
        </section>
      </div>
    );
  },
});
render(<App />, document.getElementById('app'));
