/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"
import React from "react"
import Home from "../src/components/Home"

it("renders sample h1 tag", () => {
  render(<Home />)
  const myElement = screen.getByText(/Home/)
  expect(myElement).toBeInTheDocument()
})
