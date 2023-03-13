import './SignUp.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RippleButton from '../RippleButton/RippleButton';

const SignUp = () => {
    const [ sign, setSign ] = useState('SIGN IN');
    const { type } = useParams();
    const [ formData, setFormData ] = useState({email: '', fullName: '', password: ''});

    useEffect(() => {
        if (type === 'signup')
            setSign(prev => 'SIGN UP'); 
        else if (type === 'signin')
            setSign(prev => 'SIGN IN');
    }, [type]);

    const handleInputChange = (ev) => {
        const {name, value} = ev.target;

        if (name === 'full_name')
            setFormData(prev => ({...prev, fullName: value}));
        else if (name === 'email')
            setFormData(prev => ({...prev, email: value}));
        else if (name === 'password')
            setFormData(prev => ({...prev, password: value}));        
    }



    const handleFormSubmition = () => {
        if (type === 'signup') {
            if (formData.email && formData.fullName && formData.password) {
                postUserData();
                setFormData(prev => ({email: '', fullName: '', password: ''}));
            } else {
                console.log('Incomplete Form');
            }
        } else if (type === 'signin') {
            if (formData.email && formData.password) {
                postUserData();
                setFormData(prev => ({email: '', fullName: '', password: ''}));
            } else {
                console.log('Incomplete Form');
            }

        }
    }

    const postUserData = async () => {
        if (type === 'signin')
            setFormData(prev => ({email: prev.email, password: prev.password}));

        const data = JSON.stringify(formData);
        const apiUrl = `http://localhost:5000/api/users/${type}`;
        const res = await fetch(apiUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });

        const json = await res.json();
        console.log(json);
    }

    return (
        <div className="sign-up-container">
            <main className="sign-up-main">
                <div className="sign-up-main-container">
                    <h1>{ sign }</h1>
                    {
                        type === 'signup' &&
                        <input onChange={handleInputChange} type='text' placeholder='full name' name='full_name' value={formData.fullName} autoComplete='false' />
                    }
                    <input onChange={handleInputChange} type='email' placeholder='email' name='email' value={formData.email} autoComplete='false' />
                    <input onChange={handleInputChange} type='password' placeholder='password' name='password' value={formData.password} />

                    {
                        type === 'signin' &&
                        <a href="#">forgot your password?</a>
                    }

                    <RippleButton click={handleFormSubmition}>{sign}</RippleButton>
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