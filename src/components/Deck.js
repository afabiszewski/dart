import React from 'react';
import { ButtonGroup } from '@chakra-ui/react';
import { Card } from './Card';

class Deck extends React.Component {
  constructor() {
    super();

    var cardValues = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    //TODO extract to method
    this.deckOfCards = cardValues.map(function (value) {
      return <Card frontValue={value} />;
    });

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
