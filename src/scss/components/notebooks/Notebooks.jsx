import React from 'react';
import './_notebooks.scss';

const Notebooks = React.createClass({
  render() {
    return (
        <section id='sectionFile' className={ this.props.showNotebooks.notebook } >
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
          <ul id='notebooksList' className='notebooksList'>
            <li className='sectionFile__list'>
              <div className='row sectionFile__li'>
                <div className='col-md-6'>
                  <h6 suppressContentEditableWarning contentEditable='true' id='inputName'>BrainStation</h6>
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
