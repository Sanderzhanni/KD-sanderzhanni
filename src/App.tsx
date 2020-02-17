import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./Homepage";

const App: React.FC = () => {
  return (
        <BrowserRouter>
          <Route exact path={"/"} component={Homepage}/>
        </BrowserRouter>
  );
};

export default App;
