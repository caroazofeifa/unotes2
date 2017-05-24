import React from 'react';
import './_notebooks.scss';

const NotebookLi = require('./NotebookLi');

const Notebooks = React.createClass({
  render() {
    const { notebook, allMyNotebooks } = this.props.stateApp;
    return (
      <section id='sectionFile' className={ notebook } >
        <div className='row'>
          <div className='col-md-11'>
            <h2>Notebooks</h2>
          </div>
        </div>
        <div className='row section'>
          <input className='form-control sectionFlile__input' type='search' placeholder='Search' />
          <button className='sectionFile__button sectionFile__button--margin' href='#' id='buttonEditar'>
            <img id='imgEditar' className='sectionFile__image' src='../iconos/search.svg' title='Search' />
          </button>
        </div>
        <div className='row section'>
          <div className='col-md-12 notebooksList'>
            <ul id='notebooksList'>
              {allMyNotebooks.map((show) => {
                return (
                  <NotebookLi key={ show.idNotebook } show={ show } />
                );
              })
              }
            </ul>
          </div>
        </div>
        <div className='row section'>
          <input className='form-control sectionFlile__input' type='text' id='inputNoteBook' placeholder='New notebook' />
          <button className='sectionFile__button sectionFile__button--margin' href='#' id='addNoteBook'>
            <img className='sectionFile__image' src='../iconos/add.svg' title='Add' />
          </button>
        </div>
      </section>
    );
  },
});

module.exports = Notebooks;
