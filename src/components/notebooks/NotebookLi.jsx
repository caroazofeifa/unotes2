import React from 'react';
import './_notebooks.scss';

const preload = '../src/images/';

const NotebookLi = React.createClass({
  deleteNotebook() {
    this.props.deleteNotebook(this.props.show._id);
  },
  handleChange(event) {
    const nameNotebook = event.currentTarget.value;
    //console.log(nameNotebook);
    this.props.updateNameNotebook(nameNotebook);
  },
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log(' ENTER validate');
      this.props.updateNotebook(this.props.show._id);
    }
  },
  render() {
    const { name, _id } = this.props.show;
    const { nameNotebook } = this.props.stateNotebook;
    return (
      <div className='col-md-12 col--width' >
        <li className='sectionFile__list'>
          <div className='row sectionFile__li'>
            <div className='col-md-5 col--width'>
              <input className='form-control sectionFlile__input' value={ nameNotebook } id='inputName' type='text' placeholder='Search' onKeyDown={ this.handleKeyPress } onChange={ this.handleChange} />
            </div>
            <div className='col-md-5 col--width'>
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
