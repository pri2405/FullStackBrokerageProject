import React from 'react';
import Hero from './Hero';
import HomeHero from '../home/Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <div>
            <HomeHero />
            <Hero />
            <OpenAccount />
            <Brokerage />
        </div>
     );
}

export default PricingPage;