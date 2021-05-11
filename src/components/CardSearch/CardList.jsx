import React from 'react';
import PropTypes from 'prop-types';
import { Image, List } from 'semantic-ui-react';
import './CardList.css';

const YGOCard = ({ card, handleClick }) => (
  <List.Item
    onClick={handleClick}
    value={card}
    fluid
  >
    <List.Content>
      <Image
        src={`${card.card_images[0].image_url_small}`}
        floated="left"
        size="mini"
      />
      <List.Header>{card.name}</List.Header>
      <List.Description>{card.race}</List.Description>
      <List.Description>{card.type}</List.Description>
    </List.Content>
  </List.Item>
);

const CardList = ({ cards, handleClick }) => (
  <List className="card-list" divided relaxed>
    {
      cards.map((card) => (
        <YGOCard card={card} handleClick={handleClick} />
      ))
    }
  </List>
);

YGOCard.propTypes = {
  card: PropTypes.any,
};

YGOCard.defaultProps = {
  card: {},
};

CardList.propTypes = {
  cards: PropTypes.any,
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
