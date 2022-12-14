import { fireEvent, render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import Counter from "./Counter";

describe("Testing Counter Component", () => {

    it("should increase the counter by 1", () => {
    render(<Counter />)
        const counterDisplay = screen.getByTestId("display")
    const incrementButton = screen.getByTestId("add")
    fireEvent.click(incrementButton)
    expect(counterDisplay.textContent).toBe("1");
})

test("should decrease the counter by 1", () => {
    render(<Counter />)
    const counterDisplay = screen.getByTestId("display");
    const decrementButton = screen.getByTestId("minus");
    fireEvent.click(decrementButton)
    expect(counterDisplay.textContent).toBe("-1")
})

})

