import React,{useState} from 'react'
import "./App.css"
import Register from "./Register";
import Licitatii from "./Licitatii";

const Login=(props)=>{
    const [emailLog,setEmailLog] = useState("");
    const [passwLog,setPasswLog] = useState("");

    const[dataInput, setDataInput]=useState("");
    const submitThis=()=>{
        const info={emailLog:emailLog,passwLog:passwLog};
        setDataInput([info]);
    }
    return(
        <div className="app">
            <h1>LiciTOT</h1>
            <form onSubmit={submitThis}>
            <div className="input-container">
                <label>Email </label>
                    <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={emailLog} onChange={(e)=>setEmailLog(e.target.value)}
                            required
                           />

                      </div>
                      <div className="input-container">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={passwLog} onChange={(e)=>setPasswLog(e.target.value)}
                            required />

                      </div>
                      <div className="button-container">
                          <button className="link-btn" type="buton">Log in</button>

                      </div>
                    </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Create an account</button>
                  </div>

    )

}

export default Login