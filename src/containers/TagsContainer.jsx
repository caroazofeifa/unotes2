import React from 'react';

const Tags = require('../components/tags/Tags');

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTag: '',
    };
  }
  //Set the nameTag to the name received from param
  updateNameTag(nameTagI) {
    this.setState({ nameTag: nameTagI });
  }
  //Calls to AppContainer to add a new tag
  addTagContainer() {
    this.props.addTag(this.state.nameTag);
  }
  render() {
    return (
      <Tags
        stateApp={ this.props.stateApp }
        addTagContainer={ this.addTagContainer.bind(this) }
        updateNameTag={ this.updateNameTag.bind(this) }
        deleteTag={ this.props.deleteTag }
      />
    );
  }
}
// 
module.exports = TagsContainer;
