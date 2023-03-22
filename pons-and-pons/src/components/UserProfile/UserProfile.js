import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./UserProfile.scss";

const UserProfile = () => {
    return (
        <div className="user-profile">
            <Helmet>
                <title>Profile | P&P</title>
            </Helmet>   

            <div className="user-profile-grid">
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
                        <button>change password</button>
                        <Link to="/">delete account</Link>
                    </section>
                </div>
                
                
                
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


        </div>
    );
}

export default UserProfile;