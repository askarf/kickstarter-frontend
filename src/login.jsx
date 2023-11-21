export function login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password_digest" type="password" />
        </div>
      </form>
    </div>
  );
}
