import './LogIn.css';

export const LogIn = () => {
    return (
        <section className="first-wrapper">

            <div className="wrapper-login">

                <div className="form-box login">

                    <h2>Login</h2>

                    <form method="POST">

                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="text" name="uid"/>
                            <label>Username/Email</label>
                        </div>

                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="password" name="pwd"/>
                            <label>Password</label>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit" name="submit" className="btn">Login</button>

                        <div className="login-register">
                            <p>Don't have an account? <a href="subscribe" className="register-link">Register</a></p>
                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
}