import React, { useEffect } from 'react';
import Select from 'react-select';
import { playerNames } from '../tennisData/playerNames';
import connectTennis from '../containers/connectTennis';


const PlayerSearchBar = ({ selectedPlayers,setSelectedPlayers }) => {

  useEffect(() => {
    localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
    return;
  });
  
  const handleOnChange = (selectedPlayers) => {
    setSelectedPlayers(selectedPlayers);
  };

  return (
    <>
      <h4>Choose your favorite players:</h4>
      <h5>(begin typing)</h5>
      <Select
        // defaultValue={[playerNames[0], playerNames[2]]}
        isMulti
        name="colors"
        options={playerNames}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleOnChange}
        value={selectedPlayers}
      />
    </>
  );
};

const ConnectTennisPlayerSearchBar = connectTennis(PlayerSearchBar);

export default ConnectTennisPlayerSearchBar;
