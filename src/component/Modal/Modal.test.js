
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Testing", () => {
    

    it("opens and closes teh modal when the open and close buttons are clicked", () => {
        
        render(<Modal />)

        const openButton = screen.getByText("Open Modal")
        const closeButton = screen.getByText("Close Modal");
        fireEvent.click(openButton);
       const content = screen.getByTestId("data")
       
        expect(content).toBeVisible();
        fireEvent.click(closeButton)
        expect(content).not.toBeVisible()

    })

})


// function sum (a , b){
//     returns a + b
// }

// function testSum(){
//  const result1 = sum(1, 2);
//  assert.strictEqual((result1, 3))
// }