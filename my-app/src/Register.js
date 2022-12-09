import React,{useState} from 'react'
import "./App.css"

const Register=(props)=>{

    const [email,setEmail] = useState("");
    const [passw,setPassw] = useState("");
    const [name,setName] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="app">
            <h1>LiciTOT</h1>
            <form onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <div className="input-container">
                    <label>Email </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        required />

                </div>
                <div className="input-container">
                    <label>Name </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={passw} onChange={(e)=>setPassw(e.target.value)}
                        required />

                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={name} onChange={(e)=>setName(e.target.value)}
                        required />

                </div>
                <div className="button-container">
                    <button className="button" onClick={() => alert("Inregistrarea a avut succes!")} type="buton">Register</button>
                </div>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Log In</button>
        </div>
    )
}

export default Register