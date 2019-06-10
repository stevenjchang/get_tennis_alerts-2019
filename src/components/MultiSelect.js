import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import connectTennis from '../containers/connectTennis';
import MultiChipSelect from "./MultiChipSelect";
import { playerNames } from '../tennisData/playerNames';
import SignUpForm from './SignUpForm';


class MultiSelect extends Component {
  state = {
    items: playerNames,
    selectedItem: []
  };

  handleChange = selectedItem => {
    if (this.state.selectedItem.includes(selectedItem)) {
      this.removeSelectedItem(selectedItem);
    } else {
      this.addSelectedItem(selectedItem);
    }
  };

  addSelectedItem(item) {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: [...selectedItem, item],
      items: items.filter(i => i.name !== item)
    }),
    () => this.props.filterSelected(this.state.selectedItem)
    )
  }

  removeSelectedItem = item => {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: selectedItem.filter(i => i !== item),
      items: [...items, { name: item, id: item.toLowerCase() }]
    }));
  };

  handleChangeInput = inputVal => {
    const t = inputVal.split(",");
    if (JSON.stringify(t) !== JSON.stringify(this.state.selectedItem)) {
      this.setState({ inputValue: inputVal });
    }
  };

  render() {
    const { selectedItem, items } = this.state;
    this.props.setSelectedPlayers([1,3])
    return (
      <>
        <FormGroup>
          <FormControl>
            {/* <FormLabel>Find a Star Wars character</FormLabel> */}
            <MultiChipSelect
              onInputValueChange={this.handleChangeInput}
              inputValue={this.state.inputValue}
              availableItems={items}
              selectedItem={selectedItem}
              onChange={this.handleChange}
              onRemoveItem={this.removeSelectedItem}
            />
          </FormControl>
        </FormGroup>
        <SignUpForm
          playerList={selectedItem}
        />
      </>
    );
  }
}

const ConnectTennisMultiSelect = connectTennis(MultiSelect);

export default ConnectTennisMultiSelect;
