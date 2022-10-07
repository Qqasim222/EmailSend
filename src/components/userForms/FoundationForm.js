import React, { useState } from "react";
import classes from "./FoundationForm.module.css";

const FoundationForm = (props) => {
  const [enteredFoundationtEmail, setEnteredFoundationEmail] = useState("");
  const [serviceId, setServiceId] = useState("");

  const inputFoundationEmailHandler = (event) => {
    setEnteredFoundationEmail(event.target.value);
  };
  const inputServiceIdHandler = (event) => {
    setServiceId(event.target.value)
  }

  const submitFoundationHandler = (e) => {
    e.preventDefault();
    props.onAddFoundationUser(enteredFoundationtEmail, serviceId);
    setEnteredFoundationEmail("");
    setServiceId("")
  }
  return (
    <div className={classes.input}>
      <h2 className="pb-3 text-center font-semibold text-gray-600">Foundation Users</h2>
      <form onSubmit={submitFoundationHandler}>
        <div>
          <label className="text-blue-800 text-sm">Email:</label>
          <input
            onChange={inputFoundationEmailHandler}
            value={enteredFoundationtEmail}
            type="email"
            required
          />
        </div>
        <div>
          <label className="text-blue-800 text-sm">Service Id:</label>
          <input
            onChange={inputServiceIdHandler}
            value={serviceId}
            type="service_id"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 ml-4 w-72 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default FoundationForm;
