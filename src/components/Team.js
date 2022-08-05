import React from 'react';
import { Player } from './Player';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: ['afabiszewski', 'sfabiszewska', 'mtumilowicz'] };
  }

  render() {
    return (
      <ul>
        {this.state.players.map(player => (
          <Player key={player} name={player} points={this.props.points} />
        ))}
      </ul>
    );
  }
}

export { Team };
