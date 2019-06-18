import React from 'react';
import Select from 'react-select';
import { playerNames } from '../tennisData/playerNames';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla1', label: 'Vanilla2' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry1', label: 'Strawberry2' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default () => (
  <Select
    // defaultValue={[playerNames[0], playerNames[2]]}
    isMulti
    name="colors"
    options={playerNames}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);