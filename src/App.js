import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
