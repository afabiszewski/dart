import { Button } from '@chakra-ui/react';

function Card(props) {
  const style = {
    size: 'lg',
    width: '100px',
    height: '100px',
    margin: '8px',
  };
  return (
    <Button colorScheme={'teal'} variant={'outline'} style={style}>
      {props.frontValue}
    </Button>
  );
}

export { Card };
