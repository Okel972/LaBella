import './SignUp.css';

export const SignUp = () => {
    return (
        <section className="first-wrapper">

            <div className="wrapper-signup">

                <div className="form-box login">

                    <h2>Registration</h2>

                    <form method="POST">

                        <div className="input-box">
                            <input type="text" name="name"/>
                            <label>Full name</label>
                        </div>

                        <div className="input-box">
                            <input type="text" name="email"/>
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <input type="text" name="uid"/>
                            <label>Username</label>
                        </div>

                        <div className="input-box">
                            <input type="password" name="pwd"/>
                            <label>Password</label>
                        </div>

                        <div className="input-box">
                            <input type="password" name="pwdrepeat"/> 
                            <label>Confirm password</label>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox"/>I agree to terms & conditions</label>
                        </div>

                        <button type="submit" name="submit" className="btn">Signup</button>

                        <div className="login-register">
                            <p>Already have an account? <a href="connect" className="login-link">Login</a></p>
                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
}