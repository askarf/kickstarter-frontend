export function Login() {
  return (
    <div id="login">
      <h1>Login</h1>
      <form action="">
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password_digest" type="password" />
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
}
