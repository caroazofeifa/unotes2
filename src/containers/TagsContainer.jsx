import React from 'react';

const Tags = require('../components/tags/Tags');

class NotebooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTag: '',
    };
  }
  updateNameTag(nameTagI) {
    this.setState({ nameTag: nameTagI });
  }
  addTagContainer() {
    console.log('estoy en tag container');
    this.props.addTag(this.state.nameTagI);
  }
  render() {
    return (
      <Notebooks stateApp={ this.props.stateApp } addTagContainer={ this.addTagContainer.bind(this) } updateNameTag={ this.updateNameTag.bind(this) } />
    );
  }
}

module.exports = TagsConstainer;
