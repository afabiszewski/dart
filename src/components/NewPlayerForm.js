import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

class NewPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <FormControl onSubmit={this.handleSubmit}>
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
