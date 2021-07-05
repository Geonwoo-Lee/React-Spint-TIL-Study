import React from 'react';
import Button from './Button';

function Buttons() {
  return (
    <>
      <Button>Default Button</Button>
      <Button color="green" background="pink">Green Button</Button>
      <Button primary>Primary Button</Button>
    </>
  );
}

export default Buttons;