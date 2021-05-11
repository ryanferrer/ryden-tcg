import React, { Component } from 'react';
import {
  Container,
  Header, Image, Placeholder,
} from 'semantic-ui-react';

class CardDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { selectedCard } = this.props;
    console.log(selectedCard);

    return (
      <Container fluid celled="internally">
        {
          Object.keys(selectedCard).length
            ? (
              <Container textAlign="center">
                <Header>{selectedCard.name}</Header>
              </Container>
            )

            : <Placeholder />
            }
        {
            Object.keys(selectedCard).length
              ? (
                <Container fluid textAlign="center">
                  <Image size="medium" verticalAlign="middle" src={selectedCard.card_images[0].image_url} />
                </Container>
              )

              : <Placeholder />
          }

        {
            Object.keys(selectedCard).length
              ? (
                <Container fluid>
                  <p>{selectedCard.desc}</p>
                </Container>
              )

              : <Placeholder />
          }
      </Container>
    );
  }
}

export default CardDisplay;
