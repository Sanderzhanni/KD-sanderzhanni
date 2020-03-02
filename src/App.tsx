import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
        <BrowserRouter>
            <div className={"warning"}>SWITCH TO MOBILE VIEW</div>
          <Header/>
            <Switch>
                <Route exact path={"/"} component={Homepage}/>
                {/*<Route path={"notfound"} component={}/>*/}
            </Switch>
          <Footer/>
        </BrowserRouter>
  );
};

export default App;
