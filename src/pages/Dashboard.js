import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

function Dashboard() {
  const dispatch = useDispatch();

  // Redux se data lo
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">

      <div className="card p-4 shadow text-center" style={{ width: "300px" }}>
        
        <h3 className="mb-3">Dashboard 📊</h3>

        <p>Welcome 👋</p>

        <h5>{user?.email}</h5>

        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;