import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './app.scss';

const reactRouter = require('react-router-dom');

const Route = reactRouter.Route;
// const Link = reactRouter.Link;
const AppContainer = require('../../containers/AppContainer');
const NotesContainer = require('../../containers/NotesContainer');

const App = React.createClass({
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <div className='row' id='mainView'>
             <Route path='/' component={ AppContainer } />
             <Route path='/' component={ NotesContainer } />
          </div>
        </div>
      </Router>
    );
  },
});
render(<App />, document.getElementById('app'));
