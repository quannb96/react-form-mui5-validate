import React, { useEffect, useState } from "react";
import "./InvoiceCalculation.css";

function InvoiceCalculation() {
  const startUp = "startUp";
  const endOfTerm = "endOfTerm";
  const VATtax = "VATtax";

  const [values, setValues] = useState({
    [startUp]: "",
    [endOfTerm]: "",
    [VATtax]: "",
  });
  const [numbers, setNumbers] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    setValues(values);
  }, [values]);

  const handleChangeStartUp = (e) => {
    setValues({
      ...values,
      [startUp]: e.target.value,
    });
  };
  const handleChangeEndOfTerm = (e) => {
    setValues({
      ...values,
      [endOfTerm]: e.target.value,
    });
  };
  const handleChangeVATtax = (e) => {
    setValues({
      ...values,
      [VATtax]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values[(startUp, endOfTerm, VATtax)].length < 1) {
      alert("Invalid");
      return;
    }
    if (values.VATtax >= 100) {
      alert("The VAT tax must be 0 to 100");
      return;
    }
    let newNumbers = parseFloat(values.endOfTerm) - parseFloat(values.startUp);
    setNumbers(newNumbers);
    let price = 0;
    if (parseFloat(values.startUp) >= parseFloat(values.endOfTerm)) {
      alert("End-of-term digits must be greater than Start-up period!");
    } else {
      if (newNumbers > 0 && newNumbers <= 50) {
        price = 1480;
      } else if (newNumbers >= 51 && newNumbers <= 100) {
        price = 1500;
      } else {
        price = 1800;
      }
    }
    let newTotal = parseFloat(
      (newNumbers * price * (100 + parseFloat(values.VATtax))) / 100
    ).toFixed(2);
    setTotal(newTotal);
  };

  const handleClear = () => {
    setValues({
      [startUp]: "",
      [endOfTerm]: "",
      [VATtax]: "",
    });
    setNumbers("");
    setTotal("");
  };

  return (
    <div className="container">
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Calculator monthly electricity bill for customers</h1>

          <label>Start-up period:</label>
          <input
            type="text"
            value={values[startUp]}
            onChange={handleChangeStartUp}
          />
          <br />

          <label>End-of-term digits:</label>
          <input
            type="text"
            value={values[endOfTerm]}
            onChange={handleChangeEndOfTerm}
          />
          <br />

          <label>The VAT tax:</label>
          <input
            type="text"
            value={values[VATtax]}
            onChange={handleChangeVATtax}
          />
          <br />

          <label>The number of letters:</label>
          <input
            type="text"
            disabled
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
          <br />

          <label>The total amount payable:</label>
          <input
            type="text"
            disabled
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          <br />

          <button type="submit">Calculate electricity bill</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      </main>
    </div>
  );
}

export default InvoiceCalculation;
