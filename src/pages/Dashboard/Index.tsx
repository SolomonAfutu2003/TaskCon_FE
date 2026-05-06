import Link from "../../components/Link";

// import React from "react";

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

      <div>
        <section className="grid grid-cols-3 gap-3">
          <div className="bg-white p-4">Total Task</div>
          <div className="bg-white p-4">Total Task</div>
          <div className="bg-white p-4">Total Task</div>
        </section>
      </div>
    </div>
  );
};

export default Index;
