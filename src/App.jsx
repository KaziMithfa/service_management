import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Service from "./components/Service";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};
export default App;
