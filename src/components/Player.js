import React from 'react';
import { Text } from '@chakra-ui/react';

class Player extends React.Component {
  render() {
    return (
      <Text fontSize="xl">
        {this.props.name} {this.props.points}
      </Text>
    );
  }
}

export { Player };
