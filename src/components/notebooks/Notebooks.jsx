import React from 'react';
import './_notebooks.scss';

const NotebookLiContainer = require('../../containers/NotebookLiContainer');

const preload = '../src/images/';
class Notebooks extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.addNoteBook = this.addNoteBook.bind(this);
  }
  handleChange(event) {
    const name = event.currentTarget.value;
    this.props.updateNameNotebook(name);
  }
  addNoteBook() {
    this.props.addNotebookContainer();
    inputNoteBook.value = '';
  }
  handleChangeSearch(event) {
    const searchInput = event.currentTarget.value;
    this.props.updateSearchInput(searchInput);
  }
  render() {
    const { notebook, allMyNotebooks } = this.props.stateApp;
    const { searchInput } = this.props.stateNotebook;
    return (
      <section id='sectionFile' className={notebook} >
        <div className='row'>
          <div className='col-md-11'>
            <h2>Notebooks</h2>
          </div>
        </div>
        <div className='row section'>
          <input className='form-control sectionFile__input' type='search' placeholder='Search' onChange={this.handleChangeSearch} />
          <button className='sectionFile__button--margin' href='#' id='buttonEditar'>
            <img id='imgEditar' className='sectionFile__image' src={`${preload}search.svg`} title='Search' />
          </button>
        </div>
        <div className='row'>
          <div className='col-md-12 notebooksList--border'>
            <ul id='notebooksList' className='notebooksList'>
              {allMyNotebooks
                .filter((show) => show.name.toUpperCase().indexOf(searchInput.toUpperCase()) >= 0)
                .map((show) => (
                  <NotebookLiContainer
                    key={ show._id }
                    show={ show }
                    stateNotebook={ this.props.stateNotebook }
                    deleteNotebook={ this.props.deleteNotebook }
                    updateNameNotebook={ this.props.updateNameNotebook }
                    updateNotebook={ this.props.updateNotebook }
                    updateIdNotebook={ this.props.updateIdNotebook }
                    showFromNotebook={ this.props.showFromNotebook }
                  />
                ))
              }
            </ul>
          </div>
        </div>
        <div className='row section'>
          <input className='form-control sectionFile__input' type='text' id='inputNoteBook' placeholder='New notebook' onKeyDown={this.handleKeyPress} onChange={this.handleChange} />
          <button className='sectionFile__button--margin' href='#' id='addNoteBook' onClick={this.addNoteBook}>
            <img className='sectionFile__image' src={`${preload}add.svg`} title='Add' />
          </button>
        </div>
      </section>
    );
  }
};

module.exports = Notebooks;
