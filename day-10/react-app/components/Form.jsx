import React, { useState } from "react";

// Forms

const Form = () => {
    const [firstName, setFirstName] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
    }

    return (
        <div>
            <form action="">
                <label htmlFor="firstName">First name: </label>
                <input type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleChange}
                />

                <input type="submit" value="enviar" />
            </form>

            <h1>{firstName}</h1>
        </div>
    )

}

export default Form