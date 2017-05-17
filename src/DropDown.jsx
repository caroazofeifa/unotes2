const React = require('react');

const DropDown = React.createClass({
  render() {
    return (
        <section className='section notesDropDown'>
            <div className='col-md-12 cols'>
                <div className='row'>
                    <div className='col-md-12'>
                        <select className='notesDropDown__dropdown'>
                            <option value=''>BrainStation</option>
                            <option value=''>UCR</option>
                            <option value=''>ULACIT</option>
                        </select>
                    <button className='notesDropDrown__button' id='buttonTag'>
                        <img className='notesDropDrown__img' src='../iconos/icon.svg' title='UNotes' />
                    </button>
                    </div>
                </div>
            </div>
        </section>
    );
  },
});

module.exports = DropDown;
