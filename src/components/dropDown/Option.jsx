import React from 'react';

class Option extends React.Component{
  //TO DO REFACTOR CHANGE FOLDER
  render() {
    const { name, _id } = this.props.show;
    return (
      <option value={ _id } >{name}</option>
    );
  }
};

module.exports = Option;
