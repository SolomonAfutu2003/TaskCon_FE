import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface TaskRowProps {
  task: Task;
}

const TaskRow = ({ task }: TaskRowProps) => {
  const { id, title, description, dueDate } = task;

  return (
    <tr className="text-center" key={id}>
      <td className="p-3 border-b">{title}</td>
      <td className="p-3 border-b">{description}</td>
      <td className="p-3 border-b">{dueDate}</td>
    </tr>
  );
};

export default TaskRow;
