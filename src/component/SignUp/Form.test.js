import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("Sign up form component", () => {
    it("should allow users to enter their name, email and password", () => {
        render(<SignUpForm />)

        const nameInput = screen.getByLabelText("Name:")
        const emailInput = screen.getByLabelText("Email:")
        const passwordInput = screen.getByLabelText("Password:")
        const nameChange = screen.getByTestId("namechange")

        fireEvent.change(nameChange, { target: { value: "React"}})
        fireEvent.change(emailInput, { target: { value: "test@gmail.com"}})
        
        expect(nameChange.value).toBe("React")
        expect(emailInput.value).toBe("test@gmail.com")
    })
})
