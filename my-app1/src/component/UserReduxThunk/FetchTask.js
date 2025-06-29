import React, {useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { FetchTask } from "../../redux/slices/fetchTaskSlice";

 const FetchTasks = () => {
    const dispatch = useDispatch();
        const tasks = useSelector((state) => state.task);

  useEffect(() => {
        dispatch(FetchTask());
    }, [dispatch]);

      return (
        <ul>
            {tasks?.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
 }
 export default FetchTasks