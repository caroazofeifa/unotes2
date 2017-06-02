import React from 'react';

const TagLi = require('../components/tags/TagLi');

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',

      editingTag: false,
      styleInputTag: 'tagFile__input__list',
    };
    this.updateNameTagLi=this.updateNameTagLi;
    this.addTagContainer=this.addTagContainer;
    this.showOpacityInput=this.showOpacityInput;
    this.hideOpacityInput=this.hideOpacityInput;
  }
  //Before component is mounted sets the state from props, used when a note is going to be edited
  componentWillMount() {
    this.setState({ name: this.props.show.name });
    this.setState({ color: this.props.show.color})
  }
  //Set the name Tag to the name recieved from param
  updateNameTagLi(i) {
    this.setState({ name: i });
    this.props.updateNameTag(i);
  }
  //Calls the AppContainer to add a new tag
  addTagContainer() {
    this.props.addTag(this.state.nameTag);
  }
  showOpacityInput() {
    console.log('aqui esta con opacidad al editar')
    this.setState({ editingTag: true });
  }
  hideOpacityInput() {
    this.setState({ editingTag: false });
    console.log('aqui esta sin opacidad despues del enter')
  }
  render() {
    if (this.state.editingTag) {
      this.state.styleInputTag = 'tagFile__input__list--opacity';
    } else {
      this.state.tstyleInputTagag = 'tagFile__input__list';
    }
    return (
      <TagLi
        show={ this.props.show }
        stateApp={ this.props.stateApp }
        stateTag={ this.props.stateTag }
        stateTagLi={ this.state }
        deleteTag={ this.props.deleteTag }
        updateNameTagLi={ this.updateNameTagLi.bind(this) }
        updateTag={ this.props.updateTag }
        showOpacityInput={ this.showOpacityInput.bind(this) }
        hideOpacityInput={ this.hideOpacityInput.bind(this) }
      />
    );
  }
}

module.exports = TagsContainer;
