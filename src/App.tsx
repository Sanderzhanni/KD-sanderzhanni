import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import QuickLinks from "./components/QuickLinks";
import NotFound from "./components/NotFound";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <LoginForm/>
    <QuickLinks/>
    <Hero/>
    <Switch>
      <Route exact={true} path="/" component={Homepage} />
      <Route path={"*"} exact={true} component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
