import React, {useState,useContext} from "react";
import axios from "axios";
import { api_url } from "../../utils/apiURL";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; // ✅ needed for redirect
import { toast } from "react-toastify";



const Login = () =>{
    const [users,setUsers] = useState({
        email:"",
        password:""
    });

    const { login } = useContext(AuthContext);
    const navigate = useNavigate(); // ✅ allows redirect after login


    
    const handleSubmit = async (e) => {
        e.preventDefault(); // ✅ Stops the form from refreshing the page

        try{
            const response = await axios.post(`${api_url}admin/adminLogin`,users);
            if(response?.data)
            {
                const { token, userDetails } = response.data;
              //  console.log(token);
              //  localStorage.setItem("authToken",token);
               // localStorage.setItem("userDetail",JSON.stringify(userDetails));
                const userData = {
                    ...userDetails,
                    token
                  };
                  login(userData);
                toast.success("Login successful!"); // ✅ toast instead of alert
                navigate("/admin"); // ✅ redirect to dashboard or protected route

                
            }
            

        }catch(error)
        {
            console.error("Login error:", error);
            if(error?.response?.data?.message){
                toast.error(error.response.data.message)
            }else{
                toast.error("Something went wrong please try again ")
            }
           
        }
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit} noValidate>
                <div className="col-md-2">
                    <label>User Name</label>
                </div>
                    <div className="col-md-10">
                    <input type="text"
                        className="email"
                        value={users.email}
                        onChange={(e) => setUsers({...users,email:e.target.value})}
                    />
                    </div>
                <div className="col-md-2">
                    <label>Password</label>
                </div>
            <div className="col-md-10">
                <input
                type="text"
                className="password"
                value={users.password}
                onChange={(e) => setUsers({...users,password:e.target.value})}
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
        </>
    );
}
export default Login;