// import React from "react";
import Link from "../../components/Link";
import TaskList from "./TaskList";

const Index = () => {
  return (
    <div className="space-y-5">
      <section className="flex justify-between items-center">
        <h1 className="text-4xl font-bold uppercase">Dashboard</h1>
        <Link
          linkClassName="bg-blue-400 text-white"
          title="Create New Task"
          route="/create-task"
        />
      </section>

      <div className="space-y-3">
        <section className="grid grid-cols-3 gap-3">
          <div className="bg-white p-4">Total Task</div>
          <div className="bg-white p-4">Total Task</div>
          <div className="bg-white p-4">Total Task</div>
        </section>

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
      </div>
    </div>
  );
};

export default Index;
