import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import Index from "./pages/Dashboard/Index";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
