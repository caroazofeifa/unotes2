import React from 'react';

const Option = React.createClass({
  render() {
    const { name } = this.props.show;
    return (
      <option value=''>{name}</option>
    );
  },
});

module.exports = Option;
