import React, { Component } from "react";
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import connectTennis from '../containers/connectTennis';
import MultiChipSelect from "./MultiChipSelect";
import { playerNames } from '../tennisData/playerNames';


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
    () => {
      this.props.filterSelected(this.state.selectedItem);
      this.props.setSelectedPlayers(this.state.selectedItem);
    }
    )
  }

  removeSelectedItem = item => {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: selectedItem.filter(i => i !== item),
      items: [...items, { name: item, id: item.toLowerCase() }]
    }),
    () =>  this.props.setSelectedPlayers(this.state.selectedItem)
    );
  };

  handleChangeInput = inputVal => {
    const t = inputVal.split(",");
    if (JSON.stringify(t) !== JSON.stringify(this.state.selectedItem)) {
      this.setState({ inputValue: inputVal });
    }
  };

  render() {
    const { selectedItem, items } = this.state;
    return (
      <div id='123' style={{marginBottom: '130px'}}>
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
      </div>
    );
  }
}

const ConnectTennisMultiSelect = connectTennis(MultiSelect);

export default ConnectTennisMultiSelect;
