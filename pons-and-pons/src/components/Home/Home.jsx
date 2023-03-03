import './Home.scss';

import classicGelato from '../../assets/images/Helado1-classic.png';
import specialGelato from '../../assets/images/Helado2-special.png';
import DiscoverLink from '../DiscoverLink/DiscoverLink';

const Home = () => {
    return (
        <main className="landing-main">
            <div className="classics landing-main-container">
                <div className="gelato-img-wrapper">
                    <img src={classicGelato} alt="Classic gelato." />
                </div>
                <div className="description-wrapper">
                    <h2>classics</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                    <DiscoverLink text='discover flavors' to='/products/sugar' />
                </div>
            </div>
            <div className="specials landing-main-container">
                <div className="gelato-img-wrapper">
                    <img src={specialGelato} alt="Special gelato." />
                </div>
                <div className="description-wrapper">
                    <h2>specials</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    
                    <DiscoverLink text='discover flavors' to='/products/sugar-free' />
                </div>
            </div>
        </main>
    );
}

export default Home;