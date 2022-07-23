import React from 'react';
import { Text } from '@chakra-ui/react';

function Player(props) {
  return (
    <Text fontSize="xl">
      {props.name} {props.points}
    </Text>
  );
}

export { Player };
