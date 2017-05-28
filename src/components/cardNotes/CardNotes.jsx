import React from 'react';
import './_card-notes.scss';

const reactRouter = require('react-router-dom');

const Link = reactRouter.Link;
const preload = '../src/images/';

const CardNotes = React.createClass({
  editNote() {
    this.props.editNote(this.props.show.title, this.props.show.description, this.props.show._id, this.props.show.idNotebook);
  },
  deleteNote() {
    this.props.deleteNote( this.props.show._id );
  },
  render() {
    const { title, description } = this.props.show;
    //console.log(`Llega la nota: ${title} ${description}`);
    return (
      <div className='col-md-3'>
        <div className='thumbnail'>
          <div className='caption'>
            <h3 className='title--shorter'>{title}</h3>
            <p className='p--shorter'>{description}</p>
            <button className='note__button' href='#' id='buttonLib'>
              <img className='note__image' src={ `${preload}send.svg` } title='Send' />
            </button>
            <Link to='/NoteEditor'>
              <button className='note__button' href='#' id='buttonLib' onClick={ this.editNote } >
                <img className='note__image' src={ `${preload}pencil.svg` } title='Edit' />
              </button>
            </Link>
            <button className='note__button' href='#' id='buttonLib' onClick={ this.deleteNote } >
              <img className='note__image' src={ `${preload}delete.svg` } title='Delete' />
            </button>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = CardNotes;
