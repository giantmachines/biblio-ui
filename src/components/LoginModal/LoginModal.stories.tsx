import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import LoginModal from './LoginModal';

storiesOf('LoginModal', module)
  .addDecorator(withKnobs)
  .add('default', () => {

      return (<LoginModal visible={true} />);
  });
