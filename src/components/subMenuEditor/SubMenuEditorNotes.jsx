import React from 'react';
import './_subMenu-editorNotes.scss';

const Option = require('../dropDown/Option');

const preload = '../src/images/';

class SubMenuEditorNotes extends React.Component{
  //gets the event when the notebook is selected from the dropdown
  handleChange(event) {
    const i = event.currentTarget.selectedIndex;
    const notebookIndex = event.currentTarget[i].value;
    this.props.updateIdNotebookNote(notebookIndex);
  }
  //gets the event when enter is pressed (input tag)
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      const nameTag = inputTag.value;
      const color='0';
      this.props.insertTaginArray(nameTag,color);
      inputTag.value='';
    }
  }
  //calls to delete tag when the circle tag is selected
  deleteTag(event) {
    console.log(event.currentTarget.id);
    this.props.deleteTagFromNote(event.currentTarget.id);
  }
  render() {
    const { idNotebook, allMyNotebooks, allMyTags } = this.props.stateApp;
    const { idNotebookNote, idTagsNote, arrTagsInNote } = this.props.infoEditorNote;
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
                  <div className='row section section--displayCircles'>
                    {arrTagsInNote.map((tag) => {
                        if(tag!=undefined) {
                          if(tag._id == undefined){
                            console.log('UNDEFINED HERE!!');
                            const objectTag = arrTagsInNote.find(e => e.name === tag.name);
                            const nameTag = objectTag.name;
                            return (
                              <div className={`circle circle--margin color${tag.color}` } title={nameTag} ></div> 
                            )
                          } else{
                          const objectTag = arrTagsInNote.find(e => e._id === tag._id);
                          const nameTag = objectTag.name;
                          return (
                              <div key={tag._id} id={tag._id} className={`circle--deletable circle--margin color${tag.color}` } title={nameTag} onClick={ this.deleteTag }></div> 
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
  }
};

module.exports = SubMenuEditorNotes;
