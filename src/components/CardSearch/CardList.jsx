import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => {
  console.log('In card!', card);
  return (
    <div>
      <p>{card.name}</p>
    </div>
  );
};

const CardList = ({ cards }) => (
  <div>
    {
      cards.map((card) => (
        <Card card={card} />
      ))
    }
  </div>
);

Card.propTypes = {
  card: PropTypes.any,
};

Card.defaultProps = {
  card: {},
};

CardList.propTypes = {
  cards: PropTypes.any,
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
