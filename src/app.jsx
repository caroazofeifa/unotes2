import React from 'react';
import { render } from 'react-dom';
import './scss/app.scss';

const App = React.createClass({
  render() {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>OLA K ASE</h1>
        </div>
      </div>
    );
  },
});
render(<App />, document.getElementById('app'));
