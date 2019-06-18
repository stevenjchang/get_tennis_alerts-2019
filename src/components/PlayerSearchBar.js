import React from 'react';
import Select from 'react-select';
import { playerNames } from '../tennisData/playerNames';
import connectTennis from '../containers/connectTennis';

const values = [
  {value: 'val', label: 'label'}
]


const PlayerSearchBar = ({ setSelectedPlayers }) => {
  const handleOnChange = (selectedPlayers) => {
    setSelectedPlayers(selectedPlayers);
  }

  return (
    <>
      <h4>Type your favorite players:</h4>
      <Select
        // defaultValue={[playerNames[0], playerNames[2]]}
        isMulti
        name="colors"
        options={playerNames}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleOnChange}
      />
    </>
  )
};

const ConnectTennisPlayerSearchBar = connectTennis(PlayerSearchBar);

export default ConnectTennisPlayerSearchBar;
