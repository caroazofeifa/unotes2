const React = require('react');

const NavMenu = React.createClass({
  render() {
    return (
      <nav className='section sideNav'>
        <ul>
          <li>
            <button className='sideNav__button' id='user'>
              <img className='sideNav__image' src='../iconos/user-3.svg' title='User configurations' />
            </button>
          </li>
          <li>
            <button className='sideNav__button' id='buttonNote'>
              <img className='sideNav__image' src='../iconos/file.svg' title='New note' />
            </button>
          </li>
          <li>
            <button className='sideNav__button' id='buttonNotebook'>
              <img className='sideNav__image' src='../iconos/agenda.svg' title='Notebooks' />
            </button>
          </li>
          <li>
            <button className='sideNav__button' id='buttonTag'>
              <img className='sideNav__image' src='../iconos/tag.svg' title='Tags' />
            </button>
          </li>
        </ul>
      </nav>
    );
  },
});

module.exports = NavMenu;
