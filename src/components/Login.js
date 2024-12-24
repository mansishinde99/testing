import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

const Login = () => {
  const [option, setOption] = useState("email");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    phone: "",
    countryCode: "+91",
  });
  const [users, setUsers] = useState([]);
  const [countryCodes, setCountryCodes] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    fetch("https://cuik-projects.github.io/country-list/countries.json")
      .then((resp) => resp.json())
      .then((data) => setCountryCodes(data))
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  const choice = () => {
    setOption(option === "email" ? "phone" : "email");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (option === "email" && (!formValues.email || !formValues.password)) ||
      (option === "phone" && (!formValues.phone || !formValues.password))
    ) {
      alert("Field is empty");
      return;
    }

    if (
      users.some((user) =>
        option === "email"
          ? user.email === formValues.email &&
            user.password === formValues.password
          : user.phone === formValues.phone &&
            user.password === formValues.password
      )
    ) {
      navigate("/home", { replace: true });
    } else {
      alert("Invalid credentials");
    }

    // setFormValues({email: "", password: "", phone: ""})
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login">
      <div className="left-page">
        <h1>Just Billing</h1>
        <p>simplifies billing complexities for you.</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZZsY7d6BeOh9QhPHXYgVQxwj5rQ5BhdiKQ&s"
          alt=""
        />
      </div>

      <div className="right-page">
        <div className="choices">
          <button
            onClick={() => setOption("email")}
            className="email-button"
            style={{
              backgroundColor: option === "email" ? "#00538D" : "#fff",
              color: option === "email" ? "#fff" : "#00538D",
            }}
          >
            Email
          </button>
          <button
            onClick={() => setOption("phone")}
            className="phn-button"
            style={{
              backgroundColor: option === "phone" ? "#00538D" : "#fff",
              color: option === "email" ? "#00538D" : "#fff",
            }}
          >
            Phone
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {option === "email" ? (
            <div className="loginvia">
              <div className="login-details">
                <p className="detail">Email Id</p>
                <input
                  placeholder="Enter Email Id"
                  value={formValues.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>

              <div className="login-details">
                <p className="detail">Password</p>
                <input
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          ) : (
            <div className="loginvia">
              <div className="login-details">
                <p className="detail">Phone Number</p>
                <div className="country-code">
                  <select
                    name="countryCode"
                    value={formValues.countryCode}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        countryCode: e.target.value,
                      })
                    }
                  >
                    {countryCodes.map((country, i) => (
                      <option key={i}>{country.dial_code}</option>
                    ))}
                  </select>
                  <input
                    placeholder="Enter Phone Number"
                    value={formValues.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="login-details">
                <p className="detail">Password</p>
                <input
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          <p className="acc">
            Don't have an account?{" "}
            <a className="signup" href="/signup">
              Sign Up
            </a>
          </p>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
