const React = require('react');

const Notes = React.createClass({
  render() {
    return (
    <section className='section notes'>
        <div className='row' id='thumbnails'>
            <div className='col-md-3'>
                <div className='thumbnail'>
                    <div className='caption'>
                        <h3>Nota 1</h3>
                        <p className='p--shorter'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum obcaecati, hic commodi modi, consequuntur,
                        sequi et incidunt necessitatibus, id ipsum reprehenderit inventore odio. Consequatur incidunt ipsam,
                        esse recusandae iste sunt.</p>
                        <button className='note__button' href='#' id='buttonLib'>
                            <img className='note__image' src='../iconos/send.svg' title='Send' />
                        </button>
                        <button className='note__button' href='#' id='buttonLib'>
                            <img className='note__image' src='../iconos/pencil.svg' title='Edit' />
                        </button>
                        <button className='note__button' href='#' id='buttonLib'>
                            <img className='note__image' src='../iconos/delete.svg' title='Delete' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  },
});

module.exports = Notes;
