import './SignUp.scss';

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <main className="sign-up-main">
                <div className="sign-up-main-container">
                    <h1>login</h1>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <a href="#">forgot your password?</a>
                    <button>sign in</button>
                    <a href="#">create account</a>
                </div>
            </main>
        </div>
    );
}

export default SignUp;