import React from "react"
import { createShallow, createMount } from "@material-ui/core/test-utils"
import Calendar from "./index"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

const theme = createMuiTheme()

const Wrapped = (props = {}) => (
  <ThemeProvider theme={theme}>
    <Calendar {...props} />
  </ThemeProvider>
)

describe("Calendar", () => {
  let shallow
  let mount

  beforeAll(() => {
    shallow = createShallow()
    mount = createMount()
  })

  afterAll(() => {
    mount.cleanUp()
  })

  it("Should Render", () => {
    const component = shallow(<Wrapped />)

    expect(component).toMatchSnapshot()
  })
})
