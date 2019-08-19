import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import DetailsPage from './DetailsPage';

storiesOf('DetailsPage', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const counter = number('counter', 0);

    return <DetailsPage counter={counter} />;
  });
