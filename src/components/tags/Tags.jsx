import React from 'react';
import './_tags.scss';

const TagLi = require('./TagLi');

const preload = '../src/images/';

const Tags = React.createClass({
  handleChange(event) {
    const name = event.currentTarget.value;
    this.props.updateNameTag(name);
  },
  addTag() {
    this.props.addTagContainer();
  },
  render() {
    const { tag, allMyTags } = this.props.stateApp;
    return (
      <section id='tagFile' className={ tag } >
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
        <div className='rowsection'>
          <div className='col-md-12 tagsList'>
            <ul id='tagsList'>
              {allMyTags.map((show) => {
                return (
                  <TagLi key={ show.idTag } show={ show } />
                );
              })
              }
            </ul>
          </div>
        </div>
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
