import React, { Fragment } from "react";
import "./Toolbar.scss";
import Button from "../Atoms/Button";

const Toolbar = ({ city, handleBackpage }) => {
  const onHandleBackPage = () => {
    handleBackpage();
  };
  return (
    <nav className="nav">
      <ul className="menu">
        {city && (
          <Fragment>
            <li className="menu__item">
              <Button onClick={() => onHandleBackPage()}>Atrás</Button>
            </li>
            <li className="menu__item">
                <h1>{city}</h1>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

Toolbar.propTypes = {};

export default Toolbar;
