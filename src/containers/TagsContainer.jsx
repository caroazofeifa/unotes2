import React from 'react';

const Tags = require('../components/tags/Tags');

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTag: '',
      circle: ['0','1','2','3','4','5','6'],
      circleSelected:0,
      searchInput:'',
    };
  }
  //Set the name Tag to the name received from param
  updateNameTag(nameTagI) {
    this.setState({ nameTag: nameTagI });
  }
  //Set the searchInput to the name received from param
  updateSearchInput(searchInputI) {
    this.setState({ searchInput: searchInputI });
  }
  //Calls to AppContainer to add a new tag
  addTagContainer() {
    this.props.addTag(this.state.nameTag,this.state.circleSelected);
  }
  selectColor(id) {
    this.setState({ circleSelected: id });  
  }
  updateTag(id) {
    this.props.updateTag(id, this.state.nameTag);
    // this.props.updateTag(color, this.state.color);
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
        updateTag={ this.updateTag.bind(this) }
        updateSearchInput={ this.updateSearchInput.bind(this) }
      />
    );
  }
}
// 
module.exports = TagsContainer;
