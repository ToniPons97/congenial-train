import './SignUp.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RippleButton from '../RippleButton/RippleButton';

const SignUp = () => {
    const [ sign, setSign ] = useState('SIGN IN');
    const { type } = useParams();

    useEffect(() => {
        if (type === 'signup')
            setSign(prev => 'SIGN UP'); 
        else if (type === 'signin')
            setSign(prev => 'SIGN IN');
    }, [type]);

    return (
        <div className="sign-up-container">
            <main className="sign-up-main">
                <div className="sign-up-main-container">
                    <h1>{ sign }</h1>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />

                    {
                        type === 'signin' &&
                        <a href="#">forgot your password?</a>
                    }
                    <RippleButton>{sign}</RippleButton>
                    <Link to={`/account/${type === 'signin' ? 'signup' : 'signin'}`}>
                        {
                            type === 'signup' ? 'already have an account' : 'create an account'
                        }
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default SignUp;