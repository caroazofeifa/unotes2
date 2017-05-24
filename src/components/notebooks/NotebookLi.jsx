import React from 'react';
import './_notebooks.scss';

const NotebookLi = React.createClass({
  render() {
    const { name } = this.props.show;
    return (
      <div className='col-md-12'>
        <li className='sectionFile__list'>
          <div className='row sectionFile__li'>
            <div className='col-md-5'>
              <h6 suppressContentEditableWarning contentEditable='true' id='inputName'>{name}</h6>
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
      </div>
    );
  },
});

module.exports = NotebookLi;
