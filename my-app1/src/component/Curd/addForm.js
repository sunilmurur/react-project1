import React, { useState } from "react";
import { api_url } from "../../utils/apiURL";
import GetFormDetail from '../../component/Curd/getFormData'


const AddForm = () => {
  const [fromData, setFromData] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
   country: ""
  });
  const country = [
    
        {id : 1, name: 'India'},
        {id : 2, name : 'USA'},
        {id : 3, name : 'UK'}

  ];
  const [pass, setPass]= useState('');
  const [errors, setErrors] = useState({});
  const validate = () =>{
    const newErrors = {};
    if(!fromData.name.trim()) newErrors.name = "Name Required";
    if(!fromData.mobile.match(/^\d{10}$/)) newErrors.mobile =" Mobile Must be 10 Degit";
    if(!fromData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Email is In Valid";
    if(!fromData.gender) newErrors.gender = "Gender is Required";
    if(!fromData.country) newErrors.country = "Country is Required";
    setErrors(newErrors);
  //  return Object.keys(newErrors).length === 0;

  }
const handleSubmit = async (e)=> {
  e.preventDefault(); // prevent default form behavior
  if (!validate()) return;
    try{
        const response = await fetch(`${api_url}user/addUser`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fromData),
        });
        alert("Form submitted!");
        console.log(fromData);

    }catch(error)
    {
        console.log(error)
    }
}
  return (
    <>
    <div className="container">
    <div className="row justify-content-center">
    <h2 className="mb-4">User Registration Form</h2>

    <form onSubmit={handleSubmit} noValidate>
      
      <div className="col-mb-3">
      <label className="form-label">Name</label>
      <input
        type="text"
        className="name"
        placeholder="Enter name"
        value={fromData.name}
        onChange={(e) =>
          setFromData({ ...fromData, name: e.target.value })
        }
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div className="col-mb-3">
      <label className="form-label">Mobile</label>
      <input
      type="text"
      placeholder="Mobile"
      maxLength={10}
      value={fromData.mobile}
      onChange={(e) => setFromData({...fromData,mobile:e.target.value})}
      />
      {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
        </div>
        <div className="col-mb-3">
      <label className="form-label">Email</label>
      <input
      type="text"
      value={fromData.email}
      placeholder="Email"
      onChange={(e) => setFromData({...fromData,email:e.target.value})}
        />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div className="col-mb-3">
        <label className="form-label ">Country</label>

       <select
        value={fromData.country}
        onChange={(e)=> setFromData({...fromData,country:e.target.value})}
        >
      {country.map((e) => <option id={e.id} value={e.id}>{e.name}</option>)}
      </select> 
      {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
      </div>
      
      <div className="col-mb-3">
      <label className="form-label d-block">Gender</label>
      <input
      type="radio"
        name="gender"
      value="male"
      checked={fromData.gender==="male"}
      onChange={(e) => setFromData({...fromData,gender:e.target.value})}

      />            <label className="form-check-label">Male</label>

      <label>
        <input
      type="radio"
        name="gender"
      value="female"
      checked={fromData.gender==="female"}
      onChange={(e) => setFromData({...fromData,gender:e.target.value})}

      />Female </label>
      {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
        </div>
      <input
      type="text"
      className="pass"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      />
       <button type="submit" className="btn btn-primary">Submit</button>
       
      </form>
      </div>
       </div>
      <GetFormDetail />
    </>
  );
};

export default AddForm;
