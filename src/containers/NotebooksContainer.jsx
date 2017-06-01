import React from 'react';

const Notebooks = require('../components/notebooks/Notebooks');

class NotebooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameNotebook: '',
      searchInput:''
    };
  }
  //Set the nameNote to the name received from param
  updateNameNotebook(nameNotebookI) {
    this.setState({ nameNotebook: nameNotebookI });
  }
  //Set the searchInput to the name received from param
  updateSearchInput(searchInputI) {
    this.setState({ searchInput: searchInputI });
  }
  //Calls to AppContainer to add a new notebook
  addNotebookContainer() {
    this.props.addNotebook(this.state.nameNotebook);
  }
  updateNotebook(id) {
    this.props.updateNotebook(id, this.state.nameNotebook);
  }
  render() {
    return (
      <Notebooks
        stateApp={ this.props.stateApp }
        stateNotebook={ this.state }
        addNotebookContainer={ this.addNotebookContainer.bind(this) }
        updateNameNotebook={ this.updateNameNotebook.bind(this) }
        deleteNotebook={ this.props.deleteNotebook }
        updateNotebook={ this.updateNotebook.bind(this) }
        updateSearchInput={ this.updateSearchInput.bind(this) }
        updateIdNotebook={this.props.updateIdNotebook }
        showFromNotebook={ this.props.showFromNotebook }
      />
    );
  }
}

module.exports = NotebooksContainer;
