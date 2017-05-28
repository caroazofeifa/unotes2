import React from 'react';
import './_notebooks.scss';

const preload = '../src/images/';

const NotebookLi = React.createClass({
  deleteNotebook() {
    this.props.deleteNotebook(this.props.show._id);
  },
  render() {
    const { name, } = this.props.show;
    return (
      <div className='col-md-12 col--width'>
        <li className='sectionFile__list'>
          <div className='row sectionFile__li'>
            <div className='col-md-5 col--width'>
              <h6 suppressContentEditableWarning contentEditable='true' id='inputName'>{name}</h6>
            </div>
            <div className='col-md-5 col--width'>
              <button className='sectionFile__button' href='#' id='buttonEditar'>
                <img id='imgEditar' className='sectionFile__image' src={ `${preload}pencil.svg` } title='Edit' />
              </button>
              <button className='sectionFile__button' href='#'>
                <img className='sectionFile__image' src={ `${preload}file.svg` } title='New note' />
              </button>
              <button className='sectionFile__button' href='#' onClick={ this.deleteNotebook }>
                <img className='sectionFile__image' src={ `${preload}delete.svg` } title='Delete' />
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  },
});

module.exports = NotebookLi;
