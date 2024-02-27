import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function TemperatureConverter() {
  const [flag, setFlag] = useState(false);
  const [degree, setDegree] = useState(0);
  const [convertedDegree, setConvertedDegree] = useState();

  function getConverted(event) {
    event.preventDefault();
    setDegree(event.target.value);
  }

  function submitDegreeNew(event) {
    event.preventDefault();
    setConvertedDegree(degree * 2 - degree * 2 * 0.1 + 32);
    // setDegree(0);
  }
  function switchConverter(event) {
    event.preventDefault();
    if (!flag) {
      setFlag(true);
      let temp = degree;
      setDegree(convertedDegree);
      setConvertedDegree(temp);
      event.target.value = convertedDegree;
    } else {
      setFlag(false);
      let temp = degree;
      setDegree(convertedDegree);
      setConvertedDegree(temp);
    }
  }
  function converterToCelsiy(event) {
    event.preventDefault();
    setConvertedDegree((degree - 32) * 0.5);
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={degree}
        onChange={(e) => getConverted(e)}
        type="number"
        id="filled-basic-c"
        label={flag ? "Фаренгйет" : "Цельсий"}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button onClick={!flag ? submitDegreeNew : converterToCelsiy} variant="outlined">
        Конвертировать
      </Button>
      <Button onClick={switchConverter} variant="outlined">
        Поменять
      </Button>
      <TextField
        value={convertedDegree}
        onChange={(e) => getConverted(e)}
        type="number"
        id="filled-basic-f"
        label={flag ? "Цельсий" : "Фаренгйет"}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

export default TemperatureConverter;
