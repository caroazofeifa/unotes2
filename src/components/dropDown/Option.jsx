import React from 'react';

const Option = React.createClass({
  render() {
    const { name, id } = this.props.show;
    return (
      <option value={ id } >{name}</option>
    );
  },
});

module.exports = Option;
