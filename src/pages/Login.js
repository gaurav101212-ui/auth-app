import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = () => {
        if(!email || !password){
          alert("please fill all fields");
          return;
        }

        const userData = {
            email: email,
        };
        dispatch(login(userData));
        navigate("/dashboard");
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">

      <div className="card p-4 shadow" style={{ width: "300px" }}>
        <h3 className="text-center mb-3">Login 🔐</h3>

         <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        </div>
        </div>
    )
}

export default Login;