import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const NavMenu = require('./NavMenu');
const DropDown = require('./DropDown');
const Notes = require('./Notes');
const EditorNotes = require('./EditorNotes');
const Notebooks = require('./Notebooks');

const App = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' id='mainView'>
          {/*<!--MENU AZUL-->*/}
          <div className='col-md-1 cols'>
            <NavMenu />
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
        <Notebooks />
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
