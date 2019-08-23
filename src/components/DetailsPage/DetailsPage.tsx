import * as React from 'react';

import { baseClass } from './_details-page.scss';
import {Book} from "../books/Books";

interface Props {
}

const DetailsPage = (props: Props) => {
  return (
      <div className={baseClass}>
        <Book />
      </div>
  );
};

export default DetailsPage;
