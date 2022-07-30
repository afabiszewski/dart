import React from 'react';
import { ButtonGroup } from '@chakra-ui/react';
import { Card } from './Card';

class Deck extends React.Component {
  cardValues = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  deckOfCards = this.cardValues.map(value => (
    <Card key={value} frontValue={value} />
  ));

  constructor() {
    super();
    this.state = { lastClicked: null };
  }

  render() {
    return (
      <ButtonGroup gap={4} display={'flex'} flexWrap={'wrap'}>
        {this.deckOfCards}
      </ButtonGroup>
    );
  }
}

export { Deck };
