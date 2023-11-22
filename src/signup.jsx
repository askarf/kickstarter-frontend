import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(handleSubmit, params);
    axios.post("http://localhost:3000.users.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input name="name" type="text" />
        </div>
        <div>
          Email:
          <input name="email" type="email" />
        </div>
        <div>
          Password:
          <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation:
          <input name="password_confirmation" type="password" />
        </div>
        <button className="btn btn-dark">Sign Up</button>
      </form>
    </div>
  );
}
