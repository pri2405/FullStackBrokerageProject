import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero Image' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivates, mutual funds, and more</p>
                <br></br>
                <button className='p-2 btn btn-primary' style={{width: "25%", margin:"0 auto"}}>Signup now</button>
            </div>
        </div>
        
     );
}

export default Hero;