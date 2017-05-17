import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const DropDown = require('./DropDown');

const Notes = require('./Notes');

const EditorNotes = require('./EditorNotes');

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
          {/*<!--NOTAS-->*/}
            <div className='col-md-11'>
              <DropDown />
              <Notes />
            </div>
          {/*<!--TERMINA NOTAS-->*/}
        </div>
        {/*<!--CODIGO VIEJO-->*/}

        {/*<!--NOTA-->*/}
        <EditorNotes />
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
