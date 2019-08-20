import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import Dialog from '../layout/Dialog';
import LoginForm from "./LoginForm";

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .add('default', () => {

      return (
          <Dialog visible={true}>
              <LoginForm />
          </Dialog>
      );
  });
