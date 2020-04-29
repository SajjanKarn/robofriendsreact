import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import ScrollArea from "../components/ScrollArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({
      SearchField: event.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        this.setState({
          robots: data,
        });
      });
  }

  render() {
    const { robots, SearchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(SearchField.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1 pa3 white">Robofriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <ScrollArea>
          <CardList robots={filteredRobots} />
        </ScrollArea>
      </div>
    );
  }
}

export default App;
