import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const AppContainer = require('./scss/containers/AppContainer');
const DropDown = require('./scss/components/dropDown/DropDown');
const Notes = require('./scss/components/notes/Notes');

const App = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' id='mainView'>
            <AppContainer />
          <div className='col-md-11'>
            <DropDown />
            <Notes />
          </div>
        </div>
      </div>
    );
  },
});
render(<App />, document.getElementById('app'));
