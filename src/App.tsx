import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
        <BrowserRouter>
          <Header/>
            <Route exact path={"/"} component={Homepage}/>
          <Footer/>
        </BrowserRouter>
  );
};

export default App;
