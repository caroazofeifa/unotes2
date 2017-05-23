import React from 'react';
import { render } from 'react-dom';
import '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './app.scss';

const AppContainer = require('../../containers/AppContainer');
const NotesContainer = require('../../containers/NotesContainer');


const App = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' id='mainView'>
            <AppContainer />
            <NotesContainer />
        </div>
      </div>
    );
  },
});
render(<App />, document.getElementById('app'));
