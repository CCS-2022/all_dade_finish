import React, { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import "./Contact.css";

export default function Contact() {
  // ==================================================== STATE =================================================================

  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [modalIsShown, setModalIsShown] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredBody, setEnteredBody] = useState("");

  // ========================================================== VALIDITY CSS CODE ================================================
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredPhoneIsValid = enteredPhone.trim() !== "";
  const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched;
  const enteredPhoneIsValidTwo = enteredPhone.trim().length === 10;
  const phoneInputIsInvalidTwo = !enteredPhoneIsValidTwo && enteredPhoneTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
    formIsValid = true;
  }

  //=========================================================== PAYLOAD ===============================================================

  let info = {
    from: enteredEmail,
    name: enteredName,
    subject: "Important Message",
    body: enteredBody,
    phone: enteredPhone,
  };

  // ========================================================= CHANGE HANDLER FUNCTIONS ================================================

  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function phoneInputChangeHandler(event) {
    setEnteredPhone(event.target.value);
  }

  function emailInputChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function bodyInputChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function nameInputBlurHandler(event) {
    setEnteredNameTouched(true);
  }

  function phoneInputBlurHandler(event) {
    setEnteredPhoneTouched(true);
  }

  function emailInputBlurHandler(event) {
    setEnteredEmailTouched(true);
  }

  function showModalHandler() {
    setModalIsShown(true);
  }

  function hideModalHandler() {
    setModalIsShown(false);
  }

  // ================================================ FORM SUBMISSION HANDLER ===========================================================

  async function formSubmissionHandler(event) {
    setIsLoading(true);
    // setError(null);
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredPhoneIsValid) {
      return;
    }

    try {
      const response = await fetch("https://emailapi.cloudconsultingandsolutions.com/send", {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json",
          "CF-Access-Client-Id": "b3715a15e2cf684664b6ac7bbfb935f9.access",
          "CF-Access-Client-Secret":
            "b6568b710a67199c90fcb4e58b7d781613b0b6be0561874e3e0cfbc1342a5bec",
        },
      });

      // const data = await response.json();

      if (response.status !== 200) {
        console.log("Status code: " + response.status);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }

    info = {
      from: "",
      name: "",
      subject: "Important Message",
      body: "",
      phone: "",
    };
    // ============= Reseting Input Fields ===============
    setEnteredName("");
    setEnteredEmail("");
    setEnteredBody("");
    setEnteredPhone("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredPhoneTouched(false);
  }

  // =========================================================== CSS Variables ===========================================================

  const nameInputClasses = nameInputIsInvalid ? " invalid" : " ";
  const emailInputClasses = emailInputIsInvalid ? " invalid" : " ";
  const phoneInputClasses = phoneInputIsInvalid ? " invalid" : " ";
  const phoneInputClassesTwo = phoneInputIsInvalidTwo ? " invalid" : " ";

  let content = <p></p>;

  if (isLoading === false) {
    content = (
      <h1 className="content-message" style={{ color: "red" }}>
        Something went wrong.
      </h1>
    );
  }

  if (isLoading === true) {
    content = (
      <h1 className="content-message" style={{ color: "green" }}>
        Message Sent!
      </h1>
    );
  }
  return (
    <Fragment>
      {modalIsShown && (
        <Modal onClose={hideModalHandler}>
          {content}
          <button className="close-button" onClick={hideModalHandler}>
            Close
          </button>
        </Modal>
      )}
      <section className="contact-section" id="contact">
        <form onSubmit={formSubmissionHandler}>
          <div className="container-fluid">
            <h3 className="contact-heading">Contact Us</h3>
            <div className="row">
              <div className="col-lg-6 label-header">
                <div className={nameInputClasses}>
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-text"
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
                <div className={`${phoneInputClasses} ${phoneInputClassesTwo}`}>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-text"
                    id="name"
                    placeholder="(Required)"
                    onChange={phoneInputChangeHandler}
                    onBlur={phoneInputBlurHandler}
                    value={enteredPhone}
                  />
                  {phoneInputIsInvalid && (
                    <p className="error-text">Phone Number Required.</p>
                  )}
                  {phoneInputIsInvalidTwo && (
                    <p className="error-text">Invalid Phone Input...</p>
                  )}
                </div>
              </div>
              <div className="col-lg-12 label-header">
                <div className={emailInputClasses}>
                  <label htmlFor="emailAddress" className="form-label">
                    Email address{" "}
                  </label>
                  <input
                    type="email"
                    name="from"
                    className="form-control form-text"
                    id="emailAddress"
                    placeholder="(Required)"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
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
                    value={enteredBody}
                    onChange={bodyInputChangeHandler}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="contact-button__two">
              <button
                disabled={!formIsValid}
                className="contact-us__button"
                onClick={showModalHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
}
