import "./UserProfile.scss";
import RippleButton from '../RippleButton/RippleButton';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useUserStore } from "../../state/userState";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const UserProfile = () => {

    const data = useUserStore(state => state.userState);
    const setFullName = useUserStore(state => state.setFullName);
    const resetUserState = useUserStore(state => state.resetUserState);
    const navigate = useNavigate();

    useEffect(() => {
        fetchFullName();
    }, []);

    const signUserOut = async () => {
        const apiEndpoint = 'http://localhost:5000/api/users/signout';
        const res = await fetch(
            apiEndpoint, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`
            }
        }
        );

        if (res.status === 200) {
            console.log(res.status);
            resetUserState();
            navigate('/account/signin');
        }
    }

    const fetchFullName = async () => {
        if (data.token) {
            const apiEndpoint = 'http://localhost:5000/api/users/info';
            const res = await fetch(
                apiEndpoint, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data.token}`
                }
            }
            );

            const json = await res.json();
            setFullName(json.msg.full_name);
            console.log(data.fullName);
        }
    }

    return (
        <div className="user-profile">
            <Helmet>
                <title>Profile | P&P</title>
            </Helmet>

            <div style={data.token ? {} : {height: '100vh'}} className="user-profile-grid">
                {
                    data.token &&
                    <>
                        {/* // my account */}
                        <div id="my-account">
                            <section className="profile-title">
                                <h2>my account</h2>
                            </section>
                            <section className="profile-content">
                                <h3>profile information</h3>
                                <div>
                                    <p>{data.fullName}</p>
                                    <p>{data.email}</p>
                                </div>
                                <button className="change-password-btn">change password</button>
                            </section>
                        </div>

                        {/* //my wallet */}
                        <div id="my-wallet">
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

                        {/* //my orders */}
                        <div id="my-orders">
                            <section className="profile-title">
                                <h2>my orders</h2>
                            </section>
                            <section className="profile-content">
                                <h3>my orders</h3>
                                <Link to="/">edit my orders</Link>
                            </section>
                        </div>

                        {/* //my address book */}
                        <div id="my-address">
                            <section className="profile-title">
                                <div className="address-book-title">
                                    <h2 >my address book</h2>
                                </div>
                            </section>
                            <section className="profile-content">
                                <h3>my default billing address</h3>
                                <div>
                                    <p>{data.fullName}</p>
                                    <p>Lucas County, Ohio, United States</p>
                                    <p>Maumee, 43537</p>
                                    <p>216-200-7534</p>
                                </div>
                                <Link to="/">edit my billing address</Link>
                            </section>
                            <section className="profile-content">
                                <h3>my default shipping address</h3>
                                <div>
                                    <p>{data.fullName}</p>
                                    <p>Lucas County, Ohio, United States</p>
                                    <p>Maumee, 43537</p>
                                    <p>216-200-7534</p>
                                </div>
                                <Link to="/">edit my shipping address</Link>
                            </section>
                        </div>

                        {/* // my favorites */}
                        <div id="my-favorites">
                            <section className="profile-title">
                                <h2>my favorites</h2>
                            </section>
                            <section className="profile-content">
                                <Link to="/">see my favorites</Link>
                            </section>
                        </div>

                        {/* // customize your account */}
                        <div id="customize">
                            <section className="profile-title">
                                <h2>customize your account</h2>
                            </section>
                            <section className="profile-content">
                                <Link to="/">delete account</Link>
                                <RippleButton
                                    children='close session'
                                    alignSelf="flex-start"
                                    click={signUserOut}
                                />
                            </section>
                        </div>
                    </>    
                }
            </div>
        </div>
    );
}

export default UserProfile;