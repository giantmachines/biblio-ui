import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import Dialog from '../layout/Dialog';
import LoginForm from "./LoginForm";

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .add('default', () => {
      const LOGIN_URL = 'https://library-platform-staging.herokuapp.com/login';
      let visible = true;

      return (
          <Dialog visible={visible}>
              <LoginForm url={LOGIN_URL}
                         onSuccess={() => {visible = false}} />
          </Dialog>
      );
  });
