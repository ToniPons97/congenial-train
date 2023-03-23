import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./UserProfile.scss";
import RippleButton from '../RippleButton/RippleButton';

const UserProfile = () => {
    return (
        <div className="user-profile">
            <Helmet>
                <title>Profile | P&P</title>
            </Helmet>
            
            <div className="user-profile-grid">

                {/* my account  */}
                <div>
                    <section className="profile-title">
                        <h2>my account</h2>
                    </section>
                    <section className="profile-content">
                        <h3>profile information</h3>
                        <div>
                            <p>John Doe</p>
                            <p>doe.john@example.com</p>
                        </div>
                        <button className="change-password-btn">change password</button>
                        <Link to="/">delete account</Link>
                    </section>
                </div>

                {/* my wallet */}
                <div>
                    <section className="profile-title">
                        <h2>my wallet</h2>
                    </section>
                    <section className="profile-content">
                        <h3>register payment information</h3>
                        <div className="credit-card-shape">
                            <p id="obfuscated-card-number"><span>***</span> 1234</p>
                        </div>
                        <Link to="/">edit payment method</Link>
                    </section>
                </div>

                {/* my orders */}

                <div>
                    <section className="profile-title">
                        <h2>my orders</h2>
                    </section>
                    <section className="profile-content">
                        <h3>my orders</h3>
                        <Link to="/">edit my orders</Link>
                    </section>
                </div>

                {/* my address book */}

                <div>
                    <section className="profile-title">
                        <h2>my address book</h2>
                    </section>
                    <section className="profile-content">
                        <h3>my default billing address</h3>
                        <div>
                            <p>John Doe</p>
                            <p>Lucas County, Ohio, United States</p>
                            <p>Maumee, 43537</p>
                            <p>216-200-7534</p>
                        </div>
                        <Link to="/">edit my billing address</Link>
                    </section>
                    <section className="profile-content">
                        <h3>my default shipping address</h3>
                        <div>
                            <p>John Doe</p>
                            <p>Lucas County, Ohio, United States</p>
                            <p>Maumee, 43537</p>
                            <p>216-200-7534</p>
                        </div>
                        <Link to="/">edit my shipping address</Link>
                    </section>
                </div>


                {/* my favorites */}

                <div>
                    <section className="profile-title">
                        <h2>my favorites</h2>
                    </section>
                    <section className="profile-content">
                        <Link to="/">see my favorites</Link>
                    </section>
                </div>

                {/* customize your account */}

                <div>
                    <section className="profile-title">
                        <h2>customize your account</h2>
                    </section>
                    <section className="profile-content">
                        <Link to="/">delete account</Link>
                        <RippleButton
                            children='close session'
                            alignSelf="flex-start"
                        />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;