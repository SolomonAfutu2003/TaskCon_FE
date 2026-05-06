import React from "react";
import TaskRow from "./TaskRow";

const TaskList = () => {
  return (
    <>
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;

const tasks = [
  {
    id: 1,
    title: "Design homepage mockup",
    description: "Create UI mockups for the main landing page",
    status: "In Progress",
    dueDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Setup database",
    description: "Configure PostgreSQL and create schema",
    status: "Completed",
    dueDate: "2024-01-10",
  },
  {
    id: 3,
    title: "Implement authentication",
    description: "Add JWT-based login system",
    status: "Pending",
    dueDate: "2024-01-20",
  },
  {
    id: 4,
    title: "Write API documentation",
    description: "Document all REST endpoints",
    status: "In Progress",
    dueDate: "2024-01-25",
  },
  {
    id: 5,
    title: "Deploy to production",
    description: "Set up CI/CD pipeline and deploy",
    status: "Pending",
    dueDate: "2024-02-01",
  },
];
