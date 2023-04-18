import React, { useState } from "react";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    user: "",
    pwd: "",
  });

  const { user, pwd } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { user, pwd };
      const response = await fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      console.log(parseRes);
      localStorage.setItem("token", parseRes.accessToken);
      if (parseRes.roles.includes(5150)) {
        setAuth(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Admin Dashboard</h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="user"
              value={user}
              onChange={(e) => onChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="pwd"
              value={pwd}
              onChange={(e) => onChange(e)}
            />
          </label>
          <input type="submit" value="Submit" onClick={onSubmitForm} />
        </form>
      </div>
    </div>
  );
};

export default Login;
