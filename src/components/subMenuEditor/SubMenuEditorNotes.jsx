import React from 'react';
import './_subMenu-editorNotes.scss';

const Option = require('../dropDown/Option');

const preload = '../src/images/';

const SubMenuEditorNotes = React.createClass({
  render() {
    const { allMyNotebooks, idNotebook } = this.props.stateApp;
    return (
       <nav className='navEditor'>
            <ul className='navEditor__ul section'>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src={ `${preload}agenda.svg` } title='Notebook' />
                </button>
                </li>
                <li>
                <select className='navEditor__dropdown' value={ idNotebook } >
                    {allMyNotebooks.map((show) => {
                      return (
                        <Option key={ show.idNotebook } show={ show } />
                      );
                    })
                    },
                </select>
                </li>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src={ `${preload}tag.svg` } title='Tags' />
                </button>
                </li>
                <li>
                <input className='navEditor__input' type='text' placeholder='Tag' />
                </li>
            </ul>
        </nav>
    );
  },
});

module.exports = SubMenuEditorNotes;
