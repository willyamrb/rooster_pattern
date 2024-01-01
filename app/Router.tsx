import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/index/Index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
