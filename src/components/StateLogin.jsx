import { useState } from "react";

export default function Login() {
  //# Multiple state managment
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  // // Event handlers
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  //   // Add validation logic here (e.g., using a custom validation function)
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  //   // Add validation logic here (e.g., using a custom validation function)
  // }

  //# Single state management
  const [enteredValues, setEnteredValues] = useState({});

  // Form submission handler
  function handleValuesChange(value, id) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    // Add validation logic here (e.g., using a custom validation function)
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log("Form submitted");
    console.log(enteredValues);
    // Add your form submission logic here
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // onChange={handleEmailChange}
            // value={enteredEmail}
            onChange={(event) =>
              handleValuesChange(event.target.value, "email")
            }
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={handlePasswordChange}
            // value={enteredPassword}
            onChange={(event) =>
              handleValuesChange(event.target.value, "password")
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
