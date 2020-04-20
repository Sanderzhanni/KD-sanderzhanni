import *  as React from 'react';
import classNames from "classnames";

const LoginForm = (): React.ReactElement => {
  const [ selected, setSelected ] = React.useState(3);

  const select = (number: number): void => {
    setSelected(number);
  };
  return (
    <>
      <div className="login-form">
        <ul>
          {/*not the correct way to select elements, but its fine here*/}
          <li onClick={(): void => select(1)}>
            <a href="javascript:void(0)" className={classNames("border-start", {selected: selected === 1})}>ID-kaart</a>
          </li>
          <li onClick={(): void => select(2)}>
            <a href="javascript:void(0)" className={classNames({selected: selected === 2})}>Mobiil-ID</a>
          </li>
          <li onClick={(): void => select(3)}>
            <a href="javascript:void(0)" className={classNames({selected: selected === 3})}>Smart-ID</a>
          </li>
          <li onClick={(): void => select(4)}>
            <a href="javascript:void(0)" className={classNames({selected: selected === 4})}>PIN-kalkulaator</a>
          </li>
          <li onClick={(): void => select(5)}>
            <a href="javascript:void(0)" className={classNames("border-end", {selected: selected === 5})}>Salasõna</a>
          </li>
        </ul>
        <div className={"username"}>
          <input type="text" placeholder={"Kasutajanimi"}/>
        </div>
        <div className="login-btn">
          <button>Sisene</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;