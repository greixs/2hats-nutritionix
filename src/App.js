import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

import { diet } from "./MockData.js";

import Dashboard from "./dashboard/Dashboard";
import SearchBar from "./searchbar/SearchBar";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: "2%",
    right: "2%"
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 0,
      diet: {}
    };
    this.inputRef = React.createRef();
  }

  changeDataDate = day => {
    let date = this.state.date;
    date.setDate(date.getDate() + day);
    this.setState({
      date: date
    });
    this.dashboard.findIndexByDate(date);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="container"></div>
        <SearchBar
          addItem={item => this.dashboard.addIntake(item)}
          date={this.state.date}
          changeDataDate={date => this.changeDataDate(date)}
          inputRef={this.inputRef}
        />
        <Dashboard
          diet={diet}
          ref={instance => {
            this.dashboard = instance;
          }}
          date={this.state.date}
        />
        <Fab
          onClick={() => this.inputRef.current.focus()}
          className={classes.fab}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }

  componentDidMount() {
    // set the mock data_points date from today to 2 days ago
    let newDiet = diet;
    newDiet.data_points = newDiet.data_points.map((data_point, index) => {
      data_point.date = moment(new Date())
        .subtract(index, "days")
        .format("YYYY-MM-DD");
      return data_point;
    });

    this.setState(
      {
        date: new Date(),
        diet: newDiet
      },
      () => {
        this.dashboard.findIndexByDate(new Date());
      }
    );
  }
}
export default withStyles(styles)(App);
