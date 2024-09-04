import { useState } from "react";

export default function Login() {
  const [didEdit, setDidEdit] = useState({ email: false, password: false });
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
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid =
    didEdit.email &&
    enteredValues.email !== "" &&
    !enteredValues.email.includes("@");

  // Form submission handler
  function handleValuesChange(value, id) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    // Add validation logic here (e.g., using a custom validation function)
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [id]: false }));
  }

  function handleInputBlur(id) {
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [id]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Perform client-side validation
    if (
      enteredValues.email === "" ||
      enteredValues.password === "" ||
      emailIsInvalid
    ) {
      alert("Please enter a valid email and password");

      return; // Prevent form submission if there are errors
    }

    // Perform server-side validation
    // if (/* server-side validation fails */) {
    //   return; // Prevent form submission if server-side validation fails
    // }

    // Submit the form to the server
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: enteredValues.email,
    //     password: enteredValues.password,
    //   }),
    // });
    // if (!response.ok) {
    //   throw new Error("Server-side validation failed");
    // }

    console.log("Form submitted");
    console.log(enteredValues);

    setEnteredValues({ email: "", password: "" });
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
            onBlur={() => handleInputBlur("email")}
            // onChange={handleEmailChange}
            // value={enteredEmail}
            onChange={(event) =>
              handleValuesChange(event.target.value, "email")
            }
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={handlePasswordChange}
            // value={enteredPassword}
            onBlur={() => handleInputBlur("password")}
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
