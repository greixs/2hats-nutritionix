import React from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Grid } from "@material-ui/core";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

export default function QtyPicker(props) {
  const changeValue = direction => {};

  const { servingChangeValue, size, changeQty, servingUnit } = props;

  return (
    <FormControl>
      <ThemeProvider theme={theme}>
        <TextField
          label="Servings"
          value={size}
          color="primary"
          variant="filled"
          aria-describedby="weight-helper-text"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Grid justify="center" alignItems="center">
                  <KeyboardArrowUpIcon
                    onClick={() => changeQty(size + servingChangeValue)}
                  />
                  <KeyboardArrowDownIcon
                    onClick={() => changeQty(size - servingChangeValue)}
                  />
                </Grid>
              </InputAdornment>
            ),
            "aria-label": "weight"
          }}
        />
        <FormHelperText id="weight-helper-text">{servingUnit}</FormHelperText>
      </ThemeProvider>
    </FormControl>
  );
}
