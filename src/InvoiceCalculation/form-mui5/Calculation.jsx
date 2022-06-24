import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  Container,
  LegendForm,
  MyFormButton,
  MyFormInput,
  MyFormInputDisable,
  MyFormLabel,
} from "./form-components/FormStyleComponents";

function Calculation() {
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
    <Container>
      <LegendForm>Calculator monthly electricity bill for customers</LegendForm>

      <Box component="form" width="100%" onSubmit={handleSubmit}>
        <MyFormLabel>Start-up period:</MyFormLabel>
        <MyFormInput
          size="small"
          value={values[startUp]}
          onChange={handleChangeStartUp}
        />
        <MyFormLabel>End-of-term digits:</MyFormLabel>
        <MyFormInput
          size="small"
          value={values[endOfTerm]}
          onChange={handleChangeEndOfTerm}
        />
        <MyFormLabel>The VAT tax:</MyFormLabel>
        <MyFormInput
          size="small"
          value={values[VATtax]}
          onChange={handleChangeVATtax}
        />
        <MyFormLabel>The number of letters:</MyFormLabel>
        <MyFormInputDisable
          size="small"
          disabled
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <MyFormLabel>The total amount payable:</MyFormLabel>
        <MyFormInputDisable
          size="small"
          disabled
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />

        <Box sx={{ display: "flex" }}>
          <MyFormButton type="submit">Submit</MyFormButton>
          <MyFormButton type="button" onClick={handleClear}>
            Clear
          </MyFormButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Calculation;
