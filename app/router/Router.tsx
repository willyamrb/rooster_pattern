import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../views/index/Index";
import Page from "./routes";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Page.INDEX} element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
