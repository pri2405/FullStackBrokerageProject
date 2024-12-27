import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-4'>
                    <div  className='mb-5'>
                        <img  src='media/smallcaseLogo.png'></img>
                        <p className='text-small mt-3 text-muted' alt="smallcase logo">Thematic investment platform</p>
                    </div>
                    <div>
                        <img  src='media/zerodhafundhouse.png' style={{width:"200px"}}></img>
                        <p className='text-small mt-3 text-muted'>Asset management</p>
                    </div>
                    
                </div>
                <div className='col-4 p-4'>
                    <div  className='mb-5'>
                        <img  src='media/streakLogo.png' style={{width:"120px"}}></img>
                        <p className='text-small mt-3 text-muted'>Algo & strategy platform</p>
                    </div>
                    <div>
                        <img  src='media/goldenpiLogo.png'></img>
                        <p className='text-small mt-3 text-muted'>Bonds trading platform</p>
                    </div>
                </div>
                <div className='col-4 p-4'>
                    <div className='mb-5'>
                        <img  src='media/sensibullLogo.svg' style={{width:"150px"}}></img>
                        <p className='text-small mt-3 text-muted'>Options trading platform</p>
                    </div>
                    <div>
                        <img  src='media/dittoLogo.png' style={{width:"120px"}}></img>
                        <p className='text-small mt-3 text-muted'>Asset management</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Universe;