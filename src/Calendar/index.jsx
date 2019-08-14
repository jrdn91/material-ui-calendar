import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { StylesProvider, createGenerateClassName } from "@material-ui/styles"
import styles from "./styles"

const generateClassName = createGenerateClassName({
  productionPrefix: "mu-cal"
})

const useStyles = makeStyles(styles, {
  name: "MuiRte-Editor"
})



export const CalendarComponent = props => {
  const classes = useStyles()

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div><Typography>Hello World</Typography></div>
    </StylesProvider>
  )
}

CalendarComponent.propTypes = {
  
}

CalendarComponent.defaultProps = {
  
}

export default CalendarComponent
