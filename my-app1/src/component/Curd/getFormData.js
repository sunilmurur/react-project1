import React, {useState,useEffect} from "react";
import { api_url } from "../../utils/apiURL"
import axios from "axios";
import { Link } from 'react-router-dom'; // make sure you're using react-router


const GetFormDetail = () => {
    const [datas,Setdatas]= useState([]);
    //const [loading, setLoading] = useState(true);

  
       const dataDetail = async () => {
        try{
            const response = await axios.get(`${api_url}user/getAllUser`);
            Setdatas(response?.data?.data)
           // console.log(response?.data?.data || []);
        }catch(error)
        {
            console.error('Error fetching data:', error);
        }
        
       };
    
    useEffect (() => {
        dataDetail();
    },[])
  

    const handleDelete = async (id) => {
        try{
            const proceedError = await axios.delete(`${api_url}user/delete-user/${id}`);
           // Setdatas(proceedError?.data?.data)
            console.log("delete new",proceedError)
            dataDetail();

        }catch(error)
        {
            console.log(error);
        }

    }
    return(
        <>
        <h1>Display Product</h1>
        <table border="1" cellPadding="8" style={{width:"100%", borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>Name </th>
                    <th>Mobile </th>
                    <th>Gender </th>
                    <th>Action</th>
                   
                </tr>
            </thead>
            <tbody>
               { datas.length === 0 ? (
                 <tr>
                        <td colSpan="5" style={{ textAlign: "center" }}>No data found</td>
                        </tr>
                    ) :( datas.map((e) => (
                <tr>
                    <td>{e.name}</td>
                    <td>{e.mobile}</td>
                    <td>{e.gender}</td>
                    <td><Link to={`/user/edit-user/${e._id}`}>Edit</Link></td>
                    <td><button onClick={() => handleDelete(e._id)}>Delete</button></td>
                    
                </tr>
               )))}
            </tbody>
        </table>
        </>
    );
}

export default GetFormDetail;