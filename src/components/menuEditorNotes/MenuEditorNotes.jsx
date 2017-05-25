import React from 'react';
import './_menu-editorNotes.scss';

const preload = '../src/images/';

const MenuEditorNotes = React.createClass({
  render() {
    const { title } = this.props.stateApp;
    return (
        <nav className='section navNote'>
            <ul className='navNote__ul'>
                <li>
                <input className='navNote__input' id='nameNote' type='text' placeholder='Title' value={ title } />
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src={ `${preload}user-2.svg` } title='Add contribuitor' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src={ `${preload}send.svg` } title='Send' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src={ `${preload}delete.svg` } title='Delete' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src={ `${preload}info-button.svg` } title='Information' />
                </button>
                </li>
            </ul>
        </nav>
    );
  },
});

module.exports = MenuEditorNotes;
