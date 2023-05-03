import React, { useState } from 'react';
import Switch from 'react-switch';

import { Container, ToggleLabel, ToggleSelector } from './styles';

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked);
    console.log(`Switched: ${checked}`);
  };

  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSelector
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
};

export default Toggle;
