import React from 'react';

const Notebooks = require('../components/notebooks/Notebooks');

class NotebooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameNotebook: '',
    };
  }
  //Set the nameNote to the name received from param
  updateNameNotebook(nameNotebookI) {
    console.log(nameNotebookI);
    this.setState({ nameNotebook: nameNotebookI });
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
        stateNotebook={ this.state}
        addNotebookContainer={ this.addNotebookContainer.bind(this) }
        updateNameNotebook={ this.updateNameNotebook.bind(this) }
        deleteNotebook={ this.props.deleteNotebook }
        updateNotebook={ this.updateNotebook.bind(this) }
      />
    );
  }
}

module.exports = NotebooksContainer;
