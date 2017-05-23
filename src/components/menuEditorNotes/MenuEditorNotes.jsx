import React from 'react';
import './_menu-editorNotes.scss';

const MenuEditorNotes = React.createClass({
  render() {
    return (
        <nav className='section navNote'>
            <ul className='navNote__ul'>
                <li>
                <input className='navNote__input' id='nameNote' type='text' placeholder='Title' />
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src='../iconos/user-2.svg' title='Add contribuitor' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src='../iconos/send.svg' title='Send' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src='../iconos/delete.svg' title='Delete' />
                </button>
                </li>
                <li>
                <button className='navNote__button' href='#'>
                    <img className='navNote__image' src='../iconos/info-button.svg' title='Information' />
                </button>
                </li>
            </ul>
        </nav>
    );
  },
});

module.exports = MenuEditorNotes;
