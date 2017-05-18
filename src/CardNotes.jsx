import React from 'react';
import './scss/pages/_card-notes.scss';

const CardNotes = React.createClass({
  render() {
    const { title, description } = this.props.show;
    return (
      <div className='col-md-3'>
        <div className='thumbnail'>
          <div className='caption'>
            <h3 className='title--shorter'>{title}</h3>
            <p className='p--shorter'>{description}</p>
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
    );
  },
});

module.exports = CardNotes;
