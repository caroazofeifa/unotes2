import React from 'react';
import './_tags.scss';

const TagsLiContainer = require('../../containers/TagsLiContainer');

const preload = '../src/images/';
const Tags = React.createClass({
  handleChange(event) {
    const name = event.currentTarget.value;
    this.props.updateNameTag(name);
  },
  addTag() {
    console.log('BEF')
    console.log(this.props.stateApp.allMyTags);
    this.props.addTagContainer();
    console.log('AFT');
    console.log(this.props.stateApp.allMyTags);
    inputNewTag.value = '';
  },
  selectColor(event) {
    //console.log('Select color');
    //console.log(event.currentTarget.id);
    this.props.selectColor(event.currentTarget.id);
  },
  render() {
    const { tag, allMyTags } = this.props.stateApp;
    const { circle, circleSelected } = this.props.stateTag;
    return (
      <section id='tagFile' className={tag} >
        <div className='row'>
          <div className='col-md-11'>
            <h2>Tags</h2>
          </div>
        </div>
        <div className='row section'>
          <input className='form-control tagFile__input' type='search' placeholder='Search' />
          <button className='tagFile__button--margin' href='#' id='buttonEditar'>
            <img id='imgEditar' className='tagFile__image' src={`${preload}search.svg`} title='Search' />
          </button>
        </div>
        <div className='row'>
          <div className='col-md-12 tagsList--border'>
            <ul id='tagsList' className='tagsList'>
              {allMyTags.map((show) => {
                return (
                  <TagsLiContainer
                    key={ show._id }
                    show={ show }
                    stateTag={ this.props.stateTag }
                    deleteTag={ this.props.deleteTag }
                    updateNameTag={ this.props.updateNameTag }
                    updateTag={ this.props.updateTag }
                  />
                );
              })
              }
            </ul>
          </div>
        </div>
        <div className='row section section--display'>
          <input className='form-control tagFile__input tagFile__input--margin' type='text' id='inputNewTag' placeholder='New tag' onChange={this.handleChange} />
          {circle.map((aCircle) => {
            let style='circle';
            if(aCircle==circleSelected){
              style='circle__selected';
            } 
            return (
                <div key= {aCircle} id={aCircle} className={`${style} circle--margin color${aCircle}`} onClick={ this.selectColor } ></div> 
            );
          })
          }
          <button className='tagFile__button--margin' href='#' id='addTag' onClick={this.addTag}>
            <img className='tagFile__image' src={`${preload}add.svg`} title='Add' />
          </button>
        </div>
      </section>
    );
  },
});

module.exports = Tags;
