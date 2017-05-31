import React from 'react';
import './_subMenu-editorNotes.scss';

const Option = require('../dropDown/Option');

const preload = '../src/images/';

const SubMenuEditorNotes = React.createClass({
  handleChange(event) {
    const i = event.currentTarget.selectedIndex;
    const notebookIndex = event.currentTarget[i].value;
    //console.log(indexDropDown);
    //console.log('INDEX SELECCIONADO:');
    //console.log(notebookIndex);
    this.props.updateIdNotebookNote(notebookIndex);
  },
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      const nameTag = inputTag.value;
      const color='0';
      console.log(nameTag);      
      this.props.insertTaginArray(nameTag,color);
      inputTag.value='';
    }
  },
  render() {
    const { allMyNotebooks, allMyTags } = this.props.stateApp;
    const { idNotebook } = this.props.stateApp;
    const { idNotebookNote, idTagsNote, arrTagsInNote, arrNewTagsInNote } = this.props.infoEditorNote;
    //console.log(idNotebookNote);
    return (
       <nav className='navEditor'>
            <ul className='navEditor__ul section'>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src={ `${preload}agenda.svg` } title='Notebook' />
                </button>
                </li>
                <li>
                <select className='navEditor__dropdown' value={ idNotebookNote } onChange={ this.handleChange } >
                  <option value={ 0 } >Select</option>
                  {allMyNotebooks.map((show) => {
                    return (
                      <Option key={ show._id } show={ show } />
                    );
                  })
                  },
                </select>
                </li>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src={ `${preload}tag.svg` } title='Tags' />
                </button>
                </li>
                <li>
                  <input id='inputTag' className='navEditor__input' type='text' placeholder='Tag' onKeyDown={ this.handleKeyPress } />
                </li>
                <li>
                  <div className='row section section--display'>
                    {arrTagsInNote.map((tag) => {
                        if(tag!=undefined) {
                          console.log(tag);
                          if(tag._id ==undefined){
                            const objectTag = allMyTags.find(e => e.name === tag.name);
                            const nameTag = objectTag.name;
                            return (
                              <div className={`circle circle--margin color${tag.color}` } title={nameTag} ></div> 
                            )
                          } else{
                          const objectTag = allMyTags.find(e => e._id === tag._id);
                          const nameTag = objectTag.name;
                          return (
                              <div key={tag._id} className={`circle circle--margin color${tag.color}` } title={nameTag} ></div> 
                          )
                        }
                    }
                    })
                    }
                  </div>
                </li>
            </ul>
        </nav>
    );
  },
});

module.exports = SubMenuEditorNotes;
