import React, {use, useEffect,useState} from "react";
import axios from "axios";
import { api_url } from "../../utils/apiURL";
import { useParams } from "react-router-dom";

const EditForm = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        mobile:"",
        email:"",
        gender:"",
        country:""
    });
    const country = [
    
        {id : 1, name: 'India'},
        {id : 2, name : 'USA'},
        {id : 3, name : 'UK'}

  ];
    
    useEffect (() => {
        const getResp = async () => {
            try{
                const  response = await axios.get(`${api_url}user/edit-user/${id}`)
                console.log(response?.data?.data);
                setUser(response?.data?.data);
            }catch(error){
                console.log(error);
            }
        };
        getResp();
    },[id])
    const handleSubmit = async ()=> {
        try{
            const update_data = await axios.post(`${api_url}user/updateUser`,user)
        }catch(error)
        {
            console.log(error);
        }
    }
   
    return(
        <>
        <form onSubmit={handleSubmit} noValidate
        >
            <label>Name</label>
            <input 
            type="text"
            className="name"
            value={user?.name}
            onChange={(e) => setUser({...user,name:e.target.value})}
            />
            <input 
            type="text"
            className="mobile"
            value={user?.mobile}
            onChange={(e) => setUser({...user,mobile:e.target.value})}
            />
            <input
            type="text"
            className="email"
            value={user.email}
            onChange={(e) => setUser({...user,email:e.target.value})}
            />
            <select
                value={user.country}
                onChange={(e) => setUser({...user,country:e.target.value})}
            >
                
                {country.map ((e) => (
                    <option key={e.id} value={e.id}>{e.name}</option>
                ))}
            </select>
            <label>
            <input
            type="checkbox"
            name="gender"
            value="male"
            checked={user.gender === 'male'}
            onChange={(e) => setUser({...user, gender:e.target.value})}
            />Male</label>

            <label><input
            type="checkbox"
            name="gender"
            value="female"
            checked={user.gender === 'female'}
            onChange={(e) => setUser({...user,gender:e.target.value})}
            />Female</label>
            <button type="submit">Submit</button>

        </form>
        </>
    );
}
export default EditForm;