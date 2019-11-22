import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import Dashboard from "./Dashboard";

storiesOf('Dashboard', module)
  .addDecorator(withKnobs)
  .add('default', () => {

      return (
          <Dashboard />
      );
  });
