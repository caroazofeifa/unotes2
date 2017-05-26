import React from 'react';

const Notebooks = require('../components/notebooks/Notebooks');

class NotebooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameNotebook: '',
    };
  }
  updateNameNotebook(nameNotebookI) {
    this.setState({ nameNotebook: nameNotebookI });
  }
  addNotebookContainer() {
    //console.log('estoy en noteb container');
    this.props.addNotebook(this.state.nameNotebook);
  }
  render() {
    return (
      <Notebooks stateApp={ this.props.stateApp } addNotebookContainer={ this.addNotebookContainer.bind(this) } updateNameNotebook={ this.updateNameNotebook.bind(this) } />
    );
  }
}

module.exports = NotebooksContainer;
