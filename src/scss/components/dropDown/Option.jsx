import React from 'react';

const Option = React.createClass({
  render() {
    const { name, idNotebook } = this.props.show;
    return (
      <option value={ idNotebook } >{name}</option>
    );
  },
});

module.exports = Option;
