import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../reducers/tasksReducers";
import { useEffect } from 'react';

function TasksList() {
  const dispacth = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);
  useEffect(() => {
    console.log(loading);
    if (loading === "") {
      dispacth(getTasks());
    }
  }, [loading, dispacth]);

  return (
    <div>
      <h1>Tasks List</h1>
      {loading === "loading" && <div>Loading...</div>}
      {loading === "failed" && <div>Error loading tasks</div>}
      {loading === "success" && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.completed ? "Completed" : "In progress"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksList;
