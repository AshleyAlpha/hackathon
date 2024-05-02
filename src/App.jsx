import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/layout";
import BasicReactHooks from "./components/pages/BasicReactHooks";
import CRUD from "./components/pages/CRUD";
import DataDisplay from "./components/pages/DataDisplay";
import DataManipulation from "./components/pages/DataManipulation";
import DataSelection from "./components/pages/DataSelection";
import Forms from "./components/pages/Forms";
import ImageHandling from "./components/pages/ImageHandling";
import MasterReactRouterDOM from "./components/pages/MasterReactRouterDOM";
import StatePropagation from "./components/pages/StatePropagation";
import Styling from "./components/pages/Syling";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="/BasicReactHooks" element={<BasicReactHooks />} />
            <Route path="/CRUD" element={<CRUD />} />
            <Route path="/DataDisplay" element={<DataDisplay />} />
            <Route path="/DataManipulation" element={<DataManipulation />} />
            <Route path="/DataSelection" element={<DataSelection />} />
            <Route path="/Forms" element={<Forms />} />
            <Route path="/ImageHandling" element={<ImageHandling />} />
            <Route path="/MasterReactRouterDOM" element={<MasterReactRouterDOM />} />
            <Route path="/StatePropagation" element={<StatePropagation />} />
            <Route path="/Styling" element={<Styling />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
