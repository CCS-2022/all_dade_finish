import React, { useState } from "react";
import "./Contact.css";

function Contact(props) {
  const [toSend, setToSend] = useState({
    from: "",
    subject: "Important Message",
    body: ""
  });

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
    // setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  function emailInputChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  function nameInputBlurHandler(event) {
    setEnteredNameTouched(true);
  }

  function emailInputBlurHandler(event) {
    setEnteredEmailTouched(true);
  }

  async function formSubmissionHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }
    // console.log(toSend)
    
    props.onSendInfo(toSend);

    // console.log(enteredName);
    // console.log(enteredEmail);

    setToSend({
      from: "",
      subject: "Important Message",
      body: ""
    });
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? " invalid" : " ";

  const emailInputClasses = emailInputIsInvalid ? " invalid" : " ";

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <section className="contact-section" id="contact">
      <form onSubmit={formSubmissionHandler}>
        <div className="container-fluid">
          <h3 className="contact-heading">Contact Us</h3>
          <div className="row">
            <div className="col-lg-6 label-header">
              <div className={nameInputClasses}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="(Required)"
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={enteredName}
                />
                {nameInputIsInvalid && (
                  <p className="error-text">Name Must Not Be Empty.</p>
                )}
              </div>
            </div>
            <div className="col-lg-6 label-header">
              <div className={emailInputClasses}>
                <label htmlFor="emailAddress" className="form-label">
                  Email address{" "}
                </label>
                <input
                  type="email"
                  name="from"
                  className="form-control"
                  id="emailAddress"
                  placeholder="(Required)"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={toSend.from}
                />
                {emailInputIsInvalid && (
                  <p className="error-text">Please Enter a valid email.</p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 label-header">
              <div className="mb-3">
                <label htmlFor="body" className="form-label">
                  Please add details of design ideas…
                </label>
                <textarea
                  name="body"
                  className="form-control"
                  rows="10"
                  value={toSend.body}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-button">
          <button disabled={!formIsValid} className="contact-us__button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default Contact;
