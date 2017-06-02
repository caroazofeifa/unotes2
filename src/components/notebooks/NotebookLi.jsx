import React from 'react';
import './_notebooks.scss';

const preload = '../src/images/';

class NotebookLi extends React.Component{
  constructor(props) {
    super(props);
    this.deleteNotebook=this.deleteNotebook.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    // this.openEditorNotes=this.openEditorNotes.bind(this);
  }
  deleteNotebook() {
    this.props.deleteNotebook(this.props.show._id);
  }
  handleChange(event) {
    const nameInput = event.currentTarget.value;
    this.props.updateNameNotebookLi(nameInput);
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      //console.log(' modificar nota');
      this.props.updateNotebook(this.props.show._id);
    }
  }
  // openEditorNotes (event) {
  //   console.log('open')
  //   this.props.showFromNotebook();
  //   this.props.updateIdNotebook(this.props.show._id);
  // }
  render() {
    const { nameNotebook } = this.props.stateNotebook;
    const { name } = this.props.stateNotebookLi;
    return (
      <div className='col-md-12' >
        <li className='sectionFile__list'>
          <div className='row sectionFile__li'>
            <div className='col-md-5 col--widthI'>
              <input className='sectionFile__input--list' value={ name } id='inputName' type='text' placeholder='Name' onKeyDown={ this.handleKeyPress } onChange={ this.handleChange } />
            </div>
            <div className='col-md-5 col--widthD'>
              {/*<button className='sectionFile__button' href='#' onClick={ this.openEditorNotes } >
                <img className='sectionFile__image' src={ `${preload}file.svg` } title='New note' />
              </button>*/}
              <button className='sectionFile__button' href='#' onClick={ this.deleteNotebook }>
                <img className='sectionFile__image' src={ `${preload}delete.svg` } title='Delete' />
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
};

module.exports = NotebookLi;
