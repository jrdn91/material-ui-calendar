import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import blueGrey from "@material-ui/core/colors/blueGrey"
// Import the storybook libraries
import { storiesOf } from "@storybook/react"
// Import our component from this folder
import Calendar from "./index"

const theme = createMuiTheme({
  palette: {
    text: {
      primary: blueGrey[700]
    }
  },
  overrides: {}
})

storiesOf("Calendar").add("Basic", () => (
  <ThemeProvider theme={theme}>
    <Calendar />
  </ThemeProvider>
))
