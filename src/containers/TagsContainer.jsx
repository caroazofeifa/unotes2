import React from 'react';

const Tags = require('../components/tags/Tags');

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTag: '',
      circle: ['0','1','2','3','4','5','6'],
      circleSelected:0,
    };
  }
  //Before component is mounted sets the state from props, used when a note is going to be edited
  componentWillMount() {
    this.setState({ nameTag: this.props.stateApp.nameTag });
  }
  //Set the nameTag to the name received from param
  updateNameTag(nameTagI) {
    this.setState({ nameTag: nameTagI });
  }
  //Calls to AppContainer to add a new tag
  addTagContainer() {
    this.props.addTag(this.state.nameTag,this.state.circleSelected);
  }
  selectColor(id) {
    this.setState({ circleSelected: id });  
  }
  render() {
    return (
      <Tags
        stateApp={ this.props.stateApp }
        stateTag={ this.state }
        addTagContainer={ this.addTagContainer.bind(this) }
        updateNameTag={ this.updateNameTag.bind(this) }
        selectColor={ this.selectColor.bind(this) }
        deleteTag={ this.props.deleteTag }
      />
    );
  }
}
// 
module.exports = TagsContainer;
