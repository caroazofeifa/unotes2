import React from 'react';
import './_tags.scss';

const preload = '../src/images/';

const TagLi = React.createClass({
  updateTag() {
    this.props.editTag(this.props.show.name, this.props.show._id);
  },
  deleteTag() {
    this.props.deleteTag(this.props.show._id);
  },
  render() {
    const { name,color } = this.props.show;
    const { circleStyle } = this.props.stateTag;
    return (
      <div className='col-md-12 col--width'>
        <li className='tagFile__list'>
          <div className='row tagFile__li'>
            <div className ='col-md-1' >
              <div className={`circle color${color}`}></div>
            </div>
            <div className='col-md-6 col--width'>
              <h6 suppressContentEditableWarning contentEditable='true' id='inputName'>{name}</h6>
            </div>
            <div className='col-md-5 col--width'>
              <button className='tagFile__button' href='#'  onClick={ this.deleteTag }>
                <img className='tagFile__image' src={ `${preload}delete.svg` } title='Delete' />
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  },
});

module.exports = TagLi;
