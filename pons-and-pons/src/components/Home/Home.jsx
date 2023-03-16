import './Home.scss';
import { useEffect } from 'react';

import classicGelato from '../../assets/images/Helado1-classic.png';
import specialGelato from '../../assets/images/Helado2-special.png';
import DiscoverLink from '../DiscoverLink/DiscoverLink';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <main className="landing-main">
            <Helmet>
                <title>Home | P&P</title>
            </Helmet>
            <div className="classics landing-main-container">
                <div className="gelato-img-wrapper">
                    <img src={classicGelato} alt="Classic gelato." />
                </div>
                <div className="description-wrapper">
                    <h2>classics</h2>
                    {/* <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
                    <p>Indulge in the sweet and satisfying taste of our sugar ice creams, available in a variety of delicious flavors.</p>
                    <DiscoverLink text='discover flavours' to='/flavors/sugar' />
                </div>
            </div>
            <div className="specials landing-main-container">
                <div className="gelato-img-wrapper">
                    <img src={specialGelato} alt="Special gelato." />
                </div>
                <div className="description-wrapper">
                    <h2>specials</h2>
                    {/* <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
                    <p>Satisfy your sweet tooth without the guilt with our delicious range of sugar-free ice creams, available in various flavors.</p>
                    <DiscoverLink text='discover flavors' to='/flavors/sugar-free' />
                </div>
            </div>
        </main>
    );
}

export default Home;