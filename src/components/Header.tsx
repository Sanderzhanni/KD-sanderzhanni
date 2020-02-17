import React from 'react';
import logo from '../lhv.png';

const Header = (): React.ReactElement =>(
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

export default Header

