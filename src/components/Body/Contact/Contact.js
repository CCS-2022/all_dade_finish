import React, { useState } from "react";
import "./Contact.css";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Alexey",
    message: "",
    reply_to: "",
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
    setToSend({ ...toSend, [event.target.name]: event.target.value });
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

  function formSubmissionHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    send("service_93ylmi8", "template_gi2iadp", toSend, "MrFAqA2pQJUwWOSoF")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    console.log(enteredName);
    console.log(enteredEmail);

    setToSend({
      from_name: "",
      to_name: "Alexey",
      message: "",
      reply_to: "",
    });
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? " invalid" : " ";

  const emailInputClasses = emailInputIsInvalid ? " invalid" : " ";

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <section className="contact-section" id='contact'>
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
                  name="from_name"
                  className="form-control"
                  id="name"
                  placeholder="(Required)"
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                  value={toSend.from_name}
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
                  name="reply_to"
                  className="form-control"
                  id="emailAddress"
                  placeholder="(Required)"
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  value={toSend.reply_to}
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
                  name="message"
                  className="form-control"
                  rows="10"
                  value={toSend.message}
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
