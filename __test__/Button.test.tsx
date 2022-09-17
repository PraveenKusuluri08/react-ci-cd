import Button from "../src/components/button/Button"
import { render, screen } from "@testing-library/react"
import React from "react"
it("it renders button component correctly", async () => {
  render(<Button title={"Test"} />)
  const MyElement = await screen.findByTestId("button")
  expect(MyElement).toBeVisible()
})

it("it check the styles of the button", async () => {
  render(<Button title="Ok" />)
  const element = screen.getByText("Ok")
  const styles = getComputedStyle(element)
  expect(styles.width).toBe("220px")
  expect(styles.outline).toBe("none")
})
