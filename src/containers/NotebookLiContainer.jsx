import React from 'react';

const NotebooksLi = require('../components/notebooks/NotebookLi');

class NotebooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  //Before component is mounted sets the state from props, used when a note is going to be edited
  componentWillMount() {
    this.setState({ name: this.props.show.name });
  }
  //Set the nameNote to the name received from param
  updateNameNotebookLi(i) {
    this.setState({ name: i });
    this.props.updateNameNotebook(i);
  }
  //Calls to AppContainer to add a new notebook
  addNotebookContainer() {
    this.props.addNotebook(this.state.nameNotebook);
  }
  render() {
    return (
      <NotebooksLi
        show={ this.props.show }
        stateApp={ this.props.stateApp }
        stateNotebook={ this.props.stateNotebook}
        stateNotebookLi={this.state }
        deleteNotebook={ this.props.deleteNotebook }
        updateNameNotebookLi={ this.updateNameNotebookLi.bind(this) }
        updateNotebook={ this.props.updateNotebook }
        updateIdNotebook={ this.props.updateIdNotebook }
        showFromNotebook={ this.props.showFromNotebook }
      />
    );
  }
}

module.exports = NotebooksContainer;
