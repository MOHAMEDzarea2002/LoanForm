import { useState } from "react";
import "../form.css";
import Modal from "./model";
import InputComponent from "./inputComponent";
export default function LoanForm({ titel }) {
  // State to hold the error message
  const [ErrorMessage, setErrorMessage] = useState(null);
  // State to control the visibility of the modal
  const [showModeal, setShowModal] = useState(false);
  // State to hold the loan input values
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  // Activate a button by a condition operation
  const btnisDsabled =
    loanInput.name === "" ||
    loanInput.phoneNumber === "" ||
    loanInput.age === "";

  // Define the button classes based on the condition
  let BtnClasses = "";

  if (btnisDsabled) {
    BtnClasses = "disabled";
  } else {
    BtnClasses = "enabled";
  }
  // Handle form submission
  function handleFormSumbit(event) {
    event.preventDefault();
    setErrorMessage(null);

    const { age, name, phoneNumber } = loanInput;
    const ageNume = parseInt(age);
    // Validate the input values
    if (ageNume < 18 || ageNume > 100) {
      setErrorMessage("Age must be between 18 and 100.");
      // Reset the input values
      setLoanInput({
        ...loanInput,
        age: "",
      });
    } else if (name.length < 8) {
      setErrorMessage("Name must be at least 8 characters long.");
      // Reset the input values
      setLoanInput({ ...loanInput, name: "" });
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone number Fromat Is Incorrect.");
      // Reset the input values
      setLoanInput({ ...loanInput, phoneNumber: "" });
    }
    // If all validations pass, reset the error message and show the modal
    setShowModal(true);
  }
  // Handle click outside the modal to close it
  function handleDivClick(event) {
    if (event.target.id === "model") {
      setShowModal(false);
    }
  }
  function handelphoneNumberChange(value) {
    setLoanInput({ ...loanInput, phoneNumber: value });
  }
  function handelNameChange(value) {
    setLoanInput({ ...loanInput, name: value });
  }

  function handelAgeChange(value) {
    setLoanInput({ ...loanInput, age: value });
  }
  // Render the loan application form
  // and the modal for success or error messages
  return (
    <div className="LoanForm flex" onSubmit={handleDivClick}>
      {<h1 className="titel">{titel}</h1>}
      <form className="flex" style={{ flexDirection: "column" }}>
        <h1>Loan Application Form</h1>
        <hr></hr>
        <InputComponent
          inputName={"Name"}
          value={loanInput.name}
          handleChange={handelNameChange}
        />

        <br />
        <InputComponent
          inputName={"PhoneNumber"}
          value={loanInput.phoneNumber}
          handleChange={handelphoneNumberChange}
        />

        <br />
        <InputComponent
          inputName={"age"}
          value={loanInput.age}
          handleChange={handelAgeChange}
        />

        <br />
        <label htmlFor="employee">Ary youe an employee</label>
        <input
          type="checkbox"
          name="employee"
          checked={loanInput.isEmployee}
          onChange={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />
        <label htmlFor="salary" style={{ marginBottom: "5px" }}>
          Salary:
        </label>
        <select
          className="selectslary"
          value={loanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salaryRange: event.target.value });
          }}
        >
          <option value="">Select Salary Range</option>
          <option value="1000">less than 1000$</option>
          <option value="2000">less than 2000$</option>
          <option value="3000">less than 3000$</option>
        </select>
        <button
          className={BtnClasses}
          id="bt-submit"
          type="submit"
          disabled={btnisDsabled}
          onClick={handleFormSumbit}
        >
          Submit
        </button>
      </form>
      <Modal
        ErrorMessage={ErrorMessage}
        isvisible={showModeal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
}
