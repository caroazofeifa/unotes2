import React from 'react';
import './_subMenu-editorNotes.scss';

const SubMenuEditorNotes = React.createClass({
  render() {
    return (
       <nav className='navEditor'>
            <ul className='navEditor__ul section'>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src='../iconos/agenda.svg' title='Notebook' />
                </button>
                </li>
                <li>
                <select className='navEditor__dropdown'>
                    <option value=''>BrainStation</option>
                    <option value=''>UCR</option>
                    <option value=''>ULACIT</option>
                </select>
                </li>
                <li>
                <button className='navEditor__button' href='#'>
                    <img className='navEditor__image' src='../iconos/tag.svg' title='Tags' />
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
