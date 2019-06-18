import React from 'react';
import Select from 'react-select';
import { playerNames } from '../tennisData/playerNames';


const PlayerSearchBar = () => (
  <>
    <h4>Type your favorite players:</h4>
    <Select
      // defaultValue={[playerNames[0], playerNames[2]]}
      isMulti
      name="colors"
      options={playerNames}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  </>
);

export default PlayerSearchBar;
