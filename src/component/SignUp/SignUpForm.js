import { useState } from "react";

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => {
        console.log(event)
        console.log(typeof event)
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    return (
        <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Name:

                <input data-testid="namechange" type='text' placeholder='Enter your name'
                    value={name}
                    onChange={handleNameChange} />
            </label>
            <label>Email:
                <input type='email' value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={handlePasswordChange} />
            </label>
        </form>
    );
}

export default SignUpForm;