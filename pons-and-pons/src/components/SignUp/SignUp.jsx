import './SignUp.scss';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleReactValidator from 'simple-react-validator';
import RippleButton from '../RippleButton/RippleButton';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const [ sign, setSign ] = useState('SIGN IN');
    const { type } = useParams();
    const [ formData, setFormData ] = useState({email: '', fullName: '', password: ''});
    const [responseMsg, setResponseMsg] = useState('');
    
    const [render, rerender] = useState(false);
    const [visible, setVisible] = useState(false);

    const responseMsgRef = useRef(null);

    const handlePasswordVisibility = () => {
        if (formData.password)
            setVisible(prev => !prev);
    }

    const validator = useRef(new SimpleReactValidator({
        className: 'text-danger',
        messages: {
            fullName: '',
            email: '',
            password: ''
        },
    }));

    useEffect(() => {
        if (type === 'signup')
            setSign(prev => 'SIGN UP'); 
        else if (type === 'signin')
            setSign(prev => 'SIGN IN');
    }, [type]);

    const handleInputChange = (ev) => {
        const {name, value} = ev.target;
        setFormData(prev => ({...prev, [name]: value}));
        
        const formvalid = validator.current.allValid();
        if (!formvalid) 
            validator.current.showMessageFor(name);

    }

    const handleFormSubmition = () => {
        const formvalid = validator.current.allValid();

        if (!formvalid) {
            validator.current.showMessages();
            rerender(prev => !prev);
            console.log('not valid');
            return;
        }

        postUserData();
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
        
        console.log(res.status);
        console.log(json.msg);

        if (res.status === 409) {
            responseMsgRef.current.classList.add('text-danger');
            setResponseMsg(prev => 'This email is already registered. Please log in or use a different email to sign up.');
        } else if (res.status === 201) {
            responseMsgRef.current.classList.remove('text-danger');
            setResponseMsg(prev => 'Account created successfully!');
        } else if (res.status === 404) {
            responseMsgRef.current.classList.add('text-danger');
            setResponseMsg(prev => 'Incorrect email or password.');
        }

        
    }

    return (
        <div className="sign-up-container">
            <Helmet>
                <title>{sign} | P&P</title>
            </Helmet>
            <main className="sign-up-main">
                <div className="sign-up-main-container">
                    <h1>{ sign }</h1>
                    <div className='response-msg-dialog'>
                        <p ref={responseMsgRef} className='text-danger'>{responseMsg}</p>
                    </div>
                    {
                        type === 'signup' &&
                        <input
                            onChange={handleInputChange} 
                            type='text' 
                            placeholder='full name' 
                            name='fullName' 
                            value={formData.fullName} 
                            autoComplete='false' 
                        />
                    }
                    { type === 'signup' && validator.current.message('fullName', formData.fullName,'required') }
                    
                    <input 
                        onChange={handleInputChange} 
                        type='email' 
                        placeholder='email' 
                        name='email' 
                        value={formData.email} 
                        autoComplete='false' 
                        onBlur={() => validator.current.showMessageFor('email')}
                    />
                    { validator.current.message('email', formData.email, 'required|email') }
                    
                    <div className='password-container'>
                        <input 
                            onChange={handleInputChange} 
                            type={visible ? 'text' : 'password'} 
                            placeholder='password' 
                            name='password'
                            value={formData.password}
                            onBlur={() => validator.current.showMessageFor('password')}  
                        />
                        <span onClick={handlePasswordVisibility}>
                            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
                        </span>
                    </div>
                    { validator.current.message('password', formData.password, 'required|min:8') }

                    {
                        type === 'signin' &&
                        <a href="#">forgot your password?</a>
                    }

                    <RippleButton click={handleFormSubmition}>{sign}</RippleButton>
                    <Link onClick={() => {
                        validator.current.hideMessages()
                        setResponseMsg(prev => '');
                        }} to={`/account/${type === 'signin' ? 'signup' : 'signin'}`}>
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