import { ButtonGroup } from '@chakra-ui/react';
import { Card } from './Card';

function Deck() {
  const cardValues = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  let deckOfCards = cardValues.map(function (value) {
    return <Card frontValue={value} />;
  });

  return (
    <ButtonGroup gap={4} display={'flex'} flexWrap={'wrap'}>
      {deckOfCards}
    </ButtonGroup>
  );
}

export { Deck };
