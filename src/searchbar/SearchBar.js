import React, { Component } from "react";
import axios from "axios";

import Popup from "./popup/Popup";
import SearchSuggestions from "./SearchSuggestions";

import { AppBar, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import DatePicker from "../dashboard/DatePicker";

const styles = theme => ({
  nav: {
    zIndex: 2
  },
  root: {
    padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    margin: "auto"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: "5px 0"
  },
  iconButton: {
    padding: 10
  },
  suggestionBar: {}
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: null,
      item: null,
      showPopup: false,
      showSuggestionBar: false,
      date: ""
    };

    this.config = {
      headers: {
        "Content-Type":
          "application/json, x-app-id:30645a8a x-app-key:c480af1726fb78bb87f97bb49779e736"
      }
    };
  }

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query.length > 0) {
        this.getSearchResult();
      } else {
        this.setState({ results: null });
      }
    });
  };

  getSearchResult = () => {
    axios
      .get(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.query}`,
        {
          headers: {
            "x-app-id": "30645a8a",
            "x-app-key": "c480af1726fb78bb87f97bb49779e736"
          }
        }
      )
      .then(({ data }) => {
        this.setState({ results: data });
      });
  };

  toggleSuggestionBar = () => {
    setTimeout(() => {
      this.setState({ showSuggestionBar: !this.state.showSuggestionBar });
    }, 500);
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  setItem = item => {
    if (!item.nix_item_id) {
      axios
        .post(
          `https://trackapi.nutritionix.com/v2/natural/nutrients`,
          {
            query: item.food_name
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-app-id": "30645a8a",
              "x-app-key": "c480af1726fb78bb87f97bb49779e736"
            }
          }
        )
        .then(({ data }) => {
          this.setState({ item: data.foods[0] }, () => {
            this.togglePopup();
          });
        });
    } else {
      axios
        .get(
          ` https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${item.nix_item_id}`,
          {
            headers: {
              "x-app-id": "30645a8a",
              "x-app-key": "c480af1726fb78bb87f97bb49779e736"
            }
          }
        )
        .then(({ data }) => {
          this.setState({ item: data.foods[0] }, () => {
            this.togglePopup();
          });
        });
    }
  };

  render() {
    const { classes, inputRef } = this.props;
    return (
      <Grid>
        <AppBar position="static" className={classes.nav}>
          <Paper className={classes.root}>
            <SearchSuggestions inputRef={inputRef} setItem={this.setItem} />
          </Paper>
          <DatePicker
            date={this.props.date}
            onClick={this.props.changeDataDate}
          />
        </AppBar>

        {this.state.showPopup ? (
          <Popup
            open={this.state.showPopup}
            add={item => this.props.addItem(item)}
            close={this.togglePopup}
            item={this.state.item}
          />
        ) : null}
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchBar);
