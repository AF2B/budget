import React, { useState } from 'react';
import Switch from 'react-switch';

import {
  ToggleLabel,
  Container,
  ToggleSelector,
} from './styles';

const Toggle: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked);
    console.log(`Switched: ${checked}`);
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        onColor='#FFB800'
        checked={isChecked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleToggleChange}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
