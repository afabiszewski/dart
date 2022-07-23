import React from 'react';
import { Button } from '@chakra-ui/react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardSelected: false,
    };
  }

  style = {
    size: 'lg',
    width: '100px',
    height: '100px',
    margin: '8px',
  };

  cardChosen = () => {
    this.setState(prevState => ({
      isCardSelected: !prevState.isCardSelected,
    }));
  };

  render() {
    return (
      <Button
        onClick={this.cardChosen}
        colorScheme={'teal'}
        variant={this.state.isCardSelected ? 'solid' : 'outline'}
        style={this.style}
      >
        {this.props.frontValue}
      </Button>
    );
  }
}

export { Card };
