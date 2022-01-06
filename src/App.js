
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Brand from "./Brand";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/brands/:brandId" element={<Brand />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
