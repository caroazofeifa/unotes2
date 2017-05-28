import React from 'react';

const Option = React.createClass({
  render() {
    const { name, _id } = this.props.show;
    return (
      <option value={ _id } >{name}</option>
    );
  },
});

module.exports = Option;
