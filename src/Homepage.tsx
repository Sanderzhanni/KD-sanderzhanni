import React from 'react';
import logo from './lhv.png';

const Homepage = () =>(
  <>
      <div className={"nav-container"}>
          <div className={"nav"}>
              <div>
                  <img src={logo} alt="lhv logo" className={"lhv-logo"}/>
              </div>
              <div className={"nav-button"}>Sisene</div>
          </div>
      </div>
  </>
);

export default Homepage