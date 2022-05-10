import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Atoms from "@pages/Atoms";
import Molecules from "@pages/Molecules";
import "./styles/global.css";

const App = () => {
   library.add(fas);
   return (
      <Router>
         <Routes>
            <Route exact path="/atoms" element={<Atoms />} />
            <Route exact path="/molecules" element={<Molecules />} />
         </Routes>
      </Router>
   );
};

export default App;
