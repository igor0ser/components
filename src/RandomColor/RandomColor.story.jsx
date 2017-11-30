/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import RandomColor from './RandomColor';

const stories = storiesOf('RandomColor', module);
stories.addDecorator(withKnobs);
stories.add('test story', () => {
  const header = text('Text', 'It is test component story');
  return (
    <RandomColor header={header} />
  );
});

