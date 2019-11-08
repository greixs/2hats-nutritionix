import React, { Component } from "react";
import Details from "./Details";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { fade, withStyles } from "@material-ui/core/styles";

const style = {
  primaryText: {
    fontFamily: "Roboto-Medium",
    fontSize: "16px"
  },
  secondaryText: {
    fontFamily: "Roboto-Regular",
    fontSize: "14px"
  },
  secondaryActionText: {
    textAlign: "right"
  }
};

class Types extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { intake_list } = this.props;

    const { classes } = this.props;
    return (
      <div style={{ zIndex: 2 }}>
        <List>
          {intake_list.map(intake => {
            const multiplier = intake.serving_size / intake.serving_qty;
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={intake.thumb}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  classes={{
                    primary: classes.primaryText,
                    secondary: classes.secondaryText
                  }}
                  primary={intake.food_name}
                  secondary={`${intake.serving_qty} ${
                    intake.serving_unit
                  } (${multiplier * intake.serving_weight_grams} g)`}
                />
                <ListItemSecondaryAction>
                  <ListItemText
                    classes={{ secondary: classes.secondaryActionText }}
                    primary={`${multiplier * intake.nf_calories} Cal`}
                    secondary={intake.meal_type}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default withStyles(style)(Types);
