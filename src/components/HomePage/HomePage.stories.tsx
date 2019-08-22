import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import HomePage from "./HomePage";

storiesOf('HomePage', module)
  .addDecorator(withKnobs)
  .add('default', () => {

      return (
          <HomePage/>
      );
  });
