import React, {useState} from 'react';
import classNames from "classnames";


const Header = (): React.ReactElement =>{
  const [active] = useState(true);
  return (
    <>
      <div className={"nav-container"}>
        <div className={"nav"}>
          <img src={process.env.PUBLIC_URL + 'img/lhv.png'} alt="lhv logo" className={"lhv-logo mobile"}/>
          <div className={"nav-button mobile"}>Sisene</div>
          <div className={"nav-content"}>
            <div className="nav-left">
              <img src={process.env.PUBLIC_URL + 'img/lhv.png'} alt="lhv logo" className={"lhv-logo"}/>
              <div className="vert-link">
                <ul>
                  <li><a href="TODO" className={classNames({active: active})}>PANK</a></li>
                  <li><a href="TODO">FINANTSPORTAAL</a></li>
                  <li><a href="TODO">INVESTOR</a></li>
                </ul>
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-buttons">
                <button><a href="TODO">AVA KONTO</a></button>
                <button><a href="TODO" className={classNames({active: active})}>SISENE</a></button>
                <button><a href="TODO">EN</a></button>
                <button><a href="TODO">RU</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

