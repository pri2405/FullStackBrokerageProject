import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection 
                imageURL="media/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection 
                imageURL="media/console.png"
                productName="Console"
                productDescription="Buy direct mutual funds online, commission free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
                learnMore=""
            />
            <LeftSection 
                imageURL="media/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection 
                imageURL="media/kiteConnect.png"
                productName="Kite Connect API"
                productDescription="Build Powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clentbase."
                learnMore=""
            />
            <LeftSection 
                imageURL="media/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <p className='text-center mt-5'>
                Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.
            </p>
            <Universe />
        </>
    )
}

export default ProductPage;