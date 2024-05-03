import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/pages/Layout";
import LoginForm from "./components/pages/LoginForm";
import BasicReactHooks from "./components/pages/BasicReactHooks";
import CRUD from "./components/pages/CRUD";
import DataDisplay from "./components/pages/DataDisplay";
import DataManipulation from "./components/pages/DataManipulation";
import DataSelection from "./components/pages/DataSelection";
import Forms from "./components/pages/Forms ";
import ImageHandling from "./components/pages/ImageHandling";
import MasterReactRouterDOM from "./components/pages/MasterReactRouterDOM";
import StatePropagation from "./components/pages/StatePropagation";
import Styling from "./components/pages/Styling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Layout" element={<Layout />}>
          <Route path="/Layout/BasicReactHooks" element={<BasicReactHooks />} />
          <Route path="/Layout/CRUD" element={<CRUD />} />
          <Route path="/Layout/DataDisplay" element={<DataDisplay />} />
          <Route path="/Layout/DataManipulation" element={<DataManipulation />} />
          <Route path="/Layout/DataSelection" element={<DataSelection />} />
          <Route path="/Layout/Forms" element={<Forms />} />
          <Route path="/Layout/ImageHandling" element={<ImageHandling />} />
          
          <Route
            path="/Layout/MasterReactRouterDOM"
            element={<MasterReactRouterDOM />}
          />
          
          <Route path="/Layout/StatePropagation" element={<StatePropagation />} />
          <Route path="/Layout/Styling" element={<Styling />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
