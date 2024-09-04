import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleValuesChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    value: passwordValue,
    handleValuesChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => {
    return hasMinLength(value, 6);
  });

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Perform client-side validation
    if (emailIsInvalid || passwordIsInvalid) {
      alert("Please enter a valid email and password");

      return; // Prevent form submission if there are errors
    }

    console.log("Form submitted");
    console.log(enteredValues);

    setEnteredValues({ email: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          error={emailIsInvalid && "Please enter a valid email"}
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
        />
        <Input
          label="Password"
          error={passwordIsInvalid && "Please enter a valid password "}
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
