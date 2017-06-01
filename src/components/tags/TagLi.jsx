import React from 'react';
import './_tags.scss';

const preload = '../src/images/';

const TagLi = React.createClass({
  deleteTag() {
    this.props.deleteTag(this.props.show._id);
  },
  handleChange(event) {
    const nameInput = event.currentTarget.value;
    this.props.updateNameTagLi(nameInput);
    this.props.showOpacityInput();
  },
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('modificar tag');
      // window.alert('Tag name changed!');
      this.props.updateTag(this.props.show._id);
      this.props.hideOpacityInput();
    }
  },
  updateTag(event) {
    // this.props.editTag(this.props.show.name, this.props.show._id);
    this.props.updateTag(this.props.show._id);
  },
  render() {
    const { nameTag } = this.props.stateTag;
    const { name, color, circleStyle, styleInputTag } = this.props.stateTagLi;
    return (
      <div className='col-md-12 col--width'>
        <li className='tagFile__list'>
          <div className='row tagFile__li'>
            <div className='col-md-1' >
              <div className={`circle color${color}`}></div>
            </div>
            <div className='col-md-5 col--width'>
              {/*<input className={ styleInputTag } value={ name } id='inputName' type='text' placeholder='Name' onKeyDown={ this.handleKeyPress } onKeyUp={ this.handleKeyUp } onChange={ this.handleChange } />*/}
              <input className='tagFile__input--list' value={ name } id='inputName' type='text' placeholder='Name' onKeyDown={ this.handleKeyPress } onKeyUp={ this.handleKeyUp } onChange={ this.handleChange } />
              {/*<input className='tagFile__input--list' value={name} id='inputName' type='text' placeholder='Name' onKeyDown={this.handleKeyPress} onKeyUp={this.handleKeyUp} onChange={this.handleChange} onFocus={this.onFocus} onBlur={this.onBlur} />*/}
            </div>
            <div className='col-md-5 col--width'>
              <button className='tagFile__button' href='#' onClick={this.deleteTag}>
                <img className='tagFile__image' src={`${preload}delete.svg`} title='Delete' />
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  },
});

module.exports = TagLi;
