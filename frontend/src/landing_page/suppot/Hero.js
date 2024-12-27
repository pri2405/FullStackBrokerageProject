import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate f&O, why is my order getting rejected.'></input>
                    <br></br>
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-4'>Featured</h1>
                    <p>1.<a href="">Current Takeovers and Delisting - January 2024</a></p>
                    <p>2.<a href="">Latest intraday leverages - MIS & CO</a></p>
                </div>
            </div>
        </section>
     );
}

export default Hero;