import React from "react";
import TaskList from "./TaskList";

const TaskTable = () => {
  return (
    <table className="w-full h-full border">
      <tr className="bg-amber-300 ">
        <th className="p-2">Title</th>
        <th className="p-2">Title</th>
        <th className="p-2">Title</th>
      </tr>
      <tbody>
        <TaskList />
      </tbody>
    </table>
  );
};

export default TaskTable;
