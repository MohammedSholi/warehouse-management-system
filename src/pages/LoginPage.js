import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>

        {/* Example error/success messages */}
        <div className="login-error">Invalid username or password</div>
        {/* <div className="login-success">Login successful!</div> */}

        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>

        <div className="login-link">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
