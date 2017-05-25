import React from 'react';
import './_tags.scss';

const preload = '../src/images/';

const Tags = React.createClass({
  render() {
    return (
      <section id='tagFile' className={ this.props.showTags.tag } >
        <div className='row'>
          <div className='col-md-11'>
            <h2>Tags</h2>
          </div>
        </div>
        <div className='row section'>
          <input className='form-control tagFile__input' type='search' placeholder='Search' />
          <button className='tagFile__button tagFile__button--margin' href='#' id='buttonEditar'>
            <img id='imgEditar' className='tagFile__image' src={ `${preload}search.svg` } title='Search' />
          </button>
        </div>
        <ul id='tagList' className='tagsList'>
          <li className='tagFile__list'>
            <div className='row tagFile__li'>
              <div className='col-md-6'>
                <h6 suppressContentEditableWarning contentEditable='true' id='inputTag'>HTML</h6>
              </div>
              <div className='col-md-7'>
                <button className='tagFile__button' href='#' id='buttonEditar'>
                  <img id='imgEditar' className='tagFile__image' src={ `${preload}pencil.svg` } title='Edit' />
                </button>
                <button className='tagFile__button' href='#'>
                  <img className='tagFile__image' src={ `${preload}delete.svg` } alt='Delete' />
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div className='row section'>
          <input className='form-control tagFile__input' type='text' id='inputNewTag' placeholder='New tags' />
          <button className='tagFile__button tagFile__button--margin' href='#' id='addTag'>
            <img className='tagFile__image' src={ `${preload}add.svg` } title='Add' />
          </button>
        </div>
      </section>
    );
  },
});

module.exports = Tags;
