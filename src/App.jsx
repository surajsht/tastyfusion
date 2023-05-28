import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path="/recipe/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
