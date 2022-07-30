import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import React from 'react';

class DeckTypeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 't-shirt' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <FormControl>
        <FormLabel>
          Pick your deck type
          <Select value={this.state.value} onChange={this.handleChange}>
            <option value="t-shirt">t-shirt</option>
            <option value="fibonacci">fibonacci</option>
          </Select>
        </FormLabel>
        <Input type="submit" value="Submit" />
      </FormControl>
    );
  }
}

export { DeckTypeForm };
