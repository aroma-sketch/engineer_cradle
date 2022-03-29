import "./App.css";
import HomePage from "./main/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContactsList} from "./main/ContactsList";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ContactsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
