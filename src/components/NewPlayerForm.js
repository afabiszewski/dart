import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

class NewPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <FormControl>
        <FormLabel>
          Name:
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </FormLabel>
        <Input type="submit" value="Submit" />
      </FormControl>
    );
  }
}

export { NewPlayerForm };
