import React from 'react';


const Header = (): React.ReactElement =>(
  <>
    <div className={"nav-container"}>
      <div className={"nav"}>
        <div>
          <img src={process.env.PUBLIC_URL + 'img/lhv.png'} alt="lhv logo" className={"lhv-logo"}/>
        </div>
        <div className={"nav-button"}>Sisene</div>
      </div>
    </div>
  </>
);

export default Header;

