import FormLogin from "./components/FormLogin";
import Register from "./components/Register";
import ListadoOrdenes from "./components/ListadoOrdenes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App(){
  return(
    <Router>
      <div>
        <Routes>

          <Route exact path="/" element={<FormLogin/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/list" element={<ListadoOrdenes/>} />

        </Routes>             
      </div>
    </Router>
  );
}

export default App;
