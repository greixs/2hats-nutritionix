import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const style = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    position: "relative",
    backgroundColor: "white",
    zIndex: 0
  },
  suggestionsContainerOpen: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    paddingLeft: theme.spacing(1),
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  suggestionImage: {
    width: "40px",
    height: "40px",
    borderRadius: "4px"
  },
  divider: {
    height: theme.spacing(2)
  },
  fab: {
    position: "absolute",
    bottom: "2%",
    right: "2%"
  }
});

// fetch the data from the API
const getSuggestions = query => {
  if (query) {
    return axios
      .get(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
        {
          headers: {
            "x-app-id": "30645a8a",
            "x-app-key": "c480af1726fb78bb87f97bb49779e736"
          }
        }
      )
      .then(({ data }) => {
        var result = Object.keys(data).map(key => {
          return { title: key, value: data[key].slice(0, 5) };
        });
        return result;
      });
  } else {
    return [];
  }
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

/////////////////////////////////////////////////////////////////////////////////////////////
const renderInputComponent = inputProps => {
  const { classes, inputRef, ...other } = inputProps;
  console.log(inputRef);
  return (
    <InputBase
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      inputprops={{
        // inputRef: node => {
        //   ref(node);
        //   inputRef(node);
        // },
        classes: {
          input: classes.input
        }
      }}
      inputRef={inputRef}
      {...other}
    />
  );
};

const renderSectionTitle = section => {
  return (
    <Typography variant="overline" align="left">
      <Divider component="div" />
      {section.title}
    </Typography>
  );
};

const getSectionSuggestions = section => {
  return section.value;
};

class SearchSuggestions extends React.Component {
  constructor() {
    super();

    this.state = {
      single: "",
      popper: "",
      stateSuggestions: [],
      anchorEl: null,
      value: "",
      suggestions: [],

      classes: null
    };
  }

  isLastSuggestion = suggestion => {
    const lastCommon = this.state.stateSuggestions[0].value[4];
    const lastBranded = this.state.stateSuggestions[1].value[4];
    return (
      JSON.stringify(suggestion) == JSON.stringify(lastCommon) ||
      JSON.stringify(suggestion) == JSON.stringify(lastBranded)
    );
  };

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    return (
      <List selected={isHighlighted} component="div">
        <MenuItem component="div" style={{ whiteSpace: "normal" }}>
          <ListItemAvatar>
            <Avatar
              src={suggestion.photo.thumb}
              style={{ width: "40px", height: "40px", borderRadius: "4px" }}
            />
          </ListItemAvatar>
          <ListItemText primary={suggestion.food_name} />
        </MenuItem>
        {this.isLastSuggestion(suggestion) ? null : <Divider variant="inset" />}
      </List>
    );
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value).then(data => {
      this.setState({
        stateSuggestions: data
      });
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      stateSuggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      ...this.state,
      [name]: newValue
    });
  };

  getSuggestionValue = suggestion => {
    this.props.setItem(suggestion);
    return suggestion.food_name;
  };

  storeInputReference = autosuggest => {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
      console.log("this input is");
      console.log(autosuggest);
    }
  };

  render() {
    const { value, suggestions, anchorEl, stateSuggestions } = this.state;

    const { classes, inputRef } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.stateSuggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          multiSection={true}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          {...autosuggestProps}
          inputProps={{
            classes,
            id: "react-autosuggest-simple",
            label: "searchFood",
            placeholder: "Search Food...",
            value: this.state.single,
            onChange: this.handleChange("single"),
            inputRef: inputRef
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
        />
      </div>
    );
  }
}

export default withStyles(style)(SearchSuggestions);
