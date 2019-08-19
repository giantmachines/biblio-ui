import * as React from 'react';

import { baseClass } from './_details-page.scss';

interface Props {
  counter: number;
}

const DetailsPage = (props: Props) => {
  const { counter } = props;
  return <div className={baseClass}>Details Page {counter}</div>;
};

export default DetailsPage;
