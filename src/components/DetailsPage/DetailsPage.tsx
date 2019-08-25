import * as React from 'react';
import { baseClass } from './_details-page.scss';
import Book from "../books/BookContainer";
import {NavLink} from "react-router-dom";

interface Props {
}

const DetailsPage = (props: Props) => {
  return (
      <div className={baseClass}>
          <div>
              <NavLink to="/" className="arrow--left"> </NavLink>
          </div>
          <Book/>
      </div>
  );
};

export default DetailsPage;
