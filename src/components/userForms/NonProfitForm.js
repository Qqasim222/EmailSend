import React, { useState } from "react";
import classes from "./NonProfitForm.module.css";

const NonProfitForm = (props) => {
  const [enteredNonProfitName, setEnteredNonProfitName] = useState("");
  const [enteredNonProfitAddress, setEnteredNonProfitAddress] = useState("");
  const [enteredNonProfitEmail, setEnteredNonProfitEmail] = useState("");

  const inputNonProfitNameHandler = (event) => {
    setEnteredNonProfitName(event.target.value);
  };
  const inputNonProfitAddressHandler = (event) => {
    setEnteredNonProfitAddress(event.target.value);
  };
  const inputNonProfitEmailHandler = (event) => {
    setEnteredNonProfitEmail(event.target.value);
  };


  const submitNonProfitHandler = (e) => {
    e.preventDefault();
    props.onAddNonProfitUser(enteredNonProfitName, enteredNonProfitAddress, enteredNonProfitEmail);
    setEnteredNonProfitName("");
    setEnteredNonProfitAddress("");
    setEnteredNonProfitEmail("");
  };

  return (
    <div className={classes.input}>
      <h2 className="pb-3 text-center font-semibold text-gray-600">Non-Profit Users</h2>
      <form onSubmit={submitNonProfitHandler}>
        <div>
          <label className="text-blue-800 text-sm">Name:</label>
          <input onChange={inputNonProfitNameHandler} value={enteredNonProfitName} />
        </div>
        <div>
          <label className="text-blue-800 text-sm">Address:</label>
          <input
            onChange={inputNonProfitAddressHandler}
            value={enteredNonProfitAddress}
            type="text"
            required
          />
        </div>
        <div>
          <label className="text-blue-800 text-sm">Email:</label>
          <input
            onChange={inputNonProfitEmailHandler}
            value={enteredNonProfitEmail}
            type="email"
            required
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 ml-4 w-72 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3" type="submit">
          Add
        </button>
      </form>
    </div>

  );
};

export default NonProfitForm;
