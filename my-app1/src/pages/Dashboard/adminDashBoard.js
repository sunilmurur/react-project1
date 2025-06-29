import React from "react";
import { useAuth } from '../../context/AuthContext'


const AdminDashBoard = () => {
    const { user, logout } = useAuth();

return(
    <><h2>Admin DashBoard</h2>
      <h1>Welcome {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </>
);
}
export default AdminDashBoard;