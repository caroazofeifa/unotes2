import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const NavMenu = require('./NavMenu');
const DropDown = require('./DropDown');
const Notes = require('./Notes');
const EditorNotes = require('./EditorNotes');
const Notebooks = require('./Notebooks');
const Tags = require('./Tags');

const App = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row' id='mainView'>
          {/*<!--MENU AZUL-->*/}
          <div className='col-md-1 cols'>
            <NavMenu />
          </div>
          {/*<!--TERMINA MENU AZUL-->*/}
          {/*<!--NOTAS-->*/}
          <div className='col-md-11'>
              <DropDown />
              <Notes />
          </div>
          {/*<!--TERMINA NOTAS-->*/}
        </div>
        {/*<!--CODIGO VIEJO-->*/}

        {/*<!--NOTA-->*/}
        <EditorNotes />
        {/*<!--TERMINA NOTA-->*/}

        {/*<!--MENU NOTEBOOKS-->*/}
        <Notebooks />
        {/*<!--TERMINA MENU NOTEBOOK-->*/}

        {/*<!--TERMINA TAGS-->*/}
        {/*<!--AQUI DEBERIA EL DE TAGS-->*/}
        <Tags />
      </div>
    );
  },
});
render(<App />, document.getElementById('app'));
