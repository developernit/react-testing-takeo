import { useState } from "react"

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          
          {isOpen && (
              <div>
                  <h1 data-testid="data">Hello World</h1>
                  <p> This is a paragraph</p>
              </div>
          )}

          <button onClick={()=> setIsOpen(false)}>Close Modal</button>
      </>
  )
}

export default Modal