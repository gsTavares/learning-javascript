import { useState } from "react"

const MultipleInputForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        country: '',
        title: ''
    })
    const handleChange = (e) => {

        const { name, value } = e.target

        setUser({...user, [name]: value})
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    const { firstName, lastName, country, title } = user;

    return (
        <div className="App">
            <h3>Add student</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleChange} />
                </div>

                <div>
                    <input type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleChange} />
                </div>

                <div>
                    <input type="text"
                        name="country"
                        placeholder="Country"
                        value={country}
                        onChange={handleChange} />
                </div>

                <div>
                    <input type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={handleChange} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default MultipleInputForm