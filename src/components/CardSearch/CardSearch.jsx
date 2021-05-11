import React, { Component } from 'react';
import axios from 'axios';
import {
  Container, Form, Input,
} from 'semantic-ui-react';
import CardList from './CardList';

class CardSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  search() {
    const { searchTerm } = this.state;

    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchTerm}`)
      .then((response) => {
        const { data } = response.data;
        console.log(response);

        this.setState({
          searchTerm: '',
          searchResult: data,
        }, () => {
          console.log('setting cards in state', this.state);
        });
      });
  }

  render() {
    // Layout:
    // - Search Bar to find ANY card
    // - List that contains cards added from Search Bar
    const { searchTerm, searchResult } = this.state;
    const { handleClick } = this.props;

    return (
      <Container
        className="card-search"
        fluid
      >

        <Form
          onSubmit={this.search}
        >
          <Input
            name="searchTerm"
            fluid
            placeholder="Search for a card"
            value={searchTerm}
            onChange={this.handleChange}
          />
        </Form>

        {/* <Divider /> */}

        {
          searchResult
            ? <CardList cards={searchResult} handleClick={handleClick} />

            : ''
        }
      </Container>
    );
  }
}

export default CardSearch;
