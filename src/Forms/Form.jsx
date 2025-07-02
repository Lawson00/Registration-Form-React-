import React, { useEffect, useRef, useState } from "react";
import "../Forms/Form.css";
function Form() {
  const [target, setTarget] = useState(false);

  function loginTarget() {
    setTarget(true);
    nameInput.current.style.display = "none";
  }
  function signupTarget() {
    setTarget(false);
    nameInput.current.style.display = "block";
  }

  useEffect(() => {
    // input.target.value = "";
    console.log("Who Clicked me", nameInput.current);
  }, [target]);
  const nameInput = useRef();
  // ada ada the terrorist sister
  return (
    <div className="form-container">
      <div className="form-cont">
        <h1>{target ? "Log In" : "Sign Up"}</h1>
        <div className="input-list">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter name"
            ref={nameInput}
          />
          <input type="email" name="" id="" placeholder="Enter Email" />
          <input type="password" name="" id="" placeholder="Enter Password" />
        </div>
        <div className="btns">
          <button onClick={signupTarget} className={target ? "" : "activeBtn"}>
            Sign Up
          </button>
          <button onClick={loginTarget} className={target ? "activeBtn" : ""}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
