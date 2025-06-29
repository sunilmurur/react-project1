import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Increment,Decrement,Reset,ConditionalAdd } from "../../redux/slices/counter.slice";
import Brand from './../Brand/Brand';

const Counter = () => {
    const [input,setInput] = useState(0)
    const dispatch  = useDispatch();
    const Updateincerment = () => {
        dispatch(Increment())
    }
    const Updatedecrement = () => {
        dispatch(Decrement())
    }
    const UpdateReset = () => {
        dispatch(Reset())
    }
    const UpdateConditionalAdd = () => {
        dispatch(ConditionalAdd(input))
    }
    const count = useSelector((state) => state.counter.value);

return(
    <>
        <button onClick={Updateincerment}>+</button>
        <h3>Count:{count}</h3>
        <button onClick={Updatedecrement}>-</button>
        <button onClick={UpdateReset}>Reset</button>
        <br></br>
        <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Value"
        />
        <button onClick={UpdateConditionalAdd}>Add</button>
     
    </>
);
}
export default Counter
