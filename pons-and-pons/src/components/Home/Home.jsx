import './Home.scss';

import classicGelato from '../../assets/images/Helado1-classic.png';
import specialGelato from '../../assets/images/Helado2-special.png';

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
                    <a>
                        discover flavors
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.20874 13.0002H16.3787L11.4987 17.8802C11.1087 18.2702 11.1087 18.9102 11.4987 19.3002C11.8887 19.6902 12.5187 19.6902 
                                12.9087 19.3002L19.4987 12.7102C19.8887 12.3202 19.8887 11.6902 19.4987 11.3002L12.9187 4.7002C12.7319 4.51295 12.4783 4.40771 
                                12.2137 4.40771C11.9492 4.40771 11.6956 4.51295 11.5087 4.7002C11.1187 5.0902 11.1187 5.7202 11.5087 6.1102L16.3787 
                                11.0002H5.20874C4.65874 11.0002 4.20874 11.4502 4.20874 12.0002C4.20874 12.5502 4.65874 13.0002 5.20874 13.0002Z"
                                fill="#2C2C2C" 
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="specials landing-main-container">
                <div className="gelato-img-wrapper">
                    <img src={specialGelato} alt="Special gelato." />
                </div>
                <div className="description-wrapper">
                    <h2>specials</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <a>
                        discover flavors
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.20874 13.0002H16.3787L11.4987 17.8802C11.1087 18.2702 11.1087 18.9102 11.4987 19.3002C11.8887 19.6902 12.5187 19.6902 
                                12.9087 19.3002L19.4987 12.7102C19.8887 12.3202 19.8887 11.6902 19.4987 11.3002L12.9187 4.7002C12.7319 4.51295 12.4783 4.40771 
                                12.2137 4.40771C11.9492 4.40771 11.6956 4.51295 11.5087 4.7002C11.1187 5.0902 11.1187 5.7202 11.5087 6.1102L16.3787 
                                11.0002H5.20874C4.65874 11.0002 4.20874 11.4502 4.20874 12.0002C4.20874 12.5502 4.65874 13.0002 5.20874 13.0002Z"
                                fill="#2C2C2C" 
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Home;