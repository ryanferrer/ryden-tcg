import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CardDisplay from './CardDisplay/CardDisplay';
import CardSearch from './CardSearch/CardSearch';
import './Collection.css';

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCard: {},
      // deckList: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, data) {
    event.preventDefault();
    const card = data.value;

    this.setState({
      selectedCard: card,
    });
  }

  render() {
    const { selectedCard } = this.state;

    return (
      <Grid className="collection" celled>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <CardDisplay selectedCard={selectedCard} />
          </Grid.Column>

          <Grid.Column width={8} />

          <Grid.Column width={4}>
            <CardSearch
              handleClick={this.handleClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Collection;
