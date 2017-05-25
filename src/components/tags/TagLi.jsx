import React from 'react';
import './_tags.scss';

const preload = '../src/images/';

const TagLi = React.createClass({
  render() {
    const { name } = this.props.show;
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
                <img className='sectionFile__image' src={ `${preload}file.svg` } title='New tag' />
              </button>
              <button className='sectionFile__button' href='#'>
                <img className='sectionFile__image' src={ `${preload}delete.svg` } title='Delete' />
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  },
});

module.exports = TagLi;
