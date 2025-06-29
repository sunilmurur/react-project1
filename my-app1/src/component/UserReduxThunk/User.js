import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getUser } from "../../redux/slices/userSlice";


const User = () => {
    const dispatch = useDispatch();
    const {user, loading, error} = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUser(1));
    },[dispatch])

    if(loading) return <p>loading.....</p>
    if (error) return <p>Error: {error}</p>;
    if (!user) return null;
    return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );

}

export default User;