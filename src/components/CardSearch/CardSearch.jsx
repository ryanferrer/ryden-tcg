import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input } from 'semantic-ui-react';
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
    }, () => {
      console.log(this.state);
    });
  }

  search() {
    const { searchTerm } = this.state;

    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchTerm}`)
      .then((response) => {
        const { data } = response.data;
        console.log(response);

        this.setState({
          searchResult: data,
        }, () => {
          console.log(this.state);
        });
      });
  }

  render() {
    // Layout:
    // - Search Bar to find ANY card
    // - List that contains cards added from Search Bar
    const { searchResult } = this.state;

    return (
      <div>

        <Form
          onSubmit={this.search}
        >
          <Input
            name="searchTerm"
            onChange={this.handleChange}
          />
        </Form>

        {
          searchResult
            ? <CardList cards={searchResult} />

            : ''
        }
      </div>
    );
  }
}

export default CardSearch;
